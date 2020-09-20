const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path');

const app = express();
app.listen(8081, () => {
    console.log('Server Works !!! At port 8081');
});

app.get('/stream/:id', (req, res) => {
    var url = req.params.id;
    var quality = req.query.quality || "highestaudio";
    res.header('Content-Disposition', 'inline');
    ytdl(url, {
        quality: quality
    }).pipe(res);
});

app.get('/info/:id', (req, res) => {
    var url = req.params.id;
    ytdl.getBasicInfo(url).then(data => {
        res.send({
            title:      data.videoDetails.title,
            likes:      data.videoDetails.likes,
            thumbnails: data.videoDetails.thumbnail.thumbnails,
            ownerChannelName: data.videoDetails.ownerChannelName
        });
    });
});

app.get('/thumb/:id', (req, res) => {
    var url = req.params.id;
    ytdl.getBasicInfo(url).then(data => {
        res.send(data.videoDetails.thumbnail.thumbnails.pop());
    });
});

app.get('/valid/:id', (req, res) => {
    var id = ytdl.getVideoID(req.params.id);
    res.send({
        valid: ytdl.validateID(id)
    });
});