class Ogp {
    constructor(){
        this.url = "";
        this.type = 'website';
        this.title = '';
        this.description = '';
        this.site_name = 'Streaming!!';
        this.image = 'https://i.imgur.com/0dEobiF.png';
        this.twcard = 'app';
        this.twsite = '@_amanojs';
    }

    private url: string;
    private type: 'website' | 'article';
    private title: string;
    private description: string;
    private site_name: string;
    private image: string;
    private twcard: 'summary' | 'summary_large_image' | 'app' | 'player';
    private twsite: string;

    public setUrl(url: string): void {
        this.url = url;
    }

    public setType(type: 'website' | 'article'): void {
        this.type = type;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public setSiteName(site_name: string): void {
        this.site_name = site_name;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public setTwCard(twcard: 'summary' | 'summary_large_image' | 'app' | 'player'): void {
        this.twcard = twcard;
    }

    public setTwSite(twsite: string): void {
        this.twsite = twsite;
    }
}

export default Ogp;