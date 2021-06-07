import React from 'react';
import down from '../../assets/icons/down.svg';
import info from '../../assets/icons/info.svg';
import user from '../../assets/icons/user.svg';
import menu from '../../assets/icons/menu.svg';
import chat from '../../assets/icons/messages.svg';
import events from '../../assets/icons/events.svg';
import share2 from '../../assets/icons/share2.svg';
import bell from '../../assets/icons/bell.svg';
import next from '../../assets/icons/bold-next.svg';
import back from '../../assets/icons/bold-back.svg';
import cross from '../../assets/icons/bold-cross.svg';
import question from '../../assets/icons/question.svg';
import favourite2 from '../../assets/icons/favourite2.svg';
import favouriteOn2 from '../../assets/icons/favouriteOn2.svg';
import heart from '../../assets/icons/heart.svg';
import cart from '../../assets/icons/shopping-cart.svg'
import map from '../../assets/icons/map.svg';
import book from '../../assets/icons/books.svg'

import { IIconBtnProps } from './types';
import { Link } from 'react-router-dom';


const Icon = {
    cross,
    back,
    next,
    info,
    user,
    chat,
    question,
    share2,
    favourite2,
    favouriteOn2,
    down,
    menu,
    map,
    events,
    bell,
    heart,
    cart,
    book
};

const IconBtn:React.FC<IIconBtnProps> = ({type, onClick, to, className, secondary, onMouseEnter, onMouseLeave, noHover, onMouseDown, onMouseUp}) => {
    const button = () => (
        <button className={'icon-btn icon-btn--bright' + (className ? (' ' + className) : '') + (secondary ? ' icon-btn--secondary' : '') + (type === "favouriteOn2" ? ' icon-btn--favourite' : '') + (noHover ? ' icon-btn--no-hover' : '')} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            <img alt='icon'
                 className={
                     `${type === 'cross' ? 'cross' : ''} 
                     ${type === 'info' ? 'info' : ''} 
                     ${type === 'menu' ? 'menu' : ''} 
                     ${type === 'user' ? 'user' : ''} 
                     ${type === 'bell' ? 'bell' : ''} 
                     ${type === 'heart' ? 'heart' : ''} 
                     ${type === 'cart' ? 'cart' : ''} 
                     ${type === 'book' ? 'book' : ''} 
                     ${(type === 'back' || type === 'next') ? 'arrow' : ''}`}
                 src={!secondary ? Icon[type] : Icon[type + "Secondary"]}
            />
        </button>
    );

    return (
        <>
            {
                to ? (
                    <Link to={to} className='menu-link-btn'>
                        {button()}
                    </Link>
                ) : (
                    <>
                        {button()}
                    </>
                )
            }
        </>
    )
};

export default IconBtn
