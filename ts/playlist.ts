import { MediaMetadata, MediaMetadataFactory } from './metadata';
import { SLList, SLNode } from './util';

class Playlist {

    currentTrack: SLNode<MediaMetadata> | null;
    mediaList: SLList<MediaMetadata> | null;
    length: number;

    constructor () {
        this.length = 0;
    }

    insertTrack(id: string): void {
        MediaMetadataFactory.new(id)
        .then(media => {
            this.mediaList.insert(media);
            
            if (this.length === 0) {
                this.currentTrack = this.mediaList.tail;
            }
    
            this.length += 1;
        });
    }

    nextTrack(): SLNode<MediaMetadataFactory> {
        return this.currentTrack.next;
    }

    previousTrack(): SLNode<MediaMetadataFactory> {
        return this.mediaList.getPreviousOf(this.currentTrack);
    }

}

export {
    Playlist
}