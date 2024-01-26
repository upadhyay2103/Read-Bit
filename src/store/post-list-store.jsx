import { createContext, useReducer } from "react";

export const PostListData = createContext({
    postList: [],
    addPost: () => { },
    addInitialPost:()=>{ },
    deletePost: () => { }
});

const postListReducer = (currPost, action) => {
    let newPost = currPost;
    if (action.type === "DELETE_POST") {
        newPost = currPost.filter(post => post.id !== action.payload.postId)
    }
    else if(action.type==="ADD_INITIAL_POST")
    {
        newPost=action.payload.posts;
    }
    else if (action.type === "ADD_POST") {
        newPost=[
            action.payload,
            ...currPost
        ]
    }
    return newPost;
}

const PostListProvider = ({ children }) => {
    let [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (userId, postTitle, postBody, postTags, postReactions) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: postReactions,
                userId: userId,
                tags: postTags,
            }
        })
    }

    const addInitialPost = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POST",
            payload: {
                posts,
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            }
        });
    }

    return <PostListData.Provider value={{
        postList,
        addPost,
        addInitialPost,
        deletePost,
    }} >
        {children}
    </PostListData.Provider>
}

export default PostListProvider;