import { CardWithBg, ListItem, PostCard } from "../../components";
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

      <h1 className="sectionHeading">Recents Posts</h1>
      <div className="postsWrapper">
        <PostCard post={posts[0]} />
        <PostCard post={posts[1]} />
        <PostCard post={posts[1]} />
        <PostCard post={posts[0]} />
        <PostCard post={posts[1]} />
        <PostCard post={posts[1]} />
        <PostCard post={posts[0]} />
        <PostCard post={posts[1]} />
      </div>

      <div className="mostReadWrapper">
        <CardWithBg post={posts[0]} />
        <div className="sidebar">
          <h1>Most Read</h1>
          <ListItem post={posts[0]} />
          <ListItem post={posts[1]} />
          <ListItem post={posts[0]} />
          <ListItem post={posts[1]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
