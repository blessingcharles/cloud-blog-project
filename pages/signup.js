import Header from "../components/Header";

const styles = {
    mainWrapper: "mx-auto" ,
    mainContainer: `flex justify-center`,
    container: `max-w-7xl flex-1`,
    articleList:
        "flex flex-col gap-3 p-2 sm:graid-cols-2 md:gap-6 lg:grid-cols-3",
};

const SignUp = ()=>{
    return (
        <div className={styles.mainWrapper}>
            <Header />

            Signup
        </div>
    )
}

export default SignUp ;