import { MediaMetadataFactory } from './metadata';
class Playlist {
    constructor() {
        this.length = 0;
    }
    insertTrack(id) {
        MediaMetadataFactory.new(id)
            .then(media => {
            this.mediaList.insert(media);
            if (this.length === 0) {
                this.currentTrack = this.mediaList.tail;
            }
            this.length += 1;
        });
    }
    nextTrack() {
        return this.currentTrack.next;
    }
    previousTrack() {
        return this.mediaList.getPreviousOf(this.currentTrack);
    }
}
export { Playlist };
