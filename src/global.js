import i18n from "i18next";

import image1 from "./assets/images/portfolio_images/doclinkcover.jpg";
import image2 from "./assets/images/portfolio_images/floweriecover.png";

import webdevicon from "./assets/icons/services_icons/webdev.png";
import mobiledevicon from "./assets/icons/services_icons/appdev.png";
import seoicon from "./assets/icons/services_icons/seo.png";
import dataanalysisicon from "./assets/icons/services_icons/dataanalysis.png";



// "UI/UX Design": "تصميم واجهة المستخدم/تجربة المستخدم",
//   "Creating intuitive and visually appealing designs that enhance user experience and engagement.": "إنشاء تصميمات بديهية وجذابة بصريًا تعزز تجربة المستخدم والمشاركة.",
//   "API Development": "تطوير واجهة برمجة التطبيقات",
//   "Designing and developing robust, secure, and scalable APIs to power your web and mobile applications.": "تصميم وتطوير واجهات برمجة التطبيقات قوية وآمنة وقابلة للتوسيع لتشغيل تطبيقات الويب والهاتف المحمول الخاصة بك.",
  
export const services = [
  {
    icon: webdevicon,
    title: i18n.t("Web Development"),
    description: i18n.t(
      "Crafting responsive and user-friendly websites tailored to your needs, from design to deployment."
    ),
  },
  {
    icon: mobiledevicon,
    title:  i18n.t("Mobile Development"),
    description: i18n.t(
      "Building native and cross-platform mobile applications with a focus on performance and user experience."
    ),
  },
  {
    icon: seoicon,
    title: i18n.t("SEO"),
    description: i18n.t(
      "Optimizing your online presence to boost search engine rankings and drive organic traffic through strategic SEO techniques."
    ),
  },
  {
    icon: dataanalysisicon,
    title: i18n.t("Data Analysis"),
    description: i18n.t(
      "Extracting meaningful insights from data using advanced analytics tools, helping you make data-driven decisions."
    ),
  },
   

];

export const testinomials = [
  {
    name: "John Doe",
    title: "CEO",
    company: "Google",
    image: image1,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Jane Doe",
    title: "CTO",
    company: "Facebook",
    image: image2,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Google",
    image: image1,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const blogs = [
  {
    title: "Devin AI",
    //  description: "The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. ",
    description:
      "The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. The Rise of the AI Software Engineer and What it Means for the Future of Tech Careers and Development. ",
    link: "https://medium.com/@fahdforr/devin-the-rise-of-the-ai-software-engineer-and-what-it-means-for-the-future-a31779bb9b7d",
    date: "Mar 28, 2024",
    icon: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*v-Ob-9RzPd_musXFPv5tqg.jpeg",
  },
  {
    title: "Humane’s AI Pin",
    description:
      "Unveiling the Future: Humane’s AI Pin — A Revolutionary Wearable AI Device. What is the Humane’s AI Pin? How does it work? What are the benefits of using it? How can it change the way we interact with technology? ",
    link: "https://medium.com/@fahdforr/unveiling-the-future-humanes-ai-pin-a-revolutionary-wearable-ai-device-fcfb975ab668",
    date: "Nov 15, 2023",
    icon: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*-G3HW2jHfPPFkZzD.png",
  },
  {
    title: "Roadmap to Fullstack",
    description:
      "Becoming a Full Stack Developer: Your Roadmap to a Dynamic Tech Career. What is a Full Stack Developer? What are the skills required to become one? How can you become a Full Stack Developer? What are the benefits of being a Full Stack Developer? ",
    date: "Oct 2, 2023",
    link: "https://medium.com/@fahdforr/becoming-a-full-stack-developer-your-roadmap-to-a-dynamic-tech-career-dd1f6ed4d1ba",
    icon: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*a_uhS1w67SUMy0Pbhy2wqA.png",
  },
];
