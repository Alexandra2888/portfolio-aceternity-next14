import React from "react";
import {
  SiCss3,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPrisma,
  SiReact,
  SiStorybook,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";

export const projects = [
  {
    id: "1",
    title: "Pawsitive Vet Care",
    tech: [SiReact, SiTypescript, SiCss3, SiFirebase],
    githubLink: "https://github.com/Alexandra2888/PawSitive-Care-Vet",
    deploymentLink: "https://paw-sitive-care-vet.vercel.app/",
    description: "Pawsitive Care Vet is a  veterinary management system built with React and TypeScript. This modern web application leverages Firebase for backend services, React Router for seamless navigation, and integrates interactive maps using React Leaflet. With features like appointment scheduling and a user-friendly interface, Pawsitive Care Vet streamlines veterinary clinic operations. The project showcases advanced front-end development practices, including responsive design with Sass and state management.",
    cover:
      "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729412410/portfolio-next-aceternity/pawsitive_geskqt.png",
    background: "bg-indigo-500",
    laptopImage: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729417908/portfolio-next-aceternity/Device_-_Macbook_Pro6_j1hjdl.png",
  },
  {
    id: "2",
    title: "Focus App",
    tech: [SiReact],
    githubLink: "https://github.com/Alexandra2888/Focus-Time",
    deploymentLink: "",
    description: "Focus Time is a productivity app developed with React Native and Expo, designed to boost time management and task focus. This mobile application implements the Pomodoro Technique with customizable timers.",
    cover:
      "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729412403/portfolio-next-aceternity/focus_rumvdw.png",
    background: "bg-green-500",
    laptopImage: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729419670/mobile_g7h032.png",
  },
  {
    id: "3",
    title: "eShop",
    tech: [SiReact, SiNodedotjs, SiMongodb],
    githubLink:
      "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729412396/portfolio-next-aceternity/eshop_ynzrcg.png",
    deploymentLink: "",
    description: "eShop is a full-stack e-commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates proficiency in developing a complete, production-ready web application with a focus on performance and real-time user experience. Key features include secure user authentication, a dynamic product catalog with search and filtering capabilities, an intuitive shopping cart and checkout system, integrated payment processing, and a responsive design optimized for all devices. The admin dashboard for managing products and orders showcases backend API development and database management skills. The frontend, developed with React and Redux, utilizes TailwindCSS for styling and Vite for fast builds, highlighting modern frontend development practices. The backend, powered by Node.js and Express, integrates with MongoDB using Mongoose for efficient data modeling. Security measures implemented through Helmet, CORS, and bcryptjs underscore a commitment to building robust, secure web applications. This project exemplifies the ability to create scalable, full-stack JavaScript applications, manage state effectively, handle real-time data updates, and implement e-commerce functionalities from user authentication to order processing.",
    cover: "/eshop.png",
    background: "bg-orange-500",
    laptopImage: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729418899/Device_-_Macbook_Pro4_alqlfl.png",
  },
  {
    id: "4",
    title: "Krello",
    tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma],
    githubLink: "https://github.com/Alexandra2888/krello",
    deploymentLink: "https://krello-beta.vercel.app/",
    description: "Krello is a sophisticated Trello clone that showcases advanced web development skills using modern technologies. Built with Next.js and React, this project demonstrates proficiency in creating complex, interactive user interfaces with drag-and-drop functionality for intuitive task management. Key features include robust user authentication via Clerk, real-time updates, and seamless integration with third-party services. The application leverages Prisma for efficient database management, React Query for state management and data fetching, and Zustand for global state handling. The UI is crafted using a combination of Radix UI components and Tailwind CSS, highlighting expertise in creating responsive, accessible, and customizable user interfaces. Integration with Unsplash API adds dynamic visual elements to enhance user experience. This project exemplifies skills in full-stack development, from server-side rendering with Next.js to client-side interactivity with React. It showcases the ability to work with modern web technologies, implement complex state management solutions, and create performant, scalable web applications with a focus on user experience and functionality.",
    cover:
      "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729412405/portfolio-next-aceternity/krello_aakwyi.png",
    background: "bg-purple-500",
    laptopImage: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729418565/portfolio-next-aceternity/Device_-_Macbook_Pro2_cf5gfe.png",
  },
  // {
  //   title: "WatchFlix",
  //   tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiMongodb],
  //   link: "https://github.com/Alexandra2888/watchflix",
  //   cover: "/watchflix2.png",
  //   background: "bg-yellow-500",
  // },
  {
    id: "5",
    title: "IntelliFlow",
    tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai],
    githubLink: "https://github.com/Alexandra2888/IntelliFlow",
    deploymentLink: "https://intelli-flow-4ailj1vg7-alexandra2888s-projects.vercel.app/",
    description: "IntelliFlow is a Next.js-based platform that integrates OpenAI and Replicate APIs to offer AI-driven content generation. This project showcases advanced web development skills, featuring AI-powered image, video, code, and conversation generation. Built with React, TypeScript, and Tailwind CSS, IntelliFlow demonstrates proficiency in creating modern, full-stack applications that leverage cutting-edge AI technologies for practical, user-focused solutions.",
    cover:
      "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729412411/portfolio-next-aceternity/saas-ai_g8bz4l.png",
    background: "bg-pink-500",
    laptopImage: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729417907/portfolio-next-aceternity/Device_-_Macbook_Pro1_spsdlt.png",
  },
  {
    id: "6",
    title: "Object Detection",
    tech: [SiNextdotjs, SiTailwindcss, SiTensorflow],
    githubLink: "https://github.com/Alexandra2888/Object-Detection",
    deploymentLink: "https://object-detection-zeta-flax.vercel.app/",
    description: "Object Detection App is a real-time web application built with Next.js and TensorFlow.js. It uses the COCO-SSD model to detect and classify objects from a live webcam feed. The app showcases skills in integrating machine learning models with modern web technologies, featuring a responsive UI and efficient rendering of detection results. This project demonstrates proficiency in React, TensorFlow.js, and real-time video processing in the browser.",
    cover:
      "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729412407/portfolio-next-aceternity/object-detection2_ttakyq.png",
    background: "bg-blue-500",
    laptopImage: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729419002/Device_-_Macbook_Pro5_zoxynj.png",
  },
  // {
  //   title: "Component Craft-React UI Library (in progress)",
  //   tech: [SiNextdotjs, SiTailwindcss, SiStorybook],
  //   link: "https://github.com/Alexandra2888/ComponentCraft",
  //   cover: "/component-craft.png",
  //   background: "bg-yellow-900",
  // },
  {
    id: "7",
    title: "Audit-AI (audit for smart contracts)",
    tech: [SiNextdotjs, SiTailwindcss, SiOpenai],
    githubLink: "https://audit-qpatwy37u-alexandra2888s-projects.vercel.app",
    deploymentLink: "https://audit-ai.vercel.app/",
    description: "Audit-AI is an advanced smart contract auditing tool built with Next.js and powered by OpenAI. It offers both a web application and a CLI tool for automated security analysis of blockchain smart contracts. The project demonstrates expertise in AI integration, blockchain technology, and full-stack development, providing developers with efficient, AI-driven contract verification to enhance blockchain security. Audit-AI showcases skills in creating practical, developer-focused tools that bridge AI and blockchain technologies.",
    cover:
      "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729412394/portfolio-next-aceternity/audit-ai_gki7en.png",
    background: "bg-orange-700",
    laptopImage: "https://res.cloudinary.com/dnpjmrdik/image/upload/v1729418661/Device_-_Macbook_Pro3_mw7qct.png",
  },
];
