"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ogp {
    constructor(mode) {
        this.url = 'https://u-streaming.herokuapp.com/';
        this.type = 'website';
        this.title = '';
        this.description = '';
        this.site_name = 'Streaming!!';
        this.image = 'https://i.imgur.com/0dEobiF.png';
        this.twcard = 'app';
        this.twsite = '@_amanojs';
        if (mode && mode === 'default') {
            this.setDefaultMode();
        }
        else {
            this.setInviteMode();
        }
    }
    setDefaultMode() {
        this.setTitle('Streaming!!');
        this.setDescription('YouTubeの動画をみんなで同期視聴して楽しもう！');
    }
    setInviteMode() {
        this.setTitle('ルームに招待されています ~Streaming!!~');
        this.setDescription('YouTubeの動画をみんなで同期視聴して楽しもう！');
    }
    setUrl(url) {
        this.url = url;
    }
    setType(type) {
        this.type = type;
    }
    setTitle(title) {
        this.title = title;
    }
    setDescription(description) {
        this.description = description;
    }
    setSiteName(site_name) {
        this.site_name = site_name;
    }
    setImage(image) {
        this.image = image;
    }
    setTwCard(twcard) {
        this.twcard = twcard;
    }
    setTwSite(twsite) {
        this.twsite = twsite;
    }
}
exports.default = Ogp;
