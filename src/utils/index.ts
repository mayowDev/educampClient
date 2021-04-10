// @ts-ignore
import SendBirdSyncManager from 'sendbird-syncmanager';

// @ts-ignore
export const formatDate = (date, isEndDate = false) => {
    const newDate = new Date(date);
    var month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    const monthName = month[newDate.getMonth()];
    const newdate = newDate.getDate();
    const endYear = newDate.getFullYear();
    return isEndDate ? `${newdate} ${monthName} ${endYear}` : `${newdate} ${monthName}`;
};

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const formatDateTime = (date) => {
    const newDate = new Date(date);
    var month = [];
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    const monthName = month[newDate.getMonth()];
    const newdate = newDate.getDate();
    const year = newDate.getFullYear();
    const getHour = formatAMPM(newDate);
    return `${monthName} ${newdate}, ${year} • ${getHour} GMT`;
};

export const logout = () => {
    localStorage.clear();
    setTimeout(() => {
        window.location.href = "/";
    }, 100)
    // SendBirdSyncManager && SendBirdSyncManager.getInstance() && SendBirdSyncManager.getInstance().clearCache();
}

export const getIdFromSlug = (slug) => {
    if(!slug) {
        return;
    }
    let splitted = slug.split("-");
    if(splitted && splitted.length > 1) {
        return splitted[splitted.length - 1]
    }
    else {
        return slug;
    }
}

export const getShareURL = (type, id) => {
    const SHARE_APP = 'https://app.vortic.io/'
    return `${SHARE_APP}${type}/${id}`
};
export const isMobileDevice = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return true
    }else{
        return false
    }
}

export const IsSafari = () =>{
    // @ts-ignore
    return /constructor/i.test(window.HTMLElement) || (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
        // @ts-ignore
    })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

}

export const isAndroidDevice = () => {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    // if(isAndroid) {
    //     // Do something!
    //     // Redirect to Android-site?
    //     // window.location = 'http://android.davidwalsh.name';
    // }
    return isAndroid;
}

export const isEventFull = (attendees) => {
    return attendees && attendees > 35;
}

export const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

export const secondsToHms = (d) => {
    let sec_num = parseInt(d, 10); // don't forget the second param
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        // @ts-ignore
        hours = "0" + hours
    }
    if (minutes < 10) {
        // @ts-ignore
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        // @ts-ignore
        seconds = "0" + seconds;
    }
    // @ts-ignore
    const smHours = hours !== "00" ? hours + ':' : '';
    return smHours + minutes + ':' + seconds;
}
