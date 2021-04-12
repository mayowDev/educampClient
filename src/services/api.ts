import axios from "./axios-foursquare";
import axiosMain from "axios";
import {BACKEND_URL} from "../configs"

import { isMobileDevice } from '../utils';
// import { initSync } from './sendbird/main'
const getWebMobileParam = () => {
    let params = '';
    // Only pass params is BETA API is being used.
    // if(!BACKEND_URL.includes('api')) {
    //     return params;
    // }
    // if(isMobileDevice()){
    //     params = "&mobile=true"
    // }else{
    //     params = "&web=true"
    // }
    return params;
};

console.log('${getWebMobileParam()} = ', getWebMobileParam())

import {LOCAL_STORAGE_KEYS, RECORDS_LIMIT} from "../components/Constants"
// import * as config from "../config";
export const login = async (
    email: string,
    password: string
) => {
        const result = await axiosMain
            .post(`${BACKEND_URL}login`, {
                email, password, device: 'WEBAPP'
            })
            .catch((err: any) => {
                return Promise.reject(err.response);
            });
        if (result && result.data && result.data.token) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, JSON.stringify(result.data.token))
            localStorage.setItem(LOCAL_STORAGE_KEYS.AWS, JSON.stringify(result.data.aws))
            return result && result.data
        }
};

export const forgot = async (data) => {
    try {
        const result = await axios
            .post("/resetPassword", data)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err)));
            });
        return result && result.data;
    } catch (e) {
        console.log('e = ', e);

        return Promise.reject(new Error(e.message));
    }
};

export const reset = async (data) => {
    try {
        const result = await axios
            .post("/validateResetCode", data)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        return result && result.data;
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const updateProfile = async (data) => {
    console.log('data in Apis', data);
    try {
        const result = await axios
            .put(`/user`, data)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            delete result.data['image']
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const updateProfileImage = async (data) => {
    console.log('data in Apis', data);
    try {
        const result = await axios
            .post(`/user/media`, data)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const getUpdateProfile = async () => {
    try {
        const result = await axios
            .get(`/user`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchExhibitions = async (payload) => {
    const {page, filterType} = payload;
    console.log('API = ', payload)
    try {
        const result = await axios
            .get(`/user/discover/exhibitions?cardsView=true&page=${page}&limit=${RECORDS_LIMIT}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        console.log('fetchExhibitions = ', result)
        if (result) {
            return {...result.data, currentPage: page};
        }
    } catch (e) {
        console.log('fetchExhibitions Error = ', e.message)
        return Promise.reject(new Error(e.message));
    }
};

export const fetchPrivateExhibitions = async (payload) => {
    const {page} = payload;
    console.log('API = ', payload)
    try {
        const result = await axios
            .get(`/user/discover/private-exhibitions?cardsView=true&page=${page}&limit=${RECORDS_LIMIT}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        console.log('fetchExhibitions Error = ', e.message)
        return Promise.reject(new Error(e.message));
    }
};

export const fetchPrivateAndPublicExhibitions = async ({page, filterType = 'all'}) => {
    console.log('API = ', page, filterType)
    try {
        const result = await axios
            .get(`/user/web/discover/exhibitions?filter=${filterType}&cardsView=true&page=${page}&limit=${RECORDS_LIMIT}${getWebMobileParam()}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return {...result.data, currentPage: page};
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchExhibitionsDetails = async (id) => {
    try {
        const result = await axios
            .get(`/user/exhibitions/${encodeURIComponent(id)}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const fetchExhibitionArtworks = async (id) => {
    console.log('fetchExhibitionArtworks = ', id);
    try {
        const result = await axios
            .get(`/user/exhibitions/${id}/artworks?cardsView=true`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchExhibitionArtists = async (id) => {
    console.log('fetchExhibitionArtists = ', id);
    try {
        const result = await axios
            .get(`/user/exhibitions/${id}/artists?cardsView=true`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchGalleries = async ({page, filter = "alphabetical", type}) => {
    console.log("type in = ", type);
    try {
        const result = await axios
            .get(`user/discover/galleries?featured=true&cardsView=true&filter=${filter}&limit=${RECORDS_LIMIT}&page=${page}${getWebMobileParam()}&type=${type}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return {...result.data, currentPage: page};
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchGalleryDetails = async (id) => {
    try {
        const result = await axios
            .get(`user/galleries/${encodeURIComponent(id)}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const fetchGalleryArtists = async (id) => {
    try {
        const result = await axios
            .get(`user/galleries/${id}/artists?cardsView=true`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const fetchGalleryExhibitions = async (id) => {
    try {
        const result = await axios
            .get(`user/galleries/${id}/exhibitions?cardsView=true`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchArtistDetails = async (id) => {
    try {
        const result = await axios
            .get(`user/artists/${encodeURIComponent(id)}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const fetchArtistExhibitions = async (id) => {
    try {
        const result = await axios
            .get(`user/artists/${id}/exhibitions?cardsView=true`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const fetchArtistArtworks = async (id) => {
    try {
        const result = await axios
            .get(`user/artists/${id}/artworks`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchCollectives = async (page) => {
    try {
        const result = await axios
            .get(`user/discover/groups?page=${page}&limit=${RECORDS_LIMIT}${getWebMobileParam()}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return {...result.data, currentPage: page};
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchCollectivesMeta = async () => {
    try {
        const result = await axios
            .get('/user/discover/groups/meta')
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchFavourites = async () => {
    try {
        const result = await axios
            .get(`user/favourites`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return {...result.data};
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const favouriteExhibition = async (exhibitionId) => {
    try {
        const result = await axios
            .put(`exhibitions/${exhibitionId}/favourite`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const favouriteGalleries = async (galleryId) => {
    try {
        const result = await axios
            .put(`galleries/${galleryId}/favourite`)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const favouriteArtists = async (artistID) => {
    try {
        const result = await axios
            .put(`/artists/${artistID}/favourite`)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const favouriteArtworks = async (artistID) => {
    try {
        const result = await axios
            .put(`/artworks/${artistID}/favourite`)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchCollectiveDetails = async (id) => {
    try {
        const result = await axios
            .get(`user/groups/${encodeURIComponent(id)}?cardsView=true`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const fetchCollectiveExhibitions = async (id) => {
    try {
        const result = await axios
            .get(`user/groups/${id}/exhibitions?cardsView=true`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const fetchCollectiveGalleries = async (id) => {
    try {
        const result = await axios
            .get(`user/groups/${id}/organisations?cardsView=true`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const fetchArtworkDetails = async (id) => {
    try {
        const result = await axios
            .get(`user/artworks/${encodeURIComponent(id)}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
let cancel;
var CancelToken = axiosMain.CancelToken;

export const fetchSearch = async (searchQuery, page, loadingMore) => {
    try {
        // console.log('cancel = ', cancel)
        // if (cancel != undefined) {
        //     cancel();
        //     console.log("cancelled");
        // }

        // &page=${page}&limit=${RECORDS_LIMIT}
        const result = await axios
            .get(`user/web/discover?search=${searchQuery}&page=${page}&limit=${5}`, {
                // cancelToken: new CancelToken(function executor(c) {
                //     cancel = c;
                // }),
            })
            .catch((err: any) => {
                console.log('fetchSearch err = ', err, err.response);
                if (err && !!err.response) {
                    return Promise.reject(
                        new Error(err)
                    );
                }
                if (err.response) {
                    return Promise.reject(new Error(JSON.stringify(err.response.data)));
                }
                return Promise.reject(new Error(JSON.stringify(err)));
            });
        if (result) {
            return {...result.data, currentPage: page, loadingMore: loadingMore};
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};


export const fetchCurateDetails = async (exhibitionId) => {
    try {
        const result = await axios
            .get(`/exhibitions/${exhibitionId}/curate`)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const fetchArtworkMedia = async (exhibitionId, artworkId) => {
    try {
        const result = await axios
            .get(`user/${exhibitionId}/artworks/${artworkId}`)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const register = async (data) => {
    try {
        const result = await axios
            .post(`/register`, data)
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}
export const acceptInvite = async (code) => {
    try {
        const result = await axios
            .post(`/invites/accept`, {
                code
            })
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const createPassword = async (body, authToken) => {
    try {
        const result = await axios
            .post(`/createPassword`, body, {
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            })
            .catch((err: any) => {
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
}

export const resetPassword = async (data) => {
    try {
        const result = await axios
            .put("/updateProfile", data)
            .catch((err: any) => {
                return err;
            });
        if(result && result.data){
            return result.data;
        }
        else if (result){
            return result;
        }
    } catch (e) {
        return e;
    }
};

export const updateSuscriptionStatus = async (eventId, data) => {
    try {
        const result = await axios
            .put(`/user/events/${eventId}`, data)
            .catch((err: any) => {
                return err;
            });
        if(result && result.data){
            return result.data;
        }
        else if (result){
            return result;
        }
    } catch (e) {
        return e;
    }
};

export const enquireArtwork = async (data) => {
    try {
        const result = await axios
            .post("/user/contact", data)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err)));
            });
        return result && result.data;
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const fetchEvents = async (exhibitionId) => {
    console.log('API events => ', exhibitionId);
    try {
        const result = await axios
            .get(`user/exhibitions/${exhibitionId}/events`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        console.log('fetchEvents = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        console.log('fetchEvents Error = ', e.message)
        // return Promise.reject(new Error(e.message));
    }
};
export const fetchCurrentEvent = async (exhibitionId) => {
    console.log('API events => ', exhibitionId);
    try {
        const result = await axios
            .get(`user/exhibitions/${exhibitionId}/currentEvent`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        console.log('fetchCurrentEvent = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        console.log('fetchEvents Error = ', e.message)
        // return Promise.reject(new Error(e.message));
    }
};

export const fetchEventDetails = async (eventId) => {
    try {
        const result = await axios
            .get(`user/events/${eventId}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        console.log('fetchEventDetails = ', result)
        console.trace();
        if (result) {
            return result.data;
        }
    } catch (e) {
        console.log('fetchEvents Error = ', e.message)
        // return Promise.reject(new Error(e.message));
    }
};

export const fetchEventToken = async (eventId) => {
    try {
        const result = await axios
            .get(`events/${eventId}/token?deviceId=123`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        console.log('fetchEventToken = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        console.log('fetchEvents Error = ', e.message)
        // return Promise.reject(new Error(e.message));
    }
};

export const RegisterEvent = async (eventId) => {
    console.log('API events => ', eventId);
    try {
        const result = await axios
            .post(`events/${eventId}/register`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        console.log('RegisterEvent = ', result)
        if (result) {
            return result;
        }
    } catch (e) {
        console.log('fetchEvents Error = ', e.message)
        // return Promise.reject(new Error(e.message));
    }
};

export const UnRegisterEvent = async (eventId) => {
    console.log('API events => ', eventId);
    try {
        const result = await axios
            .post(`events/${eventId}/unregister`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        console.log('UnRegisterEvent = ', result)
        if (result) {
            return result;
        }
    } catch (e) {
        console.log('fetchEvents Error = ', e.message)
        // return Promise.reject(new Error(e.message));
    }
};

export const fetchArtworkAgent = async (artworkId) => {
    try {
        const result = await axios
            .get(`/user/artworks/${artworkId}/agent`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        console.log('fetchArtworkAgent = ', result)
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

// export const initSendbird = async (data) => {
//     console.log("initSendbird")
//     const { id, name, profileUrl, role } = data;
//     try {
//         const resp = initSync(id, name, profileUrl, role);
//         console.log('resp from sendbird ===>>> ', resp);
//         return {};
//         // if(resp){
//         //
//         // }
//     } catch (e) {
//         return Promise.reject(new Error(e.message));
//     }
// };

export const fetchTotalUnread = async (payload) => {
    return undefined;
};

export const getDiscoverDetails = async () => {
    try {
        const result = await axios
            .get(`/user/discover-page`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const getDiscoverPreviewDetails = async () => {
    try {
        const result = await axios
            .get(`/user/discover-page/preview`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};

export const getDiscoverExhibitions = async (id) => {
    try {
        const result = await axios
            .get(`/user/discover-page/${id}`)
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
export const reSendEmail = async (email) => {
    try {
        const result = await axios
            .post(`resendEmail`,{
                email
            })
            .catch((err: any) => {
                console.log('err = ', err);
                if (err && err.response && err.response.status === 400) {
                    return Promise.reject(
                        new Error("Request failed with status code 400")
                    );
                }
                return Promise.reject(new Error(JSON.stringify(err.response.data)));
            });
        if (result) {
            return result.data;
        }
    } catch (e) {
        return Promise.reject(new Error(e.message));
    }
};
