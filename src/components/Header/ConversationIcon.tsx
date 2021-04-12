
import React , {useEffect} from 'react';
import SendBirdSyncManager from "sendbird-syncmanager";

import {  isEmpty, redirectToIndex } from '../../services/sendbird/utils';
import { SendBirdAction } from '../../services/sendbird/SendBirdAction';
import { SendBirdConnection } from '../../services/sendbird/SendBirdConnection';
import {IConversationIconProps} from './types';
// import { Toast } from './components/Toast';
// import { Chat } from '../../services/sendbird/Chat';

import {connect} from "react-redux";
import { setCurrentConversation, setAllConversations } from '../../containers/Conversation/redux/actions';
import {IHeaderProps} from "./types";
import MenuItem from "../MenuItem";
import Conversation from '../../assets/icons/conversation.svg'
import IconBtn from "../IconBtn";

const sb = new SendBirdAction();

let chat = null;
const createConnectionHandler = () => {
    const manager = SendBirdSyncManager.getInstance();
    const connectionManager = new SendBirdConnection();
    connectionManager.onReconnectStarted = () => {
        // Toast.start(document.body, 'Connection is lost. Trying to reconnect...');
        connectionManager.channel = chat.channel;
    };
    connectionManager.onReconnectSucceeded = () => {
        // chatLeft.updateUserInfo(SendBirdAction.getInstance().getCurrentUser());
        // Toast.remove();
        manager.resumeSync();
    };
    connectionManager.onReconnectFailed = () => {
        connectionManager.reconnect();
    };
};

const ConversationIcon:React.FC<IConversationIconProps> = ({profileData, isLoggedIn, handleConversation, setAllConversations, conversationList, isInEvent}) => {

    useEffect(() => {
        if(profileData.id) {
            loadChannels()
        }
    }, [profileData.id]);

    const loadChannels = () => {
        console.log('profileData = ', profileData)
        initSync(profileData.id, profileData.name, profileData.image ? profileData.image.data.signedUrl120 : '', profileData.role )
    }

    const initSync = async (userid, nickname, profile_url = '', type) => {
        // const { userid, nickname } = getVariableFromUrl();
        if (isEmpty(userid) || isEmpty(nickname)) {
            redirectToIndex('UserID and Nickname must be required.');
        }
        // const {isInEvent} = this.props;

        SendBirdSyncManager.sendBird = sb.sb;
        const options = new SendBirdSyncManager.Options();
        options.messageCollectionCapacity = 2000;
        // options.messageResendPolicy = 'automatic';
        options.automaticMessageResendRetryCount = 5;
        options.maxFailedMessageCountPerChannel = 50;
        options.failedMessageRetentionDays = 7;
        // SendBirdSyncManager.getInstance().clearCache();

        SendBirdSyncManager.setup(userid, options, () => {


            let activeChannelUrl = null;
            let channels = [];

            const action = new SendBirdAction();
            const query = action.sb.GroupChannel.createMyGroupChannelListQuery();
            query.limit = 50;
            query.publicChannelFilter = 'private';
            query.includeEmpty = false;
            query.order = 'latest_last_message';

            // Only when not being used in event tab
            if(!isInEvent) {
                let channelCollection = new SendBirdSyncManager.ChannelCollection(query);
                channelCollection.fetch((data) => {
                    // sendEvent(CHANNELS_LIST_UPDATED, { action: 'forceInsert', channels: this.channels });
                    console.log('data = ', data);
                    // this.toggleGroupChannelDefaultItem();
                });
                // console.log('this.channelCollection = ', channelCollection);
                const collectionHandler = new SendBirdSyncManager.ChannelCollection.CollectionHandler();
                collectionHandler.onChannelEvent = (action, _channels) => {
                    console.log('firing CHANNELS_LIST_UPDATED = ', action, _channels, conversationList);
                    // sendEvent(CHANNELS_LIST_UPDATED, { action, channels });
                    channels = _channels;
                    switch (action) {
                        case 'insert': {
                            const concatedList = _channels.concat(conversationList);
                            console.log('concatedList = ', concatedList)
                            setAllConversations(_channels);
                            // for (let i in channels) {
                            //   const channel = channels[i];
                            //   const index = findChannelIndex(channel, this.channelCollection.channels);
                            //   const handler = () => {
                            //     // Chat.getInstance().render(channel, false);
                            //     this.activeChannelUrl = channel.url;
                            //   };
                            //   const item = new LeftListItem({ channel, handler });
                            //   if (index < this.groupChannelList.childNodes.length - 1) {
                            //     this.groupChannelList.insertBefore(item.element, this.groupChannelList.childNodes[index]);
                            //   } else {
                            //     this.groupChannelList.appendChild(item.element);
                            //   }
                            //   if (this.activeChannelUrl === channel.url) {
                            //     this.activeChannelItem(channel.url);
                            //   }
                            // }
                            // LeftListItem.updateUnreadCount();
                            // this.toggleGroupChannelDefaultItem();
                            break;
                        }
                        case 'update': {
                            // for (let i in channels) {
                            //   const channel = channels[i];
                            //   const item = this.getItem(channel.url);
                            //   const handler = () => {
                            //     // Chat.getInstance().render(channel, false);
                            //     this.activeChannelUrl = channel.url;
                            //   };
                            //   const newItem = new LeftListItem({ channel, handler });
                            //   this.groupChannelList.replaceChild(newItem.element, item);
                            //   if (this.activeChannelUrl === channel.url) {
                            //     this.activeChannelItem(channel.url);
                            //   }
                            // }
                            // LeftListItem.updateUnreadCount();
                            break;
                        }
                        // case 'move': {
                        //   for (let i in channels) {
                        //     const channel = channels[i];
                        //     const previousElement = this.getItem(channel.url);
                        //     this.groupChannelList.removeChild(previousElement);
                        //
                        //     const handler = () => {
                        //       channel.markAsRead();
                        //       // Chat.getInstance().render(channel, false);
                        //       this.activeChannelUrl = channel.url;
                        //     };
                        //     const newItem = new LeftListItem({ channel, handler });
                        //     const index = findChannelIndex(channel, this.channelCollection.channels);
                        //     if (index < this.groupChannelList.childNodes.length - 1) {
                        //       this.groupChannelList.insertBefore(newItem.element, this.groupChannelList.childNodes[index]);
                        //     } else {
                        //       this.groupChannelList.appendChild(newItem.element);
                        //     }
                        //     if (this.activeChannelUrl === channel.url) {
                        //       this.activeChannelItem(channel.url);
                        //     }
                        //   }
                        //   LeftListItem.updateUnreadCount();
                        //   break;
                        // }
                        // case 'remove': {
                        //   for (let i in channels) {
                        //     const channel = channels[i];
                        //     if (this.activeChannelUrl === channel.url) {
                        //       this.activeChannelUrl = null;
                        //       // Chat.getInstance().render();
                        //     }
                        //     const element = this.getItem(channel.url);
                        //     this.groupChannelList.removeChild(element);
                        //   }
                        //   this.toggleGroupChannelDefaultItem();
                        //   break;
                        // }
                        // case 'clear': {
                        //   if (this.activeChannelUrl) {
                        //     // Chat.getInstance().render();
                        //   }
                        //   this.activeChannelUrl = null;
                        //   const elements = this.groupChannelList.getElementsByClassName(LeftListItem.getItemRootClassName());
                        //   for (let i in elements) {
                        //     this.groupChannelList.removeChild(elements[i]);
                        //   }
                        //   this.toggleGroupChannelDefaultItem();
                        //   break;
                        // }
                    }
                };
                channelCollection.setCollectionHandler(collectionHandler);
            }
            if(type === "vip") {
                type = "collector"
            }
            console.log('profile_url = ', profile_url, userid, type);
            sb.connect(userid.toString(), nickname, profile_url)
                .then((user) => {
                    console.log('user = ', user);
                    if (!user.metaData.type) {
                        user.createMetaData({ type: type }, (_user, _err) => {
                            console.log('_user = ', _user, _err);
                            createConnectionHandler();
                        });
                    }
                    else if (user.metaData.type !== type) {
                        user.updateMetaData({ type: type }, (_user, _err) => {
                            console.log('_user = ', _user, _err);
                            createConnectionHandler();
                        });
                    } else {
                        createConnectionHandler();
                    }
                    // sb.updateMetaData({data: type}, (_, __) => {
                    //   createConnectionHandler();
                    // })
                    // chatLeft.updateUserInfo(user);
                })
                .catch((e) => {
                    console.log('e = ', e)
                    // Toast.start(document.body, 'Connection is not established.');
                });
        });
    };

    if(isInEvent) return null;
    else return (
        <>
            {/*<SubTitle value='Conversations'/>*/}
            <IconBtn type="chat" onClick={handleConversation} />
            {/*<MenuItem value='Conversations' icon={Conversation} />*/}
        </>
    )
}


const mapStatesToProps = ({ conversation, profile }) => {
    return {
        conversationList: conversation.conversationList,
        profileData: profile.profileData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        currentConversation: (id) => {dispatch(setCurrentConversation(id))},
        setAllConversations: (value) => {dispatch(setAllConversations(value))}
    }
};

export default connect(mapStatesToProps, mapDispatchToProps)(ConversationIcon)
