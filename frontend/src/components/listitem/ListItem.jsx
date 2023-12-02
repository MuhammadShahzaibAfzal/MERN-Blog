import { Link } from "react-router-dom";
import "./listitem.scss";
const ListItem = ({ post }) => {
  return (
    <div className="listItemWrapper">
      <img src={post?.imagePath} alt="" />
      <Link className="title">{post?.title}</Link>
    </div>
  );
};

export default ListItem;
