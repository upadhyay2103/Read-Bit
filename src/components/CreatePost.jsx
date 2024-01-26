import { useRef } from "react";
import { useContext } from "react";
import { PostListData } from "../store/post-list-store";

function CreatePost() {
    const uidelement=useRef();
    const postTitleelement=useRef();
    const postBodyelement=useRef();
    const postTagselement=useRef();
    const PostReactionselement=useRef();

    const {addPost}=useContext(PostListData);

    const handleSubmit =(e)=>{
       e.preventDefault();
       const userId=uidelement.current.value;
       const postTitle=postTitleelement.current.value;
       const postBody=postBodyelement.current.value;
       const postTags=postTagselement.current.value.split(" ");
       const postReactions=PostReactionselement.current.value;

       uidelement.current.value="";
       postTitleelement.current.value="";
       postBodyelement.current.value="";
       postTagselement.current.value="";
       PostReactionselement.current.value="";

       addPost(userId,postTitle,postBody,postTags,postReactions);
    }

    return <>
        <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User Id</label>
                <input ref={uidelement} type="text" placeholder="Enter your userId" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={postTitleelement} placeholder="How are you feeling today" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Post Content</label>
                <textarea rows={3} ref={postBodyelement} type="text" placeholder="Tell us more about it!" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">hashTags</label>
                <input type="text" ref={postTagselement} placeholder="enter your hashtags with spaces" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Reactions</label>
                <input type="text" ref={PostReactionselement} placeholder="How many people reacted on this post" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    </>
}

export default CreatePost;