import React,{useState,useEffect} from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css"
import NewsSlider from "./NewsSlider";
import axios from "axios";
import SearchNews from "./SearchNews"


const News = () => {
    const [searchnews,setsearchnews]=useState([]);
    const onTermSubmit = async (term) => {
        const response = await axios.get("https://newsapi.org/v2/everything",{
            params:{
                q:term,
                apiKey:'593844fddaf24b28a25ac0026eb70125',

            }
        })
        setsearchnews(response.data.articles);

    }
    const [topheadlines, settopheadlines] = useState([]);
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=593844fddaf24b28a25ac0026eb70125").then((res) => {
          settopheadlines(res.data.articles);
          console.log(res.data.articles);
        });
      }, []);
    return (
        <div>
            <SearchNews onsubmit={onTermSubmit} searchnews={searchnews}/>
            <div className="container">
            {searchnews===null?null:<NewsSlider topheadlines={searchnews}/>}
                <NewsSlider topheadlines={topheadlines} />

            </div>
        </div>
    )
}

export default News