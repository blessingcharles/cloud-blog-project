import Image from 'next/image' ;
import Link from 'next/link' ;
 
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";

import CatPaw from '../public/cat-paw-prints-sharp.svg' ;

const styles = {
    wrapper: `w-[5rem] h-screen flex flex-col 
                justify-between items-center p-[1rem]` ,
    logoContainer: `cursor-pointer` ,
    iconsContainer: `flex-1 flex flex-col justify-center gap-[1.5rem] lg:text-3xl text-2xl text-[#78787878] cursor-pointer` ,

    profileImage: `object-cover` ,
    profileImageContainer: `w-[2.4rem] h-[2.4rem] rounded-full place-items-center overflow-hidden` ,

};


const SideNavigation = () => {
    return (
        <div className={styles.wrapper}>
            <Link href='/'>
                <div className={styles.logoContainer}>
                    <Image 
                        src={CatPaw}
                    />
                </div>
            </Link>

            <div className={styles.iconsContainer}>
                <Link href={`/`}>
                    <HiOutlineHome className='hover:text-blue-600'/>
                </Link>
                <FiBell className='hover:text-blue-600' />
                <BiBookmarks className='hover:text-blue-600' />
                
                <Link href={`/article/create`}>
                    <RiArticleLine/>
                </Link>
            </div>

            <div className={styles.profileImageContainer}>
                <Image 
                    src="https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg" 
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
};

export default SideNavigation ;
