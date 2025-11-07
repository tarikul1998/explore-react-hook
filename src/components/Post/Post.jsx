import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
    const { id, title } = post;

    return (
        <div className="postStyle">
            <h4>Post pf Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
        </div>
    );
};

export default Post;
