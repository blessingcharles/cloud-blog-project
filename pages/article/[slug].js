import Image from 'next/image' ;
import Link from 'next/link' ;
import ArticleMainTab from '../../components/ArticleMainTab';
import Recommedation from '../../components/Recommendation';
import SideNavigation from '../../components/SideNavigation';
 
const styles = {
    wrapper: `flex` ,
};


const Article = () => {
    return (
        <div className={styles.wrapper}>
            <SideNavigation />
            <ArticleMainTab />
            <Recommedation />
        </div>
    );
};

export default Article;
