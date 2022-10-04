import Image from "next/image";
import { useEffect, useState } from "react";
import { BASE_URL } from "../conf";
import AuthorImage from "../public/author-profile.jpg";

const styles = {
    wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
    content: `h-screen overflow-scroll p-[2rem]`,
    postHeaderContainer: ``,
    authorContainer: `flex text-center items-center         `,
    authorImage: `object-contain overflow-hidden rounded-full`,
    articleDetail: `flex-col mt-5 ml-5 lg:ml-10`,
    authorName: `font-semibold lg:text-[1.4rem]`,
    articleMetaInfo: `text-[#787878]`,

    articleTitle: `flex text-center font-bold lg:text-[2rem] md:text-[1.5rem]`,

    articleImageContainer: `object-contain h-[28rem] w-full grid center overflow-hidden mb-[2rem]`,
};

const ArticleMainTab = ({ aid }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ttr, setTtr] = useState("");
    const [articleImage, setArticleImage] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [authorImage, setAuthorImage] = useState("");

    useEffect(() => {
        const fetcher = async () => {
            const response = await fetch(
                `${BASE_URL}/api/articles/search?id=${aid}`
            );
            const article = await response.json();

            setTitle(article.title);
            setContent(article.content);
            setTtr(article.ttr);
            setArticleImage(article.image);
            setAuthorName(article.author.username);
            setAuthorImage(article.author.image);
        };
        if (aid) {
            fetcher();
        }
    }, [aid]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image
                                className={styles.authorImage}
                                src={authorImage}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.articleDetail}>
                            <div className={styles.authorName}>
                                {authorName}
                            </div>
                            <div className={styles.articleMetaInfo}>{ttr}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.articleImageContainer}>
                    <Image
                        // src={AuthorImage}
                        src={articleImage}
                        width={300}
                        height={300}
                    />
                </div>

                <div className={styles.articleTitle}>
                    <h1>{title}</h1>
                </div>

                <div className={styles.articleText}>{content}</div>
            </div>
        </div>
    );
};

export default ArticleMainTab;
