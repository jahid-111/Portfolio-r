import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Layout from "./Layout";
import NotFound from "./components/utilsComponents/Not-found";
import BlogCategory from "./routes/BlogCategory";
import BlogLayout from "./BlogLayout";
import DashboardLayout from "./page/admin/DashboardLayout";
import BlogAdmin from "./components/dashboard/BlogAdmin";
import SkillAdmin from "./components/dashboard/SkillAdmin";
import ProjectAdmin from "./components/dashboard/ProjectAdmin";
import ExpertiseAdmin from "./components/dashboard/ExpertiseAdmin";
import ProtectedRoute from "./routes/Dashboard/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route index path="home" element={<Home />} />
        <Route path="projects" element={<Project />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="blogs" element={<BlogCategory />} />

        <Route path="blogs" element={<BlogLayout />}>
          <Route path=":id" element={<BlogCategory />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* PROTECTED ADMIN ROUTE*/}
      <Route
        path="admin/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="blog" index element={<BlogAdmin />} />
        <Route path="expertise" element={<ExpertiseAdmin />} />
        <Route path="skill" element={<SkillAdmin />} />
        <Route path="project" element={<ProjectAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
