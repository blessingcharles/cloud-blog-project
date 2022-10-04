import Image from "next/image";

const styles = {
    wrapper: `h-screen min-w-[15rem] flex-[1.2] max-w-[30rem] p-[1rem]`,

    searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full mb-5`,
    searchInput: `border-none outline-none bg-none`,

    authorProfileImage: `h-[5rem] w-[5rem] rounded-full`,
    authorContainer: `flex justify-center`,
    authorName: `font-semibold mb-[.2rem] mt-[0.2rem]`,

    recommendationTitle: `font-semibold text-[#787878] mb-4`,
    articlesContainer: `flex my-4 justify-between`,

    recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
    recommendationAuthorName: `text-small`,
    recommendationAuthorImageContainer: `h-[1.4rem] w-[1.4rem] rounded-full overflow-hidden`,
    recommendationArticleTitle: `font-semi`,
};

const RecArticle = ({
    authorImage ,
    authorName ,
    title ,
    articleImage
}) => {
    return (
        <div className={styles.articlesContainer}>
            <div>
                <div className={styles.recommendationAuthorContainer}>
                    <div className={styles.recommendationAuthorImageContainer}>
                        <Image src={authorImage} height={100} width={100} />
                    </div>
                    <div className={styles.recommendationAuthorName}>
                        {authorName}
                    </div>
                </div>
                <div className={styles.recommendationArticleTitle}>
                    {title}
                </div>
            </div>

            <Image src={articleImage} height={100} width={100} />
        </div>
    );
};

export default RecArticle;
