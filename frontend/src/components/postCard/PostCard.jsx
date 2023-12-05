import "./postcard.scss";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="postCard">
      <img src={post?.imagePath} alt="post-image" />
      <div className="top">
        <span className="badge badgeGreen">{post?.category}</span>
        <span>21 Jan 2023</span>
      </div>
      <Link className="heading" to="/posts/2">
        {post?.title}
      </Link>
    </div>
  );
};

export default PostCard;
