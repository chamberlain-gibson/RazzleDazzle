class admin_news {
    constructor(news_key, img_name, title, link, news_description) {
        this.news_key = news_key;
        this.img_name = img_name;
        this.title = title;
        this.link = link;
        this.news_description = news_description;
    }

    getImageURL() {
        return this.img_name;
    }

    setImageURL(imgName) {
        this.img_name = imgName;
    }

    getTitle() {
        return this.title;
    }

    setTitle(news_title) {
        this.title = news_title;
    }

    getLink() {
        return this.link;
    }

    setLink(news_link) {
        this.link = news_link;
    }

    getNewsDescription() {
        return this.news_description;
    }

    setNewsDescription(description) {
        this.news_description = description;
    }
}

module.exports = {
    admin_news: admin_news
}