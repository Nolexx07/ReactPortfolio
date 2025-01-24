import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";
import project10 from "../assets/projects/project-10.jpg";

export const HERO_CONTENT = `Full-Stack Developer with a Twist of AI Welcome! I’m Sathvik, your go-to guy for developing applications that not only function efficiently but also think intelligently. I’m deeply involved in both spheres—full-stack development and artificial intelligence. 🖥️✨

I value connections and conversations that lead to productive outcomes. If you’re looking for someone who thinks out of the box and is excited about pioneering the next technological advancements, let’s get in touch! I’m just a message away.

`;

export const ABOUT_TEXT = `
Hi! I’m Malkam Sathvik, an enthusiastic Artificial Intelligence and Machine Learning (AI/ML) student at TKR College of Engineering and Technology 🎓, passionate about developing innovative tech solutions 💡. I have worked on impactful projects such as Red Prime 🩸, a life-saving blood donation app with real-time donor-recipient connections; Placement Prep Solution (PPS) 🎯, a responsive platform simplifying placement preparation; and Instacopy 🔍, a browser extension prototype for extracting and managing text, inspired by Google Lens.

With experience from internships in AI 🤖, Java Development ☕, and Web Development 🌐, I’ve built projects like a rule-based chatbot, a library management system, and dynamic websites. Currently, I’m mastering the MERN stack 💻 and exploring generative AI tools like Synthesia and Lumen5 🛠️ to broaden my skill set. My goal is to excel as a Software Development Engineer in Test (SDET) 🚀, focusing on Data Structures and Algorithms (DSA) 📚 to achieve this ambition. I strive to create impactful solutions that address real-world challenges 🌟 and leave a lasting impression.`;

export const EXPERIENCES = [
  {
    year: "Jun2024–July2024",
    role: "Artificial Intelligence",
    company: "Codsoft",
    description: ` a Rule-Based Chatbot to automate responses based on predefined rules, an AI-powered Tic Tac Toe Game utilizing decision-making algorithms, and a Face Detection and Recognition System for real-time biometric identification, showcasing skills in machine learning and computer vision.`,
    technologies: ["Python","NLTK","OpenCV","More.."],
  },
  {
    year: "Jun2024–July2024",
    role: "Java Development",
    company: "Coderscave",
    description: ` Developed and implemented comprehensive Java applications, including a Library Management System and Student Information System, demonstrating strong skills in object-oriented programming, data management, and user interface design.`,
    technologies: ["HTML","CSS","javaScript","MySQL","PHP"],
  },
  {
    year: "July2024–Sept2024",
    role: "Web Developer",
    company: "Octanet",
    description: `Created responsive and interactive web applications, including a landing page and a to-do list using HTML, CSS, and JavaScript, showcasing front-end development skills during a web development internship at Octanet.`,
    technologies: ["HTML","CSS","javaScript"],
  },
];

export const PROJECTS = [
  {
    title: "RED PRIME",
    image: project2,
    description: "Red Prime is a Comprehensive mobile application designed to revolutionize the blood donation ecosystem. This project addresses the critical need for an efficient and accessible platform that connects blood donor with recipients. The app aims to simplify contribution, and ultimately save lives.",
    technologies: ["HTML", "CSS", "Java", "JavaScript", "Eclipse IDE", "MySQL Connector Jar", "Apache Tomcat (Server)"],
    link: "https://github.com/Nolexx07/RED-PRIME.git", // Replace with actual link
  },
  {
    title: "Portfolio Website",
    image: project10,
    description: "A portfolio website built with HTML, CSS, and JavaScript showcases your skills, projects, and personal information in an interactive and visually appealing way. It serves as a digital resume, combining responsive design, animations, and user-friendly navigation to leave a lasting impression on visitors.",
    technologies: ["HTML", "CSS", "JavaScript", "VS Code"],
    link: "https://malkamsathvik.netlify.app/", // Replace with actual link
  },
  {
    title: "Placement Prep Solution (PPS)",
    image: project9,
    description: "Placement Prep Solution (PPS) is a cutting-edge platform crafted to support students and job seekers in achieving success in placement and interview preparations. Combining a wide range of resources and tools, PPS focuses on building technical expertise, aptitude mastery, and effective communication skills. The platform leverages modern technology to deliver an intuitive and efficient learning experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/your-username/pps", // Replace with actual link
  },
  {
    title: "AI Gesture Virtual Mouse / Voice Assistant",
    image: project8,
    description: "Gesture Controlled Virtual Mouse leverages hand gestures detected via a webcam to perform mouse functions like clicking, dragging, and scrolling, enhancing user interface navigation",
    technologies: ["MediaPipe", "OpenCV"],
    link: "https://github.com/your-username/gesture-virtual-mouse", // Replace with actual link
  },
  {
    title: "Face Detection And Recognition",
    image: project1,
    description: "Face detection identifies human faces in images or videos, while face recognition matches detected faces to known identities using AI algorithms",
    technologies: ["Python", "OpenCV"],
    link: "https://github.com/Nolexx07/Face-detection-and-recognition-.git", // Replace with actual link
  },
  {
    title: "TIC TAC TOE AI",
    image: project3,
    description: "A Tic-Tac-Toe AI uses algorithms like the minimax strategy to play optimally and either win or force a draw against any opponent.",
    technologies: ["Python", "Minimax Algorithm for AI decision-making", "Numpy"],
    link: "https://github.com/Nolexx07/Tic-Tac-Teo-Ai.git", // Replace with actual link
  },
  {
    title: "Library Management System",
    image: project4,
    description: "A Library Management System in Java is a software application designed to manage and automate library operations, such as cataloging, tracking borrowed books, and managing user accounts.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/Nolexx07/Coders-cave.git", // Replace with actual link
  },
  {
    title: "LANDING PAGE",
    image: project5,
    description: "Created a Landing Page.",
    technologies: ["HTML", "CSS"],
    link: "https://github.com/Nolexx07/Landingpage-Octanet-.git", // Replace with actual link
  },
  {
    title: "Student Management System",
    image: project6,
    description: "A system for managing student information and academic data.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Nolexx07/Coders-cave.git", // Replace with actual link
  },
  {
    title: "Rule Based Chatbot AI",
    image: project7,
    description: "A rule-based chatbot AI uses predefined rules and patterns to understand and respond to user inputs, offering structured and predictable interactions",
    technologies: ["Python", "Algorithm: logic using if-else statements"],
    link: "https://github.com/Nolexx07/Rule-based-chatbot.git", // Replace with actual link
  },
];

export const CONTACT = {
  address: "Hyderabad, India",
  phoneNo: "8374122698",
  email: "malkamsathvik@gmail.com",
};
