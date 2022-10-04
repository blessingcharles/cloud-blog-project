import Image from 'next/image' ;
import Link from 'next/link' ;
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

import { BASE_URL } from "../../conf";
import ArticleMainTab from '../../components/ArticleMainTab';
import Recommedation from '../../components/Recommendation';
import SideNavigation from '../../components/SideNavigation';
 
const styles = {
    wrapper: `flex` ,
};


const Article = () => {
    const router = useRouter();
    const {id} = router.query ;
    return (
        <div className={styles.wrapper}>
            <SideNavigation />
            <ArticleMainTab aid={id} />
            <Recommedation />
        </div>
    );
}

export default Article ;