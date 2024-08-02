import React from "react";
import { useTranslation } from "react-i18next";
import BlogCard from "../../components/cards/blogcard";
import { blogs } from "../../global";

const BlogsSection = () => {
  const { t } = useTranslation();
  return (
    <div
      id="blogssection"
      className="w-full py-16 px-16 flex flex-col  min-h-52   bg-white text-black text-lg leading-relaxed"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">{t("Blogs")}</h1>
        <p className="text-base">{t("Explore the latest blogs")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 mt-10">
        {blogs &&
          blogs.map((blog) => (
            <BlogCard
              icon={blog.icon}
              title={blog.title}
              description={blog.description}
              link={blog.link}
              date={blog.date}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogsSection;
