const about = {
  title: "Hi 👋 , I am Shehab Shalan",
  description:
    "I am a web developer currently pursuing a master's degree. I have worked as a frontend developer for over a year. I have also worked on personal projects involving mainly MERN stack. I have done mostly frontend development, but I am also interested in backend development. I am always open to new challenges.",
  github: "https://github.com/shehabshalan",
  linkedin: "https://www.linkedin.com/in/shehabshalan/",
  cv: "https://firebasestorage.googleapis.com/v0/b/personal-projects-2624c.appspot.com/o/Shehab's%20Resume.pdf?alt=media&token=bc4dcf7f-9417-457c-abdc-f289ca2d0b80",
};

const projects = {
  title: "Projects",
  personalProjects: [
    {
      title: "Online Video Sharing App",
      short:
        "Features Firebase authentication, video upload, and video streaming.",
      description:
        "it is a video-sharing app built using Firebase for authentication, and data persistence. A user can upload a video with a thumbnail and other metadata and stream it back. The app uses other technologies such as MUI for UI. ",
      technologies: "#React.js #MUI #Firebase",
      github: "https://github.com/shehabshalan/online-video-sharing-app",
      demo: "https://videozly.netlify.app/",
    },
    {
      title: "Next.js Blog",
      short:
        "Features JWT authentication, headless CMS, and full CRUD operations.",
      description:
        "it is a Next.js blog site built using Strapi (a headless CMS) as a backend and implements concepts such as CSR, SSG, and ISR as well as authentication using JWT. A user can use full CRUD operations including commenting and searching.",
      technologies: "#Next.js #MUI #Strapi #JWT",
      github: "https://github.com/shehabshalan/next-blog",
      demo: "https://next-blog-eta-dun.vercel.app/",
    },
    {
      title: "File Sharing App",
      short:
        "Features multi-file upload, sharing links with expiration and document preview.",
      description:
        "it is a document library (file sharing) built using the MERN stack. Users are able to upload files, keep track of the number of downloads, preview files, and create a sharing link that is set to expire according to the specified time.",
      technologies: "#React.js #MUI #Express.js #Node.js #MongoDB #Cloudinary",
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
      company: "Trusted KYB Limited",
      duration: "Mar 2021 - Jun 2022",
      description:
        "I worked with **React**, **Material UI** and **TypeScript** on a project based on **atomic design methodology** to deliver new features such as **dashboard** and **risk assessment reports**. I worked with libraries such as **React Query** for API calls, **Formik** and **Yup** for forms and validations. I maintained existing features and and fixed bugs. I implemented **Context API** as well as **custom hooks**. I also worked with a **.NET API** to fetch and manage data on the frontend.",
    },
  ],
};

const skills = {
  title: "Skills",
  mySkills: [
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
      skills: "#Git #Jest #CI/CD #AdobeXD",
    },
  ],
};

export { about, projects, experience, skills };
