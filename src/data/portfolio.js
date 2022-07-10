const about = {
  title: "Hi 👋 , I am Shehab Shalan",
  description:
    "I am a web developer currently pursuing a master's degree. I have worked as a frontend developer for over a year. I have also worked on personal projects involving mainly MERN stack. I have done mostly frontend development, but I am also interested in backend development. I am always open to new challenges.",
};

const projects = {
  title: "Projects",
  projects: [
    {
      title: "Online Video Sharing App",
      description:
        "The app allows users to register/log in, upload a video with a thumbnail and stream it back with the ability to leave comments. Comments can be toggled on and off by the user.",
      technologies: "#React.js #MUI #Firebase",
      github: "https://github.com/shehabshalan/online-video-sharing-app",
      demo: "https://videozly.netlify.app/",
    },
    {
      title: "Next.js Blog",
      description:
        "it is a Next.js blog site which uses Strapi (a headless CMS) as a backend, and implements concepts such as CSR, SSG and ISR. A user can create, delete, update and read blogs as well as comment and search blogs. The blog site implements full authentication and authorization from Strapi using JWT.",
      technologies: "#Next.js #MUI #Strapi #JWT",
      github: "https://github.com/shehabshalan/next-blog",
      demo: "https://next-blog-eta-dun.vercel.app/",
    },
    {
      title: "File Sharing App",
      description:
        "The application is a document library intended to give its users a web based solution to store and share file for a specified duration set by the user.",
      technologies:
        "#React.js #Express.js #Node.js #MongoDB #Mongoose #MUI #Cloudinary",
      github: "https://github.com/shehabshalan/document-library",
      demo: "https://document-library-api.herokuapp.com/",
    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "Frontend Developer",
      company: "Eta Dun",
      duration: "Mar 2021 - Jun 2022",
      description:
        "I have worked as a frontend developer for Eta Dun, a startup in the field of education. I have worked on the frontend of the website, as well as the backend of the website. I have also worked on the frontend of the mobile app, as well as the backend of the mobile app.",
    },
  ],
};

const skills = {
  title: "Skills",
  skills: [
    {
      title: "Languages & Frameworks",
      skills:
        "#HTML #CSS #JavaScript #TypeScript #React.js #Next.js #MUI #Node.js #Express.js ",
    },
    {
      title: "Databases",
      skills: "#MongoDB #PostgreSQL #Firebase",
    },
    {
      title: "Others",
      skills: "#Git #Jest #CI/CD",
    },
  ],
};

export { about, projects, experience, skills };
