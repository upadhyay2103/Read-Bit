import { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";

function PostList() {
    const { postList, addInitialPost } = useContext(PostListData);
    let[fetching,setFetching]=useState(false);
  
    useEffect(()=>{
        setFetching(true);
        const controller = new AbortController();
        const signal=controller.signal;

        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(data => {
            addInitialPost(data.posts);
            setFetching(false);
        });

        
        return ()=>{
            controller.abort();
        }
    },[]);  

    return <>
        {fetching && <Loading/>}
        {!fetching && postList.length === 0 && <Welcome />}
        {!fetching && postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>

}

export default PostList;