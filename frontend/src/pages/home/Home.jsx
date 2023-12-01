import { CardWithBg, PostCard } from "../../components";
import "./home.scss";
const posts = [
  {
    _id: 1,
    title:
      "Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks",
    imagePath: "./post.jpg",
    category: "Computer",
  },
  {
    _id: 2,
    title: "Chrome Extension Protects Against JavaScript-Based CPU",
    imagePath: "./post1.jpg",
    category: "Computer",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="heroContainer">
        <CardWithBg post={posts[0]} />
        <CardWithBg post={posts[1]} />
      </div>

      <div className="postsWrapper">
        <PostCard post={posts[0]} />
        <PostCard post={posts[1]} />
        <PostCard post={posts[1]} />
        <PostCard post={posts[0]} />
        <PostCard post={posts[1]} />
      </div>
    </div>
  );
};

export default Home;
