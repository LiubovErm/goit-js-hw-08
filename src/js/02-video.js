import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayerEl = document.querySelector('#vimeo-player');
const player = new Player(videoPlayerEl);
const KEY = 'videoplayer-current-time';
const savedTime = localStorage.getItem(KEY);


player.on('timeupdate', throttle(setTimeStorage, 1000));

function setTimeStorage ({ seconds }) {
   localStorage.setItem(KEY, seconds);
};

player.setCurrentTime(savedTime);






// шаблон setCurrentTime
// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });