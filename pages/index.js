import Banner from "../components/Banner";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import { useEffect, useState } from "react";
import { BASE_URL } from "../conf";

const styles = {
    mainWrapper: "mx-auto" ,
    mainContainer: `flex justify-center`,
    container: `max-w-7xl flex-1`,
    articleList:
        "flex flex-col gap-3 p-2 sm:graid-cols-2 md:gap-6 lg:grid-cols-3",
};

const Home = () => {
    const [articles , setArticles] = useState([]) ;

    useEffect(()=>{
        const fetcher = async ()=>{
            let response = await fetch(`${BASE_URL}/api/articles/hottest`);
            let data = await response.json() ;
            setArticles(data)    
        }
        fetcher()
    } , [])
    return (
        <div className={styles.mainWrapper}>
            <Header />
            <Banner />
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <div className={styles.articleList}>
                        {articles.map(article => {
                            return <ArticleCard 
                                articleImage={article.image}
                                uid={article._id}
                                title={article.title}
                                description={article.description}
                                authorImage={article.author.image}
                                authorName={article.author.username}
                                ttr={article.ttr}
                                key={article._id}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
