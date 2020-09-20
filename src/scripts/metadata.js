import { apiFetch } from './util';
import { BASE_URL } from './config';
class MediaMetadataFactory {
    constructor() { }
    static new(id) {
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
export { MediaMetadataFactory };
