import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nimit Kanani",
  initials: "NK",
  location: "Brooklyn, New York, United States",
  locationLink: "https://www.google.com/maps/place/Brooklyn,+NY",
  about:
    "AI @ NYU | BITS Pilani alumni",
  summary:
    "Machine Learning Engineer deeply passionate about using AI to solve complex problems.",
  avatarUrl: "https://gravatar.com/avatar/df292afa07c366f7749efb7a1323d7fa9bfd4bb396edde0ab0bd6d0a7d62fcb0",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "nimitmk7@gmail.com",
    tel: "+19293268815",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nimitmk7",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nimit-kanani/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/KananiNimit",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "New York University(NYU)",
      degree: "Masters's Degree in Computer Science",
      start: "September 2023",
      end: "May 2025",
    },
    {
      school: "Birla Institute of Technology and Science(BITS), Pilani",
      degree: "Bachelor of Engineering in Computer Science + Master of Science in Economics",
      start: "August 2016",
      end: "July 2021",
    },

  ],
  work: [
    {
      company: "Sov AI Research LLC",
      link: "https://sov.ai",
      badges: ["Large Language Models(LLMs)"],
      title: "Quantitative Developer Intern",
      start: "June 2024 - December 2024",
      end: "present",
      description: "● Developed a Python software package for extracting, parsing, and analyzing USPTO patent data, automating periodic data processing scripts to generate actionable insights. \n\● Trained a custom sentence transformer language model to map patent assignee organization names to stock market tickers, enhancing data linkage and market analysis."
    },
    {
      company: "New York University",
      link: "https://www.nyu.edu/",
      badges: ["Deep Learning"],
      title: "Graduate Research Assistant",
      start: "October 2023",
      end: "Feb 2024",
      description: "● Applied deep learning models to dynamically extract features from e-commerce webpages, for an NSF-funded research project at the  Visualization and Data Analytics(VIDA) lab."
    },
    {
      company: "Hevo Data Inc.",
      link: "https://hevodata.com",
      badges: ["ETL pipelines", "Java", "Apache Kafka", "Python"],
      title: "Software Engineer",
      start: "July 2021",
      end: "June 2023",
      description: " ● Streamlined billing/payments microservice to achieve scalability, low latency, and reliability, reducing the rate limiting errors from 1M/month to 0, and the number of billing issues per month by 50%, latency of API callsby 30%. \n\ ● Developed an on-demand credit feature allowing users to get extra usage for ETL pipelines as credit, eliminating 95% of cases of pipeline downtime due to usage exhaustion.\n\ ● Integrated dbt(data build tool) for advanced ELT data warehouse transformations in the product as a core member of a cross-functional team, to facilitate an end-to-end data solution for all customers.\n\ ● Implemented solutions for recurring issues in ELT data transformations related to failures, timeouts, scalability, and data mismatch, resulting in a 90% reduction in customer-reported technical issues.\n\ "
    },
    {
      company: "Hevo Data Inc.",
      link: "https://hevodata.com",
      badges: ["Backend"],
      title: "Software Engineering Intern",
      start: "July 2020",
      end: "June 2021",
      description: "● Resolved customer issues in ETL/ELT pipelines, oversaw application infra as part of on-call while collaborating with technical support and DevOps in a fast-paced, high-pressure environment. \n\ ● Built an admin panel application that provides finer control over the product configurations(pipeline, customer, infra settings) and application monitoring with built-in maker-checker and auditing, reducing the turnaround time of support tickets by 30%, thus increasing customer satisfaction."
    }
  ],
  skills: [
    "Java",
    "Python",
    "SQL",
    "Amazon Web Services(AWS)",
    "Apache Kafka",
    "Docker",
    "Hadoop",
    "Terraform", 
    "InfluxDB",
    "Kubernetes",
    "Redis",
    "Spark",
    "Snowflake",
    "Guice",
    "JUnit",
    "Huggingface",
    "Langchain",
    "Matplotlib",
    "NumPy",
    "OpenCV", 
    "Pandas",
    "Tensorflow",
    "Rest API", 
    "Spacy",
    "Github"
  ],
  projects: [
    {
      title: "Omnicode - A Cloud Based Coding Assistant",
      description: "Scalable, modular, and cost-effective VSCode extension powered by AWS, with 3 features: Code completion, Code refactoring, and Documentation Generation. \n\ It also features a personalized usage metrics dashboard.",
      techStack: [
        "AWS",
        "Python",
        "DynamoDB"
      ]
    },
    {
      title: "Optimizing cross-domain adaptability of Low parameter Language Models through prefix tuning",
      techStack:[
        "Huggingface",
        "Python",
      ],
      description: "Applied parameter-efficient prefix tuning to the T5-large model, achieving over 90% accuracy on cross-domain sentiment analysis tasks, including IMDB, Financial Phrasebank, and Twitter, tweaking less than 1% of the model’s parameters. \n\ We highlighted that it's performance is comparable to the fully fine-tuned model Flan-T5 on a variety of sentiment analysis tasks."
    },
    {
      title: "AI-Powered Photo Album on the Cloud with Natural Language Search",
      techStack: [
        "AWS",
        "Python",
        "ElasticSearch",
        "Terraform",
      ],
      description: "Created a photo album web application on the cloud, that can be searched using natural language text. \n\ \n\ The UI is a static website on S3, with 2 operations: \n\ 1. The user can add a photo along with their own custom labels. The image along with the labels is passed to an S3 bucket via API Gateway, and further processed by a Lambda function to get object recognition labels from the image using AWS Rekognition, and indexed in AWS OpenSearch. \n\ 2. Natural Language based photo Search: Upon receiving the request, Amazon Lex processes the request to fetch labels in the query, and fetches images with the given labels in the S3 bucket using AWS OpenSearch Indexes. \n\ All the code for the application is autodeployed from Github using AWS CodePipeline. The architecture is created and updated using AWS CloudFormation config files."
    },
    {
      title: "Supervised Finetuning of Llama 3.1-8B model for verifying the correctness of answers to Mathematical questions",
      techStack: [
        "Huggingface",
        "Python",
        "PyTorch"
      ],
      description: "Tuned the Llama 3.1-8B model using Performance Efficient Finetuning Technique(PEFT) LoRA(Low-Rank Adapation) to verify the correctness of answers to Mathematical questions, and achieved 85% accuracy."
    }, 
    {
      title: "Online Chatbot for Dining Suggestions", 
      description: "Developed a chatbot on AWS that takes in restaurant preferences from users, finds relevant restaurants and sends the recommendations in an email.",
      techStack: [
        "AWS",
        "Python",
        "DynamoDB",
        "ElasticSearch"
      ]
    },
    {
      title: "Scenario Analysis of Nasdaq Tech 100 Index using Long Short-Term Memory Network(LSTM)",
      techStack: [
        "PyTorch",
        "Pandas",
        "Matplotlib"
      ],
      description: "Built and trained an LSTM model on historical time-series data for the Nasdaq Tech 100 Index, using exogenous variables to predict the future trajectory of the index under various possible economic scenarios.",
      link: {
        label: "",
        href: "",
      }
    },
    {
      title: "Segmentation of sidewalks in satellite imagery by finetuning SAM",
      techStack: ["PyTorch", "OpenCV", "NumPy"],
      description:
      "Built an image segmentation model on top of the Segment Anything Model(SAM) to segment sidewalks in satellite images, and used Hidden Markov Models(HMM) to connect segments separated by Occlusion.",
      link: {
        label: "",
        href: "",
      }
    },
    {
      title: "Distributed Processing and Insights Generation from NYC Taxi Data",
      techStack: ["Apache Spark", "Pandas", "Hadoop"],
      description:
        " Leveraged PySpark on a distributed Hadoop cluster to perform large-scale data cleaning and analysis of NYC taxi trip records. Identified and addressed data quality issues, and generated actionable insights.",
      link: {
        label: "",
        href: "",
      }
    },
    {
      title: "Searching for similar objects across videos using CNNs and Vector Database",
      techStack: ["Postgres Vector Database", "PyTorch", "OpenCV"],
      description:
        "Generated embeddings of objects detected from YouTube videos by Faster RCNN by training an encoder on MS COCO dataset objects and used PostgreSQL vector database to search for similar objects across videos.",
      link: {
        label: "",
        href: "",
      }
    },
    {
      title: "Enhanced Multi-Object Trajectory Tracking in Drone Footage using Kalman Filters",
      techStack: ["PyTorch", "OpenCV"],
      description: "Trained YOLOv8 model on VisDrone dataset and leveraged Kalman filters to track the trajectory of cars, and bicycles in moving drone footage.",
      link: {
        label: "",
        href: "",
      }
   }, 
   {
    title: "Evaluation of Development Data Deprivation Across Country Income Levels",
    techStack: ["PySpark", "Hadoop"],
    description: "Analyzed Development Data availability across distinct national income groups by utilizing the World Development Indicators (WDI) dataset, and identified discernible trends pointing to heightened data deprivation in low-income countries in critical development domains.",
    link: {
      label: "",
      href: "",
    }
   }
  ],
} as const;
