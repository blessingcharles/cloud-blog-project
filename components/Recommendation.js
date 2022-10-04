import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { BASE_URL } from "../conf";
import { MdMarkEmailRead } from "react-icons/md";

import AuthorImage from "../public/author-profile.jpg";
import AWSCloud from "../public/aws-cloud.png";
import RecArticle from "./RecArticle";
const styles = {
    wrapper: `h-screen min-w-[15rem] flex-[1.2] max-w-[30rem] p-[1rem]`,

    searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full mb-5`,
    searchInput: `border-none outline-none bg-none`,

    authorProfileImage: `h-[5rem] w-[5rem] rounded-full`,
    authorContainer: `flex justify-center`,
    authorName: `font-semibold mb-[.2rem] mt-[0.2rem]`,

    recommendationTitle: `font-semibold text-[#787878] mb-4`,
    articlesContainer: `flex my-4`,

    recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
    recommendationAuthorName: `text-small`,
    recommendationAuthorImageContainer: `h-[1.4rem] w-[1.4rem] rounded-full overflow-hidden`,
    recommendationArticleTitle: `font-semi`,
};

const Recommedation = () => {
    const [articles, setArticles] = useState([]);
    const [username , setUsername] = useState("");
    const [userImage , setUserImage] = useState("")
    useEffect(() => {
        const fetcher = async () => {
            let response = await fetch(`${BASE_URL}/api/articles/hottest`);
            let data = await response.json();
            setArticles(data);
        };
        fetcher();
        setUsername(localStorage.getItem("username"))
        setUserImage(localStorage.getItem("image"));
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input
                    className={styles.searchInput}
                    placeholder="Search"
                    type="text"
                />
            </div>

            <div className={styles.authorContainer}>
                <div className={styles.authorProfileImage}>
                    <Image src={userImage} height={40} width={40} />
                </div>

                <div>
                    {/* TODO : add followers */}
                    <div className={styles.authorName}>{username}</div>
                </div>
            </div>

            <div className={styles.recommendationContainer}>
                <div className={styles.recommendationTitle}>
                    From Your Recent Neurons Firings ...
                </div>

                {/* Each Recommended Article */}

                {
                    articles.map((article)=>{
                        return <RecArticle 
                            key={article.id}
                            title={article.title}
                            authorName={article.author.username}
                            articleImage={article.image}
                            authorImage={article.author.image}

                        />
                    })
                }
            </div>
        </div>
    );
};

export default Recommedation;
