import Banner from "../components/Banner";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";

const styles = {
    mainWrapper: "mx-auto" ,
    mainContainer: `flex justify-center`,
    container: `max-w-7xl flex-1`,
    articleList:
        "flex flex-col gap-3 p-2 sm:graid-cols-2 md:gap-6 lg:grid-cols-3",
};

const Home = () => {
    return (
        <div className={styles.mainWrapper}>
            <Header />
            <Banner />
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <div className={styles.articleList}>
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
