import styles from "./index.css";
import { Header } from "./components/Header.jsx";
import { Blogs } from "./components/Blogs";
import { Pagination } from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext.js";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
