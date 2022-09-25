import Image from "next/image";
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

const ArticleMainTab = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image
                                className={styles.authorImage}
                                src={AuthorImage}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={styles.articleDetail}>
                            <div className={styles.authorName}>
                                thomasthecat
                            </div>
                            <div className={styles.articleMetaInfo}>
                                Oct 21 2022 , 15 min read
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.articleImageContainer}>
                    <Image
                        // src={AuthorImage}
                        src={`https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg`}
                        width={300}
                        height={300}
                    />
                </div>

                <div className={styles.articleTitle}>
                    <h1>
                        Are you serious about the cloud security for you public
                        servers ?
                    </h1>
                </div>

                <div className={styles.articleText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis semper metus, quis porta tortor. Aenean eu mi
                    urna. Duis in est dui. Morbi dictum odio urna, id laoreet
                    felis dignissim et. In et commodo nisl. Vestibulum euismod
                    nisl et quam convallis, et ultricies quam dignissim. Ut
                    efficitur scelerisque ultricies. Morbi faucibus sed felis
                    non feugiat. Sed a elit erat. Suspendisse fringilla blandit
                    quam. Pellentesque dapibus dolor eget ligula ultrices
                    feugiat. Duis eleifend ex sit amet mi rutrum semper. Sed
                    ultricies nunc non finibus venenatis. Morbi nec nisi eros.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Cras id sollicitudin purus.
                    Vivamus accumsan iaculis nisl, vitae eleifend dolor lacinia
                    at. Nam ut tellus sapien. Donec velit neque, fermentum vel
                    tristique non, condimentum vitae ante. Nullam ultricies
                    libero mauris, et condimentum nisi sodales nec. Suspendisse
                    sed dignissim erat. Nunc fringilla ex at nulla eleifend, at
                    pharetra mi tincidunt. Praesent consectetur vel nunc aliquam
                    dapibus. Quisque eget commodo urna, venenatis convallis leo.
                    Morbi urna diam, varius id leo ut, efficitur hendrerit
                    tellus. Donec condimentum dui tellus. Phasellus maximus
                    pretium cursus. Proin id nibh quis ipsum consectetur rutrum.
                    Praesent condimentum aliquam urna quis ultricies. Cras
                    porttitor vestibulum sapien eu varius. Praesent sed
                    condimentum dui, tempor dignissim urna. Proin id orci felis.
                    Donec faucibus tincidunt massa, at bibendum ex maximus et.
                    Nam metus elit, dictum quis ex finibus, auctor dignissim
                    ante. Cras in leo ut nunc ullamcorper pharetra sit amet et
                    velit. In hendrerit luctus dui non tristique. Curabitur
                    risus lacus, tincidunt in tortor eget, tristique eleifend
                    tellus. Etiam nec gravida tellus. Aliquam pulvinar in ante
                    ut scelerisque. Sed scelerisque, lorem id eleifend accumsan,
                    est velit suscipit magna, vel luctus lorem massa ut enim.
                    Nam sed efficitur justo. Suspendisse lacinia elit ac purus
                    ullamcorper, sit amet dictum est pretium. Maecenas dictum
                    ligula ullamcorper, tincidunt ipsum vel, faucibus tellus.
                    Vestibulum efficitur odio orci, sit amet dapibus neque
                    pharetra non. Curabitur accumsan, augue non tincidunt
                    viverra, sapien enim accumsan magna, sed convallis neque
                    lorem nec erat. Fusce semper augue et nisl fermentum
                    scelerisque. Proin nec risus efficitur, posuere est in,
                    ultricies dui. Nullam ut mi id nunc pretium placerat et at
                    neque. Etiam lacus turpis, viverra ac imperdiet vel, gravida
                    quis purus. Fusce suscipit nulla vel dolor pretium, non
                    consectetur velit aliquam. Maecenas tellus purus, interdum
                    eu libero eget, egestas feugiat lectus. Donec non imperdiet
                    neque. Vivamus interdum pharetra justo, sit amet lacinia
                    lectus porta sed. Quisque id lectus luctus purus aliquam
                    fringilla. Aliquam pretium lorem quis quam laoreet finibus.
                    Curabitur interdum mi id porttitor iaculis. Ut vitae
                    efficitur ante. Quisque at libero at lacus sollicitudin
                    laoreet. Nunc sodales tortor in nulla tempor porttitor. Sed
                    tincidunt ex ac massa condimentum, at auctor purus porta.
                    Maecenas mattis est eget odio lobortis, at auctor erat
                    fermentum. Integer nulla velit, consequat ut est eu, luctus
                    sodales enim. Aliquam rutrum, quam fermentum semper feugiat,
                    quam orci egestas dui, ac consectetur nisl lorem eget elit.
                    In ut turpis eu urna condimentum commodo. Maecenas id diam
                    diam. Fusce et pellentesque sapien. Nulla a malesuada justo.
                    Morbi sit amet condimentum eros, non tincidunt libero. Cras
                    lacinia tincidunt sem, non bibendum elit pharetra vitae.
                    Pellentesque tincidunt velit dolor. Nulla ac augue
                    porttitor, interdum nisl quis, convallis augue. Ut eget
                    pellentesque eros. Phasellus neque magna, vehicula in
                    posuere nec, volutpat id quam. Pellentesque sit amet varius
                    enim. Nullam in viverra sapien, gravida ultricies dui. Donec
                    interdum varius ligula. Nullam sit amet ipsum id dolor
                    finibus placerat sed eu arcu. Etiam id consequat metus.
                    Vivamus ut felis a urna sagittis elementum. Phasellus at
                    nibh luctus, porttitor erat et, aliquam nisl. Maecenas
                    mattis velit vitae libero semper dignissim. Fusce at dui ac
                    sem consequat sollicitudin at vitae sem. Cras sed
                    condimentum enim. Ut sollicitudin, erat a cursus fringilla,
                    odio elit ultricies diam, a vestibulum tortor enim id augue.
                    Suspendisse potenti. In hac habitasse platea dictumst. In
                    hac habitasse platea dictumst. Suspendisse luctus, risus eu
                    malesuada iaculis, nulla risus tincidunt lectus, a dictum
                    leo leo in massa. Vivamus dictum mauris sed consequat
                    fringilla. Integer posuere gravida pellentesque. Cras
                    dapibus, lacus ac pharetra semper, purus mi sollicitudin
                    est, ut tincidunt purus mauris mattis lacus. Ut aliquet
                    ligula quis efficitur vulputate. Nulla ultrices porttitor
                    risus, laoreet convallis justo facilisis sit amet. Nam
                    viverra luctus tellus suscipit suscipit. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Donec dignissim pellentesque nunc, eget interdum
                    tortor. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Fusce id sem dictum, tincidunt ante in, varius turpis.
                    Duis ut semper nunc, sed laoreet libero. Duis nec dignissim
                    augue. Nulla tempor ex vel libero aliquam, et volutpat
                    lectus sollicitudin. Vestibulum ac urna congue, rutrum dui
                    condimentum, pulvinar massa. Morbi quis suscipit metus.
                    Donec sed ultrices purus, eu elementum tortor. Mauris
                    condimentum velit vel orci consectetur consectetur. Integer
                    volutpat feugiat congue. Nullam massa quam, aliquam ac
                    mauris nec, pretium pellentesque augue. Praesent rutrum
                    dignissim libero, vitae congue ante consectetur sed. Donec
                    quis tortor arcu. Aenean non urna tellus. Donec iaculis
                    massa blandit nisi elementum iaculis. Proin in ipsum vel
                    sapien finibus laoreet. Suspendisse lacinia ipsum ex, eget
                    egestas est consequat ac. Aliquam erat volutpat. Nam id nunc
                    urna. Nullam ex leo, vehicula vitae imperdiet at,
                    scelerisque a arcu. Suspendisse scelerisque nec eros nec
                    egestas. Morbi id sapien placerat, pellentesque odio nec,
                    tempor erat. Nam et venenatis augue. Maecenas at varius
                    tortor. Donec feugiat lacus vel nibh cursus posuere.
                    Praesent eget maximus massa. Mauris nunc ipsum, hendrerit et
                    lobortis nec, suscipit eget magna. Vivamus ut diam vitae
                    lectus vulputate facilisis ac a dolor. Vestibulum bibendum
                    sit amet velit eget dignissim. Quisque sit amet vehicula
                    enim. Suspendisse bibendum quam vel velit suscipit, et
                    venenatis turpis finibus. Phasellus augue ante, pellentesque
                    eu augue eget, egestas vulputate velit. Duis hendrerit nulla
                    dolor, ut malesuada tortor feugiat at. Proin a nibh
                    sagittis, consequat nunc eu, facilisis augue. Mauris
                    tincidunt dignissim tellus, in luctus erat hendrerit et.
                    Phasellus convallis tempor nisi vel tincidunt. Mauris et
                    mollis magna. Sed ut volutpat sapien. Quisque pretium non
                    libero in sagittis. Nulla sodales nisl aliquet aliquam
                    dignissim.
                </div>
            </div>
        </div>
    );
};

export default ArticleMainTab;
