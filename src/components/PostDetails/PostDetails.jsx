import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    
    const posts = useLoaderData();
    const { id, title, body } = posts;

    const params = useParams();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    console.log(params.postId);

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>{title}</p>
            <p>
                <small>{body}</small>
            </p>

            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;

