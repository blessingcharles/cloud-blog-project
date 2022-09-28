import { useState } from "react";
import Header from "../../components/Header";

const styles = {};

const CreateArticle = () => {

    const [articleDetails , setArticleDetails] = useState({
        title : "" ,
        time : "" ,
        content: ""
    }) ;


    const articleFormHandler = (e)=>{
        e.preventDefault() ;
        console.log(articleDetails)
    }

    return (
        <div>
            <Header />
            <div class="flex items-center justify-center min-h-screen bg-gray-100">
                <div class="px-8 py-6 text-left bg-white shadow-lg">
                    <h3 class="text-4xl font-bold text-center">Create Article</h3>
                    <form action="">
                        <div class="mt-4">
                            <div>
                                <label class="block" for="Username">
                                    Article Title
                                </label>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={articleDetails.title}
                                    onChange={(e) => setArticleDetails({ ...articleDetails , title : e.target.value })}
                                />
                                <span class="text-xs tracking-wide text-red-600">
                                    Title field is required{" "}
                                </span>
                            </div>
                            <div>
                                <label class="block" for="email">
                                    Time to Read
                                </label>
                                <input
                                    type="text"
                                    placeholder="Time"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={articleDetails.time}
                                    onChange={(e) => setArticleDetails({ ...articleDetails , time : e.target.value })}
                                />
                                <span class="text-xs tracking-wide text-red-600">
                                    Time to Read field is required{" "}
                                </span>
                            </div>
                            <div class="mt-4">
                                <label class="block">Content</label>
                                <textarea
                                    type="text"
                                    placeholder="context"
                                    class="w-full flex-1 h-72 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={articleDetails.content}
                                    onChange={(e) => setArticleDetails({ ...articleDetails , content : e.target.value })}
                                />
                            </div>
                            <div class="flex items-baseline justify-center">
                                <button 
                                    class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                                    onClick={(e) => articleFormHandler(e)}>
                                    Brew
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateArticle;
