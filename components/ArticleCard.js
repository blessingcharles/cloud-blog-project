import Image from "next/image";
import Link from "next/link";

const styles = {
    authorContainer: "flex flex-gap-10",
    authorImageContainer:
        "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
    authorImage: "object-cover",
    authorName: "font-semibold",

    articleWrapper:
        "flex max-w-[46rem] h-[10rem] items-center cursor-pointer gap-[1rem]",
    articleDetails: "flex-[2.5] flex-col",

    title: "font-bold text-2xl",
    oneliner: "text-[#787878]",

    detailsContainer: "flex items-center justify-between text-[#787878]",
    metaDeta: "my-2 text-[.8rem]",
    bookmarkContainer: "cursor-pointer",
};

const ArticleCard = ({uid , title , description , ttr , authorName , authorImage , articleImage}) => {
    return (
        <Link href={`/article/${uid}`}>
            <div className={styles.articleWrapper}>
                <div className={styles.articleDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image
                                src={authorImage}
                                className={styles.authorImage}
                                width={40}
                                height={40}
                            />
                        </div>

                        <div className={styles.authorName}>{authorName}</div>
                    </div>

                    <h1 className={styles.title}>
                        {title}
                    </h1>
                    <div className={styles.oneliner}>
                        {description}
                    </div>

                    <div className={styles.detailsContainer}>
                        <span className="">{ttr}</span>
                    </div>
                </div>
                <div className={styles.thumbnailContainer}>
                    <Image
                        src={articleImage}
                        className={styles.authorImage}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
