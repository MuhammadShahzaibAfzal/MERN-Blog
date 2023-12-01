import { Link } from "react-router-dom";
import "./cardwithbg.scss";

const CardWithBg = ({ post }) => {
  const cardStyle = {
    backgroundImage: `url(${post?.imagePath})`,
  };

  return (
    <div style={cardStyle} className="cardWithBgContainer">
      <div className="overlay"></div>
      <div className="top">
        <span className="badge badgeGreen">{post?.category}</span>
        <span>21 Jan 2023</span>
      </div>
      <Link className="heading">{post?.title}</Link>
    </div>
  );
};

export default CardWithBg;
