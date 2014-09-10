prettyDate = function (time, shortFormat) {
    var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
        diff = (( ((new Date()).getTime() + date.getTimezoneOffset()*60*1000) - date.getTime()*1) / 1000),
        day_diff = Math.floor(diff / 86400);
    if (shortFormat) {
        if ( isNaN(day_diff) || day_diff < 0 ) return 'now';
        return day_diff == 0 && (
                   diff < 2 && "1s ago" ||
                   diff < 60 && ~~diff + "s ago" ||
                   diff < 120 && "1m ago" ||
                   diff < 3600 && Math.floor( diff / 60 ) + "m ago" ||
                   diff < 7200 && "1h ago" ||
                   diff < 86400 && Math.floor( diff / 3600 ) + "h ago"
               ) ||
               //day_diff == 1 && "Yesterday" ||
               day_diff < 7 && day_diff + "d ago" ||
               day_diff >= 7 && day_diff < 14 && "1w ago" ||
               day_diff < 31 && ~~( day_diff / 7 ) + "w ago" ||
               day_diff < 62 && ~~( day_diff / 31 ) + "mo ago" ||
               day_diff && ~~( day_diff / 31 ) + "mo ago";
    } else {
        if ( isNaN(day_diff) || day_diff < 0 ) return 'just now';
        return day_diff == 0 && (
                   diff < 2 && "1 second ago" ||
                   diff < 60 && ~~diff + " seconds ago" ||
                   diff < 120 && "1 minute ago" ||
                   diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
                   diff < 7200 && "1 hour ago" ||
                   diff < 86400 && Math.floor( diff / 3600 ) + " hours ago"
            ) ||
            day_diff == 1 && "Yesterday" ||
            day_diff < 7 && day_diff + " days ago" ||
            day_diff >= 7 && day_diff < 14 && "1 week ago" ||
            day_diff < 31 && ~~( day_diff / 7 ) + " weeks ago" ||
            day_diff < 62 && ~~( day_diff / 31 ) + " month ago" ||
            day_diff && ~~( day_diff / 31 ) + " months ago";
    }
}