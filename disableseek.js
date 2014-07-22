var maxPlayPosition = 0;
var seeking = false;
jwplayer().onTime(function (event) {
    if (!seeking) maxPlayPosition = Math.max(event.position, maxPlayPosition)
}).onPlaylistItem(function () {
    maxPlayPosition = 0
}).onSeek(function (event) {
    if (!seeking) {
        if (event.offset > maxPlayPosition) {
            seeking = true;
            setTimeout(function () {
                jwplayer().seek(maxPlayPosition)
            }, 100)
        }
    } else seeking = false
});