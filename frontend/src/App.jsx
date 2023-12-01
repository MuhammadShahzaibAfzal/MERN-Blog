import { Route, Routes } from "react-router-dom";

import "./scss/global.scss";

import { WebsiteLayout } from "./layouts";
import { About, CategoryPosts, Contact, Home, PostDetail } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="posts/:title" element={<PostDetail />} />
          <Route path="posts/category/:name" element={<CategoryPosts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
