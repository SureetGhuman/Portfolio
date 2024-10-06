import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Next",
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Next.js, building fast, scalable web applications with server-side rendering and static site generation, focusing on performance optimization and seamless user experience.",
  },
  {
    id: nanoid(),
    title: "Node",
    icon: <FaNode className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Node.js, developing high-performance back-end applications with a focus on scalability, real-time data handling, and efficient API integration for seamless communication between front-end and server.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in MongoDB, designing and managing flexible, schema-less databases optimized for scalability and high availability, ensuring efficient storage and retrieval of data in modern web applications.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "https://github.com/SureetGhuman/Amol-Sabab.git",
    github: "https://github.com/SureetGhuman/Amol-Sabab",
    title: "Amol Sabab",
    text: "Amol Sabab website is a digital catalog for a Punjabi ethnic wear brand, designed to showcase traditional clothing collections with a sleek, user-friendly interface. Built to enhance brand visibility, it offers seamless navigation and responsive design, providing an engaging experience for users to explore the latest apparel.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/5405598/pexels-photo-5405598.jpeg",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/SureetGhuman/Home-away.git",
    title: "Home-Away",
    text: "Home-Away designed to allow users to browse and book accommodations worldwide. It features a dynamic user interface, property listings with detailed descriptions, and a responsive booking system. The project integrates search, filtering, and secure user authentication to provide a seamless travel booking experience.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "Jobster",
    text: "Jobster is a job search platform designed to connect job seekers with employers. It features functionalities like job listings, search and filter options, and user authentication for both applicants and employers. The site allows users to create profiles, apply for jobs, and manage job postings efficiently, providing a smooth and responsive experience for career opportunities.",
  },
];
