import { BASE_URL } from './config';
let httpFetch = (url) => {
    return new Promise((res, rej) => {
        fetch(url)
            .then(r => r.json())
            .then(data => {
            res(data);
        })
            .catch(err => {
            rej(err);
        });
    });
};
let apiFetch = (url) => {
    return httpFetch(BASE_URL + url);
};
class SLList {
    constructor(data) {
        this.length = 0;
        if (data) {
            this.insert(data);
        }
    }
    insert(data) {
        let node = { data: data, next: null };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
    }
    getPreviousOf(node) {
        let cursor = this.head;
        while (cursor.next !== node) {
            if (cursor.next === null) {
                throw Error("Node not found");
            }
            cursor = cursor.next;
        }
        return cursor;
    }
    delete(node) {
        let cursor = this.head;
        while (cursor !== node) {
            if (cursor.next === null) {
                throw Error("Node not found");
            }
            cursor = cursor.next;
        }
        let previousNode = this.getPreviousOf(cursor);
        previousNode.next = cursor.next;
        cursor.next = null;
        return cursor;
    }
}
export { httpFetch, apiFetch, SLList };
