import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostListData } from "../store/post-list-store";

function Post({ post }) {
    const {deletePost}=useContext(PostListData);

    return <>
        <div className="card post-card">
            <div className="card-body">
                <h5 className="card-title">{post.title}
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
                        <MdDelete />
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                <p>{post.tags.map(item => <span key={item} className="badge text-bg-primary hash">#{item}</span>)}</p>
                <div className="alert alert-success reactions" role="alert">
                    This post has been raected by {post.reactions} people.
                </div>
            </div>
        </div>
    </>
}

export default Post;