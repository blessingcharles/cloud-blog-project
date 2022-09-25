import Logo from '../public/logo.png' ;
import Image from 'next/image' ;
import Link from 'next/link';

const styles = {
    logoContainer: 'flex items-center flex-start' ,
    wrapper: 'flex justify-center gap-10 p-1' ,
    content: 'max-w-7xl flex-1 flex justify-between gap-10' ,
    logoContainer: 'flex items-center flex-start' ,
    logo: 'cursor-pointer object-contain' ,
    bannerNav: 'flex cursor-pointer items-center space-x-5' ,
    startButton: 'bg-black text-white py-2 px-5 rounded-full hover:bg-blue-400 hover:text-black'
} ;

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image 
                        className={styles.logo}
                        src={Logo}
                        width={80}
                        height={70}
                    />
                </div>

                <div className={styles.bannerNav}>
                    <Link href={`/`} >
                        <div className=''>Our Blog</div>
                    </Link>
                    <Link href={`/login`}>
                        <div>Log in</div>
                    </Link>
                    <Link href={`/signup`}>
                        <div className={styles.startButton}>Get Connected</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
