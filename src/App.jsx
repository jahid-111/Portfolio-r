import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Layout from "./Layout";
import Blog from "./routes/Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home></Home>} />
        <Route index path="home" element={<Home></Home>} />
        <Route path="project" element={<Project />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="blogs" element={<Blog />} />
      </Route>
    </Routes>
  );
}
