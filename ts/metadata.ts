import { apiFetch } from './util';
import { BASE_URL } from './config';

export interface MediaMetadata {
    streamUrl: string,
    title: string,
    likes: number,
    owner: string,
    thumbnails: Array<{url: string, width: number, height: number}>
}

class MediaMetadataFactory {

    constructor () {}

    static new(id: string): Promise<any> {
        return new Promise((res, rej) => {
            apiFetch('/info/' + id)
            .then(data => {
                res({
                    streamUrl: BASE_URL + '/stream/' + id,
                    title: data.title,
                    likes: data.likes,
                    owner: data.ownerChannelName,
                    thumbnails: data.thumbnail.thumbnails
                });
            });
        });
    }
}

export {
    MediaMetadataFactory
}