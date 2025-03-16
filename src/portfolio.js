/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Nimit Kanani",
  title: "Hi, I am Nimit",
  subTitle: emoji(
    "A passionate Software Engineer 🚀  with experience in building scalable data systems and AI solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12n60LZVIdNLT4YW8ct2gsP9EhaBq6Hbn/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nimitmk7",
  linkedin: "https://www.linkedin.com/in/nimit-kanani/",
  gmail: "nimitmk7@gmail.com",
  medium: "https://medium.com/@nimitmk7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [],
  programmingLanguages: [
    {
      skillName: "Java",
      imagePath: require("./assets/skills/java.png"),
    },
    {
      skillName: "Python",
      imagePath: require("./assets/skills/python.png"),
    },
    {
      skillName: "Typescript",
      imagePath: require("./assets/skills/typescript.png"),
    },
  ],
  devOps: [
    {
      skillName: "Amazon Web Services",
      imagePath: require("./assets/skills/aws.png"),
    },
    {
      skillName: "Docker",
      imagePath: require("./assets/skills/docker.png"),
    },
    {
      skillName: "Kubernetes",
      imagePath: require("./assets/skills/kubernetes.png"),
    },
    {
      skillName: "Terraform",
      imagePath: require("./assets/skills/terraform.png"),
    },
  ],
  mlTools: [
    {
      skillName: "TensorFlow",
      imagePath: require("./assets/skills/tensorflow.png"),
    },
    {
      skillName: "PyTorch",
      imagePath: require("./assets/skills/pytorch.png"),
    },
    {
      skillName: "MLFlow",
      imagePath: require("./assets/skills/mlflow.png"),
    },
    {
      skillName: "OpenCV",
      imagePath: require("./assets/skills/opencv.png"),
    },
    {
      skillName: "HuggingFace",
      imagePath: require("./assets/skills/huggingface.png"),
    },
  ],
  dataProcessing: [
    {
      skillName: "Apache Kafka",
      imagePath: require("./assets/skills/kafka.png"),
    },
    {
      skillName: "Apache Spark",
      imagePath: require("./assets/skills/spark.png"),
    },
    {
      skillName: "Hadoop",
      imagePath: require("./assets/skills/hadoop.png"),
    },
  ],
  databases: [
    {
      skillName: "MySQL",
      imagePath: require("./assets/skills/mysql.png"),
    },
    {
      skillName: "PostgreSQL",
      imagePath: require("./assets/skills/postgresql.png"),
    },
    {
      skillName: "Redis",
      imagePath: require("./assets/skills/redis.png"),
    },
    {
      skillName: "DynamoDB",
      imagePath: require("./assets/skills/dynamodb.png"),
    },
    {
      skillName: "Snowflake",
      imagePath: require("./assets/skills/snowflake.png"),
    },
    {
      skillName: "Amazon Redshift",
      imagePath: require("./assets/skills/redshift.png"),
    },
    {
      skillName: "Google BigQuery",
      imagePath: require("./assets/skills/bigquery.png"),
    },
    {
      skillName: "InfluxDB",
      imagePath: require("./assets/skills/influxdb.png"),
    },
    ,
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "New York University",
      logo: require("./assets/images/nyuLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - May 2025",
      //desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Relevant Coursework: Natural Language Processing, Artificial Intelligence, Big Data, Deep Learning, Cloud Computing, Computer Vision",
        "Course Assistant: Software Engineering, Design Project",
      ],
    },
    {
      schoolName: "Birla Institute of Technology and Science, Pilani",
      logo: require("./assets/images/bitsLogo.png"),
      subHeader:
        "Dual Degree: Master of Science in Economics, Bachelor of Engineering in Computer Science",
      duration: "August 2016 - July 2021",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Relevant Coursework: Data Structures and Algorithms, Database systems, Data Mining, Information Retrieval, Econometrics, Object Oriented Programming, Operating systems",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "AI & Machine Learning",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quantitative Developer Intern",
      company: "Sov AI",
      companylogo: require("./assets/images/sovaiLogo.png"),
      date: "June 2024 – Dec 2024",
      desc: "Developed a Python software package for extracting and parsing patent data and subsequently mapping it to stock market tickers.",
      //descBullets: [
      //  "Developed a Python software package for extracting, parsing, and analyzing USPTO patent data, automating periodic data processing scripts to generate actionable insights",
      //  "Trained a custom sentence transformer language model to map patent assignee organization names to stock market tickers, enhancing data linkage and market analysis."
      //]
    },
    {
      role: "Software Development Engineer",
      company: "Hevo Data",
      companylogo: require("./assets/images/hevoDataLogo.png"),
      date: "July 2020 - June 2023",
      desc: "Backend developer in the ETL/ELT data pipelines domain, worked on a variety of tasks related to billing, data transformations, and scaling the product. Also served as a core member of the on-call team to ensure high availability of the product.",
      //descBullets: [
      // "Streamlined billing/payments microservice to achieve scalability, low latency, and reliability, reducing the rate limiting errors from 1M/month to 0, and the number of billing issues per month by 50%, latency of API calls by 30%.",
      // "Developed an on-demand credit feature allowing users to get extra usage for ETL pipelines as credit, eliminating 95% of cases of pipeline downtime due to usage exhaustion.",
      // "Integrated dbt (data build tool) for advanced ELT data warehouse transformations in the product as a core member of a cross-functional team, to facilitate an end-to-end data solution for all customers.",
      // "Implemented solutions for recurring issues in ELT data transformations related to failures, timeouts, scalability, and data mismatch, resulting in a 90% reduction of customer-reported technical issues.",
      //   "Resolved customer issues in ETL/ELT pipelines, and oversaw application infra as part of on-call while collaborating with technical support and DevOps in a fast-paced, high-pressure environment.",
      // "Built an admin panel application that provides finer control over the product configurations (pipeline, customer, infra settings) and application monitoring with built-in maker-checker and auditing, reducing the turnaround time of support tickets by 30%, thus increasing customer satisfaction."
      //]
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/",
        },
      ],
    },
  ],
  display: false, // Changed from true to false to hide the section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
  display: false, // Changed from true to false to hide the section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  //subtitle:
  //  "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones,
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//  title: "TALKS",
//  subtitle: emoji(
//    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//  ),

//  talks: [
//    {
//      title: "Build Actions For Google Assistant",
//      subtitle: "Codelab at GDG DevFest Karachi 2019",
//      slides_url: "https://bit.ly/saadpasta-slides",
//      event_url: "https://www.facebook.com/events/2339906106275053/"
//    }
//  ],
//  display: true // Set false to hide this section, defaults to true
//};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-929-326-8815",
  email_address: "nimitmk7@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

const projectSection = {
  projects: [
    {
      id: 1,
      title: "Omnicode - AI powered Coding Assistant in VSCode",
      description:
        "Scalable, modular, and cost-effective VSCode extension powered by AWS, with 3 features: Code completion, Code refactoring, and Documentation Generation. It also features a personalized usage metrics dashboard.",
      techStack: [
        "Sagemaker",
        "DynamoDB",
        "SQS",
        "S3",
        "API Gateway",
        "Lambda",
        "Eventbridge",
        "Python",
        "Typescript",
        "Cognito",
      ],
    },
    {
      id: 2,
      title: "Photo Album with Entity recognition and Natural Language Search",
      description:
        "A photo album web application on AWS, where users can upload photos. The application detects entities in the photos and allows users to search for photos using natural language.",
      techStack: [
        "OpenSearch",
        "Lex",
        "CloudFormation",
        "CodePipeline",
        "S3",
        "Lambda",
        "Rekognition",
        "API Gateway",
        "Python",
        "Typescript",
      ],
    },
    {
      id: 3,
      title:
        "Supervised Finetuning of Llama 3.1-8B model for verifying the correctness of answers to Mathematical questions",
      description:
        "Tuned the Llama 3.1-8B model using Performance Efficient Finetuning Technique(PEFT) LoRA(Low-Rank Adapation) to verify the correctness of answers to Mathematical questions, and achieved 85% accuracy.",
      techStack: ["HuggingFace", "Pandas", "PyTorch"],
    },
    {
      id: 4,
      title: "Online Chatbot for Dining Suggestions",
      description:
        "Developed a chatbot on AWS that takes in restaurant preferences from users, finds relevant restaurants and sends the recommendations in an email.",
      techStack: [
        "Lex",
        "SQS",
        "DynamoDB",
        "OpenSearch",
        "SES",
        "Lambda",
        "API Gateway",
        "Python",
      ],
    },
    {
      id: 5,
      title:
        "Finetuning Segment Anything Model(SAM) for segmenting sidewalks in satellite imagery",
      description:
        "Performed Supervised Finetuning of Segment Anything Model(SAM) for segmenting sidewalks in satellite imagery, and achieved 85% accuracy.",
      techStack: ["PyTorch", "HuggingFace", "Streamlit"],
    },
    {
      id: 6,
      title:
        "Enhanced Multi-Object Trajectory Tracking in Drone Footage using Kalman Filters",
      description:
        "Trained YOLOv8 model on VisDrone dataset and leveraged Kalman filters to track the trajectory of cars, and bicycles in moving drone footage..",
      techStack: ["PyTorch", "Pandas", "Scikit-learn"],
    },
    {
      id: 7,
      title:
        "Searching for similar objects across videos using CNNs, encoders and Vector Database",
      description:
        "Generated embeddings of objects detected from YouTube videos by Faster RCNN by training an autoencoder on MS COCO dataset objects and stored them in PostgreSQL vector Database. Used object images from internet to search for similar objects in the videos using vector similarity calculations.",
      techStack: ["PyTorch", "PGVector"],
    },
    {
      id: 8,
      title:
        "Optimizing cross-domain adaptability of Low parameter Language Models through prefix tuning",
      description:
        "Applied parameter-efficient prefix tuning to the T5-large model, achieving over 90% accuracy on cross-domain sentiment analysis tasks, including IMDB, FinancialPhrasebank, and Twitter, tweaking less than 1% of the model’s parameters. We highlighted that it's performance is comparable to the fully fine-tuned model Flan-T5 on a variety of sentiment analysis tasks.",
      techStack: ["HuggingFace", "PyTorch"],
    },
    {
      id: 9,
      title:
        "Scenario Analysis of Nasdaq Tech-100 Index using Long Short Term Memory(LSTM) networks.",
      description:
        "Trained a LSTM model to predict the trajectory and value of Nasdaq Tech-100 Index under various scenarios like interest rate hike/drop, increase/decrease in market volatility, strengthening/weakening of US dollar, layoffs, etc.",
      techStack: ["PyTorch", "Pandas", "Scikit-learn"],
    },
    {
      id: 10,
      title: "Visualizing Running data using heat-map augmented trajectory map",
      description:
        "Augmented Heart rate and Speed as heatmap into running trajectory maps. This helps analyze the performance of the athlete at specific locations in their trajectory as well as compare it with their strategy.",
      techStack: ["Folium", "Pandas", "GPXPY"],
    },
    {
      id: 11,
      title:
        "Distributed Processing and Insights Generation from NYC Taxi Data",
      description:
        "Leveraged PySpark on a distributed Hadoop cluster to perform large-scale data cleaning and analysis of NYC taxi trip records. Identified and addressed data quality issues, and generated actionable insights.",
      techStack: ["Spark", "Python"],
    },
    {
      id: 12,
      title:
        "Evaluation of Development Data Deprivation Across Country Income Levels",
      description:
        "Analyzed Development Data availability across distinct national income groups by utilizing the World Development Indicators (WDI) dataset, and identified discernible trends pointing to heightened data deprivation in low-income countries in critical development domains.",
      techStack: ["Spark", "Python", "Pandas"],
    },
  ],
  display: true,
};

export default projectSection;

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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  projectSection,
};
