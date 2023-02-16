// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLinkedin,
  FaJava,
  FaPython,
  FaAngular,
  FaSwift,
} from "react-icons/fa";
import { SiJavascript, SiCplusplus } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
// import HeroLight from "./images/hero-light.jpg";
import HeroLight from "./images/day-pic.jpg";
// import HeroDark from "./images/hero-dark.jpg";
import HeroDark from "./images/personal-pic.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "klizhang";

// Blog link icon (imported above)
// export const Blog = <FaLink />;
export const Blog = <FaLinkedin />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am a Master's student studying Computer Science at University of Southern California. I studied Mechanical Engineering in my undergrad at UCSD. I have experience working with Java, Python, C, C++";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaJava className="display-4" />,
    name: "Java",
  },
  {
    id: 2,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <SiCplusplus className="display-4" />,
    name: "C++",
  },
  {
    id: 4,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 5,
    skill: <FaAngular className="display-4" />,
    name: "Angular",
  },
  {
    id: 6,
    skill: <FaSwift className="display-4" />,
    name: "SwiftUI",
  },
  {
    id: 7,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    id: 8,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    id: 9,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 10,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 11,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 12,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/11oGX3-U9OCJhsFxK7-RyiZl1_4RbM0O2/edit?usp=sharing&ouid=101964423201802545068&rtpof=true&sd=true";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];
