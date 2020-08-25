import React,{useState} from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css"
import NewsSlider from "./NewsSlider";
import axios from "axios";
import SearchNews from "./SearchNews"


const News = () => {
    const [searchnews,setsearchnews]=useState([]);
    const onTermSubmit = async (term) => {
        const response = await axios.get("https://gnews.io/api/v3/search",{
            params:{
                q:term,
                token:'843d4da0bd6d83c96f6592cf10da18f5',

            }
        })
        setsearchnews(response.data.articles);
        console.log(response);

    }
  
    return (
        <div>
            <SearchNews onsubmit={onTermSubmit} searchnews={searchnews}/>
            <div className="container">
            {searchnews===null?null:<NewsSlider topheadlines={searchnews}/>}
               

            </div>
        </div>
    )
}

export default News