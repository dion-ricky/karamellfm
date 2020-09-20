import { Playlist } from './playlist';
class MediaPlayer {
    constructor() {
        this.playlist = new Playlist();
        this.audioObj = new Audio();
        this.played = false;
        this.stopped = true;
    }
    // play(id)
    play() {
        // before playing, check if playlist is not empty
        // if playlist is not empty, play currentTrack from playlist
        if (this.audioObj.src === "") {
            throw Error("Media source is not set");
        }
        this.audioObj.play();
        this.played = true;
        // also don't forget to change media session
    }
    pause() {
        if (this.played) {
            this.audioObj.pause();
            this.played = false;
        }
    }
    stop() {
    }
    seek() {
    }
    seekTo() {
    }
}
export { MediaPlayer };
