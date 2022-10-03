import { useState } from "react";


import { BASE_URL } from "../conf";
import Header from "../../components/Header";

const styles = {};

const CreateArticle = () => {

    const [articleDetails , setArticleDetails] = useState({
        title : "" ,
        time : "" ,
        description: "" ,
        content: "" ,
        coverPic: null
    }) ;


    const articleFormHandler = async (e)=>{
        e.preventDefault();
        let formData = new FormData();

        formData.append("title", articleDetails.title);
        formData.append("ttr", articleDetails.time);
        formData.append("description", articleDetails.description);
        formData.append("content", articleDetails.content);
        formData.append("coverPic", articleDetails.coverPic);

        try {
            const response = await fetch(`${BASE_URL}/articles/create`, {
                method: "POST",
                body: formData,
            });

            if(!response.ok){
                console.log("Failed")
            }
            else{
                alert("Successfully registered")
            }
        } catch (err) {
            console.log(err);
        }
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
                                <label class="block" for="title">
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
                                <label class="block" for="description">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    placeholder="Description"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    value={articleDetails.description}
                                    onChange={(e) => setArticleDetails({ ...articleDetails , description : e.target.value })}
                                />
                                <span class="text-xs tracking-wide text-red-600">
                                    Description field is required{" "}
                                </span>
                            </div>

                            <div>
                                <label class="block" for="Time to Read">
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
                            <div class="mt-4">
                                <label class="block">Cover Picture</label>
                                <input
                                    type="file"
                                    placeholder="profile"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    onChange={(e) =>
                                        setArticleDetails({
                                            ...ArticleDetails,
                                            coverPic: e.target.files[0],
                                        })
                                    }
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
