import Image from "next/image";
import CuteCat from "../public/black_cat_black_and_white.svg";
const styles = {
    chasingButton: "bg-black text-white my-5 py-3 px-6 rounded-full hover:text-black hover:bg-blue-400",
    content: "max-w-8xl flex-1 flex items-center justify-between",
    wrapper: "lg:p-10 bg-[#A0A0A0] h-max-[10rem] flex items-center justify-center",
};
const Banner = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div>
                    <h1 className="max-w-xl text-[4rem] font-mediumSerif">
                        Never Get Staisfied.
                    </h1>
                    <h3 className="text-2xl">
                        Experience is the best teacher in all situation
                    </h3>
                    <button className={styles.chasingButton}>
                        Start Chasing
                    </button>
                </div>
            </div>
            <Image
                className="object-contain h-32 md:inline-flex"
                src={CuteCat}
                height={300}
                width={400}
            />
        </div>
    );
};

export default Banner;
