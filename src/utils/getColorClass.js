const getColorClass = (tech) => {
  switch (tech) {
    case "#JavaScript":
      return "javascript";
    case "#TypeScript":
      return "typescript";
    case "#HTML":
      return "html";
    case "#CSS":
      return "css";
    case "#Git":
      return "git";
    case "#Node.js":
      return "nodejs";
    case "#Express.js":
      return "expressjs";
    case "#MongoDB":
      return "mongodb";
    case "#PostgreSQL":
      return "postgresql";
    case "#Next.js":
      return "nextjs";
    case "#Firebase":
      return "firebase";
    case "#Jest":
      return "jest";
    case "#CI/CD":
      return "cicd";
    case "#AdobeXD":
      return "adobe-xd";
    case "#React.js":
      return "reactjs";
    case "#JWT":
      return "jwt";
    case "#Strapi":
      return "strapi";
    case "#MUI":
      return "mui";
    default:
      return "";
  }
};

export default getColorClass;
