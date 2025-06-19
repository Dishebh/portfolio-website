/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dishebh Bhayana",
  title: "Hi all, I'm Dishebh",
  subTitle: emoji(
    "A passionate Full Stack Web Developer and Software Engineer 🚀 having experience in building web applications at scale, with expertise in JavaScript, React, Node.js, and various modern technologies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dishebh",
  linkedin: "https://linkedin.com/in/dishebh-bhayana",
  gmail: "dishebh27@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Build scalable backend services with RESTful APIs and GraphQL"),
    emoji(
      "⚡ Implement CI/CD pipelines and deploy applications using Docker and cloud platforms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NIT Hamirpur",
      logo: require("./assets/images/nit-hamirpur-logo.png"),
      subHeader:
        "Bachelor of Technology - Electronics and Communication Engineering",
      duration: "July 2018 - May 2022",
      desc: "Graduated with a GPA of 8.77. Focused on software development and web technologies alongside core electronics curriculum.",
      descBullets: [
        "GPA: 8.77",
        "Electronics and Communication Engineering",
        "Hamirpur, Himachal Pradesh"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/React", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Node.js",
      progressPercentage: "85%"
    },
    {
      Stack: "Database/PostgreSQL",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer 2",
      company: "Goldcast",
      companylogo: require("./assets/images/goldcast-logo.jpg"),
      date: "September 2023 – Present",
      desc: "Leading backend development and frontend optimization for studio applications and SSR systems.",
      descBullets: [
        "Designed and optimized backend RESTful APIs for event series and registration forms, improving database efficiency by 40%",
        "Refactored React frontend for better SSR performance",
        "Developed backend servers for SSR applications using Node.js, Express, and PostgreSQL",
        "Implemented GraphQL APIs, optimized SQL queries, and integrated Redis caching, improving performance by 25%",
        "Designed CI/CD pipelines using GitHub Actions and Docker for automated deployments"
      ]
    },
    {
      role: "Software Engineer",
      company: "Goldcast",
      companylogo: require("./assets/images/goldcast-logo.jpg"),
      date: "June 2022 – August 2023",
      desc: "Focused on webinar implementation, branding improvements, and automation testing.",
      descBullets: [
        "Implemented and worked on Webinars, improving the Branding of Studio application",
        "Reworked Goldbot rating design and implementation, along with other tech debt items",
        "Wrote various automation E2E tests, increased coverage by 30%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Goldcast",
      companylogo: require("./assets/images/goldcast-logo.jpg"),
      date: "January 2022 – March 2022",
      desc: "Contributed to automation testing and headless library features.",
      descBullets: [
        "Wrote various E2E tests using Cypress to increase the coverage of overall applications",
        "Added headless library features to the Admin application"
      ]
    },
    {
      role: "Technical Intern",
      company: "Rakuten India Pvt. Ltd.",
      companylogo: require("./assets/images/rakuten-logo.png"),
      date: "March 2021 – August 2021",
      desc: "Developed web interfaces and analytics dashboard for the intelligence platform.",
      descBullets: [
        "Designed and developed fully tested web interfaces for the intelligence platform using React",
        "Utilized Jest and Enzyme for end-to-end testing, resulting in 25% reduction in regression bugs",
        "Created an analytics dashboard to view all metrics for Rakuten products' dynamics in the market",
        "Worked closely with the backend team to scale and maintain the system architecture"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      projectName: "Multi-Modal PDF Generator",
      projectDesc:
        "Created a Multi-Modal PDF Generator wherein you input a text prompt, and it generates a PDF with text and images in it.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Dishebh/multi-modal-pdf-generator"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Zerosnap",
      projectDesc:
        "Created a snapchat clone that allows users to upload pics, view pics with a timer, along with Google OAuth functionality.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Dishebh/zerosnap"
        }
      ]
    },
    {
      projectName: "Natours",
      projectDesc:
        "Developed a full-stack e-commerce application with React.js frontend, Node.js backend, and PostgreSQL database. Implemented JWT authentication and Stripe payments.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Dishebh/natours"
        }
      ]
    },
    {
      projectName: "Image IDE",
      projectDesc:
        "Created an IDE for Image-based code wherein the code is extracted from an image and parsed and typed into the selected programming language, along with the option to compile the output.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Dishebh/image-ide"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "College Winner, Optum Stratethon Season 3",
      subtitle:
        "Won the college-level competition in Optum Stratethon Season 3, showcasing problem-solving and strategic thinking skills.",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },
    {
      title: "OpenTech Scholarship Winner",
      subtitle:
        "Won the OpenTech scholarship to attend the OpenTech Summit, the largest Open Source summit in Asia, held in Singapore.",
      footerLink: [
        {
          name: "Certificate",
          url: ""
        }
      ]
    },

    {
      title: "18th Place, GirlScript Summer of Code",
      subtitle:
        "Achieved 18th place in the competitive GirlScript Summer of Code program, demonstrating strong coding and collaboration skills.",
      footerLink: [{name: "Certificate", url: ""}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@dishebh/full-stack-development-best-practices",
      title: "Full Stack Development Best Practices",
      description:
        "A comprehensive guide to building scalable web applications with modern technologies."
    },
    {
      url: "https://medium.com/@dishebh/react-performance-optimization",
      title: "React Performance Optimization Techniques",
      description:
        "Learn how to optimize React applications for better performance and user experience."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Building Scalable Web Applications",
      subtitle: "Tech Talk at Developer Meetup",
      slides_url: "https://slides.com/dishebh/scalable-web-apps",
      event_url: "https://meetup.com/developer-talks"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/tech-talks/embed/episodes/Full-Stack-Development-with-Dishebh-Bhayana"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "dishebh27@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
