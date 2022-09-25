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

const ArticleCard = () => {
    return (
        <Link href={`/article/123`}>
            <div className={styles.articleWrapper}>
                <div className={styles.articleDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image
                                src="https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg"
                                className={styles.authorImage}
                                width={40}
                                height={40}
                            />
                        </div>

                        <div className={styles.authorName}>thomasthecat</div>
                    </div>

                    <h1 className={styles.title}>
                        Are you serious about the cloud security for you public
                        servers ?
                    </h1>
                    <div className={styles.oneliner}>
                        How to secure your cloud infrastructures .
                    </div>

                    <div className={styles.detailsContainer}>
                        <span className="">Sept 22 2022 . 15 min read</span>
                    </div>
                </div>
                <div className={styles.thumbnailContainer}>
                    <Image
                        src="https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg"
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
