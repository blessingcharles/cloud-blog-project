import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

import AuthorImage from "../public/author-profile.jpg";
import AWSCloud from "../public/aws-cloud.png";
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
                    <Image src={AuthorImage} height={40} width={40} />
                </div>

                <div>
                    {/* TODO : add followers */}
                    <div className={styles.authorName}>thomasthecat</div>
                </div>
            </div>

            <div className={styles.recommendationContainer}>
                <div className={styles.recommendationTitle}>
                    From Your Recent Neurons Firings ...
                </div>

                {/* Each Recommended Article */}
                <div className={styles.articlesContainer}>
                    <div>
                        <div className={styles.recommendationAuthorContainer}>
                            <div
                                className={
                                    styles.recommendationAuthorImageContainer
                                }
                            >
                                <Image
                                    src={AuthorImage}
                                    height={100}
                                    width={100}
                                />
                            </div>
                            <div className={styles.recommendationAuthorName}>
                                th3h04x
                            </div>
                        </div>
                        <div className={styles.recommendationArticleTitle}>
                            Which Cloud Providers to choose for your next
                            project ?
                        </div>
                    </div>

                    <Image src={AWSCloud} height={100} width={100} />
                </div>

                <div className={styles.articlesContainer}>
                    <div>
                        <div className={styles.recommendationAuthorContainer}>
                            <div
                                className={
                                    styles.recommendationAuthorImageContainer
                                }
                            >
                                <Image
                                    src={AuthorImage}
                                    height={100}
                                    width={100}
                                />
                            </div>
                            <div className={styles.recommendationAuthorName}>
                                th3h04x
                            </div>
                        </div>
                        <div className={styles.recommendationArticleTitle}>
                            Which Cloud Providers to choose for your next
                            project ?
                        </div>
                    </div>

                    <Image src={AWSCloud} height={100} width={100} />
                </div>

            </div>
        </div>
    );
};

export default Recommedation;
