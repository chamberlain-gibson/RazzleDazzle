import React, { useState } from "react";
import './styles.css'
import PageTitle from "./PageTitle";
import NewsImage1 from './Assets/NewsPic2.jpg'
import NewsImage2 from './Assets/NewsPic3.jpg'
import NewsImage3 from './Assets/NewsPic4.jpg'

const newsTitleCenter = {
    fontFamily: 'IBM Plex Sans Devanagari',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '37px',
    textAlign: 'center',
    color: '#0C1526',
}

const newsImage = {
    // backgroundImage: "url(./Assets/NewsPic1.jpg)",
    position: 'absolute',
    width: '600px',
    height: '400px',
    top: 'calc(50% - 200px)',
    left: 'calc(50% - 300px)',
    borderRadius: '20px',
    // zIndex: '3',
    
    
    // position: absolute;
    // display: block;
    // left: calc(75% - 200px);
    // top: 40%;
    // border-radius: 20px;
    // border-style: 20px solid #0C1526;
    // width: 400px;
    // z-index: 3;
}           

const newsItem = {
    width: '650px',
}

const NewsArticleText = {
    fontFamily: 'IBM Plex Sans Devanagari',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '23px',
    textAlign: 'center',
    color: '#000000',
    position: 'absolute',
}

const rightsideItem = {
    width: '200px',
    height: '200px',
    // backgroundColor: 'green',
    top: '50%',
    left: 'calc(85% - 100px)',
    position: 'absolute',
    borderRadius: '20px',
}

const leftsideItem = {
    width: '200px',
    height: '200px',
    // backgroundColor: 'green',
    top: '50%',
    left: 'calc(15% - 100px)',
    position: 'absolute',
    borderRadius: '20px',
}

// Pic urls
// https://www.pexels.com/photo/man-riding-horse-across-river-9899966/
// https://www.pexels.com/photo/cowboy-riding-a-horse-on-the-river-9899960/
// https://www.pexels.com/photo/cowboy-during-a-rodeo-event-12950414/
// https://www.pexels.com/photo/man-riding-a-horse-7359364/
// https://www.pexels.com/photo/silhouette-of-man-riding-horse-on-sunset-13745126/
// https://www.pexels.com/photo/action-animal-bronco-bucking-33251/
// https://www.pexels.com/photo/boy-riding-horse-during-sunset-3856371/


const News = ({ newsArticles }) => {
    const [articleID, setArticleID] = useState(0);
    const SelectedFeedItem = () => {
        return (
            <a href={newsArticles[articleID].url} style={{ newsItem }}> 
                {/* <div style={newsImage}>Center Feed Item{newsArticles[articleID].image}</div> */}
                <div><img src={NewsImage1} style={newsImage} alt="Female trainer1" /></div>
                <div style={newsTitleCenter}>{newsArticles[articleID].title}</div>
                <div style={NewsArticleText}>{newsArticles[articleID].description}</div>
            </a>
        );
    };

    const handleSetArticleLeft = () => {
        // We add newsArticles.length in order to prevent taking the mod of a negative number
        setArticleID( () => (articleID + newsArticles.length -1) % newsArticles.length)
    }
    const handleSetArticleRight = () => {
        setArticleID( () => (articleID + 1) % newsArticles.length);
    }

    const RightFeedItem = () => {
        const index = (articleID + 1) % newsArticles.length;
        return (
            <div>
                {/* <div style={rightsideItem}>Right Feed Item{newsArticles[index].image}</div> */}
                <div><img src={NewsImage2} style={rightsideItem} alt="Female trainer1" /></div>
                <div>{newsArticles[index].title}</div>
            </div>
        );
    }

    const LeftFeedItem = () => {
        const index = (articleID + newsArticles.length - 1) % newsArticles.length;
        return (
            <div>
                {/* <div style={leftsideItem}>Left Feed Item{newsArticles[index].image}</div> */}
                <div><img src={NewsImage3} style={leftsideItem} alt="Female trainer1" /></div>
                <div>{newsArticles[index].title}</div>
            </div>
        );
    }
    return (
        <div >
            <PageTitle name="News" />
            <div>
                <SelectedFeedItem />
                <RightFeedItem />
                <LeftFeedItem />
                <div onClick={handleSetArticleRight} style={{position: 'absolute', marginTop: '350px', paddingLeft: '95%'}}>Next</div>
                <div onClick={handleSetArticleLeft} style={{position: 'absolute', marginTop: '350px', paddingLeft: '2%'}}>Last</div>
            </div>
        </div>
    );
}

export default News;