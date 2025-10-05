//Store House
const greetings = [  
  "• Welcome",         
  "• Hola",       
  "• Bonjour",          
  "• ようこそ",           
  "• Willkommen",      
  "• Benvenuto",       
  "• أهلاً وسهلاً",              
  "• 환영합니다",        
  "• आपका स्वागत है",       
] 

 const data = [
   {
       name:'Home',
       link:'/'
   },
   {
       name:'Works',
       link:'/works',
   },
   {
       name:'About',
       link:'/about',
   },
   {
       name:'Contact',
       link:'/contact'
   }
]

const socials = [
  {
    name:'Github',
    link:"https://github.com/LuckyBaliyan"
  },
  {
    name:'Linkdin',
    link:'https://www.linkedin.com/in/lucky-baliyan-67b487299/'
  },
  {
    name:"Instagram",
    link:'https://www.instagram.com/luckybaliyan3507/',
  },
  {
    name:'Youtube',
    link:'https://www.youtube.com/@j__o__k__e__r'
  },
]

const expertise = [
  {
    title: "Website Design & Development",
    content:
      "I build high-performing, responsive websites that blend aesthetics with functionality, ensuring seamless user experiences and measurable business results.",
  },
  {
    title: "UX/UI Design",
    content:
      "I craft intuitive and user-centric interfaces backed by research, delivering designs that feel effortless to use and keep users engaged.",
  },
  {
    title: "Brand Identity Design",
    content:
      "I create bold and cohesive brand identities that communicate your values clearly, leaving a lasting impression across digital and print mediums.",
  },
  {
    title: "Motion Animation",
    content:
      "I design sleek, purposeful animations that bring products and interfaces to life, guiding user attention and making interactions memorable.",
  },
  {
    title: "Landing Page Design",
    content:
      "I specialize in conversion-focused landing pages with compelling visuals and persuasive layouts that maximize lead generation and sales.",
  },
  {
    title: "Mobile App Design",
    content:
      "I design modern, scalable mobile app interfaces that prioritize usability, accessibility, and delight, ensuring users return again and again.",
  },
];


  const latest = [
  {
    id:1,
    Title: "Davinchi",
    img: "/images/gf.webp",
    video: "",
    imges: [],
    stack: [],
    link:null,
    status: "Not active",
    github: "https://github.com/LuckyBaliyan/AI_IMAGE_GENERATOR.git",
    para:
      "An AI-powered image generator that creates high-quality visuals quickly and efficiently.",
    content:
      "Davinchi is an advanced AI-based image generator that converts text prompts into unique, high-resolution visuals, designed with a focus on performance, reliability, and accessibility. I optimized the system with efficient model handling, asynchronous data flows, and caching to ensure users get results in real time without delays. The platform is fully responsive, featuring a modern and minimal UI that adapts seamlessly across devices, and I implemented lazy loading and error-handling strategies to enhance stability when handling heavy image outputs. This project strengthened my skills in integrating AI models with web applications, managing computationally intensive tasks, and designing systems that remain fast and intuitive under load. More importantly, it allowed me to refine the balance between complex back-end processes and a user-friendly interface. The impact of Davinchi lies in enabling designers, creators, and businesses to generate visuals instantly, making creative workflows faster and more accessible. This project showcases my ability to combine AI, optimization techniques, and polished front-end design into a real-world solution with significant practical value.",
  },
  {
    id:2,
    Title: "Luxora",
    img: "/images/p3 (1).webp",
    video: "",
    imges: [],
    stack: [],
    link: "https://luxora-frontend-rust.vercel.app/",
    status: "Live",
    github: "https://github.com/LuckyBaliyan/Brainwave_Matrix_Intern.git",
    para:
      "A luxury-focused MERN stack e-commerce platform designed for premium clothing brands.",
    content:
      "Luxora is a full-stack MERN e-commerce application crafted for premium clothing brands, developed with the goal of delivering a high-end, luxury shopping experience to customers. The platform features advanced payment integration through Razorpay, support for cash-on-delivery, and real-time order tracking, giving users full transparency throughout their shopping journey. To elevate the user experience, I implemented Lenis for smooth scrolling and designed a clean, modern interface that emphasizes the exclusivity of the brand’s products. The system is fully responsive, optimized with lazy loading, API call optimization, and MongoDB indexing to handle performance at scale. Building Luxora allowed me to gain practical experience in developing secure transactions, building scalable architectures, and creating reliable order management systems. I also learned to refine the UI/UX flow so that every detail, from product discovery to checkout, feels seamless and intuitive. The impact of Luxora lies in how it combines business-ready features with polished design, showcasing my ability to deliver end-to-end solutions that not only work technically but also resonate with customers by driving trust, engagement, and loyalty.",
  },
  {
    id:3,
    Title: "Reimagine",
    img: "/images/p4.webp",
    video: "",
    imges: [],
    stack: [],
    link: "https://anime-reimagine.vercel.app/",
    status: "Live",
    github: "https://github.com/LuckyBaliyan/AnimeReimagine.git",
    para:
      "An anime-inspired animated website with immersive GSAP-driven transitions.",
    content:
      "Reimagine is a fully responsive, anime-inspired interactive website built to push the boundaries of front-end design and animation. The platform uses GSAP for timeline-driven animations, clipPath morphing for advanced shape transitions, and card tilt effects that make the interface more dynamic and engaging. To ensure a seamless first impression, I created a custom website loader, and I structured the code using reusable components for scalability and maintainability. Performance was a key focus, so I carefully optimized animation sequences and implemented lazy rendering to keep the experience smooth even with heavy motion. Developing Reimagine deepened my knowledge of creating immersive, animated user experiences while ensuring cross-device compatibility and fast loading speeds. It also gave me the opportunity to refine my creative problem-solving approach by balancing artistic animations with performance constraints. The impact of Reimagine is its ability to capture attention and tell stories in a way that feels alive and interactive, making it a showcase of my ability to blend technical expertise with creativity to deliver memorable, high-quality digital experiences.",
  },
  {
    id:4,
    Title: "Times Global",
    img: "/images/m4.webp",
    video: "",
    imges: [],
    stack: [],
    link: "https://api-projects-two.vercel.app/",
    status: "Live",
    github: "https://github.com/LuckyBaliyan/API_Projects.git",
    para:
      "A dynamic news portal with real-time search and smooth user interactions.",
    content:
      "Times Now Roman is a modern and interactive news portal designed with a clean, accessible UI/UX and powered by live API integrations using vanilla JavaScript. The platform allows users to instantly search and filter news articles, creating an engaging and responsive reading experience. To make browsing more enjoyable, I implemented smooth scrolling with Lenis and interactive animations using ScrollTrigger, synced seamlessly with the scroll behavior. The portal is fully responsive and optimized for fast data fetching, efficient rendering, and accessibility across devices. While building this project, I gained hands-on experience with API integration, managing asynchronous requests, and designing scalable front-end systems without frameworks. I also learned to fine-tune animations and layouts to keep the platform lightweight while enhancing user engagement. The impact of Times Now Roman lies in making news consumption interactive and fun, whether used for college updates, city-level portals, or larger audiences. This project demonstrates my ability to merge practical information systems with engaging design, showcasing both my technical depth and UI/UX sensibility.",
  },
  {
    id:5,
    Title: "Nexa Bridge",
    img: "/images/pl.jpg",
    video: "",
    imges: [],
    stack: [],
    link: "https://nexa-bridge-dun.vercel.app/",
    status: "under development",
    github: "https://github.com/LuckyBaliyan/NexaBridge.git",
    para:
      "An alumni-student connectivity platform with mentorship, jobs, and community features.",
    content:
      "Nexa Bridge is a feature-rich alumni-student connectivity platform designed to foster meaningful relationships, mentorship, and career opportunities within educational communities. It includes separate dashboards for students, alumni, and administrators, each equipped with tailored functionalities such as mentorship programs, community postings, job and internship boards, donations, chats, and even video calls for real-time interactions. The platform is built to be fully responsive and scalable, capable of handling multiple roles and large user bases without sacrificing performance. In developing Nexa Bridge, I focused on implementing role-based access control, integrating real-time communication tools, and ensuring data security across different modules. I also optimized the system for scalability, enabling smooth communication and interaction even with high traffic. This project significantly improved my ability to design and manage complex full-stack architectures while working on socially impactful features that can bring real-world value. The impact of Nexa Bridge lies in enabling students to seek guidance, alumni to give back, and institutions to maintain strong networks, demonstrating my capability to build systems that combine technical strength with long-term community impact.",
  },
];

const stacks = [
  {
    id:0,
    name:'Html',
    img:'/images/html.svg',
    col:'#FE6D00'
  },
  {
    id:1,
    name:'Css',
    img:'/images/css.svg',
    col:''
  },
  {
    id:2,
    name:'Js',
    img:'images/js.svg',
    col:''
  },
  {
    id:3,
    name:'tailwindcss',
    img:'images/tailwind.svg',
    col:''
  },
  { id: 4, name: "Express", img: "images/express-js.png",
    col:''
   },
  {
    id:5,
    name:'Node',
    img:'/images/node.png',
    col:'#78CB65'
  },
    {
    id:1,
    name:'Css',
    img:'/images/css.svg',
    col:''
  },
  { id: 7, name: "Mongoose", img: "images/MongoDB.svg",
    col:''
   },
  { id: 8, name: "Java", img: "images/java.svg",
    col:''
   },
  { id: 9, name: "Python", img: "images/Python.svg" ,
    col:''
  },
  {
    id:6,
    name:'React',
    img:'images/react.png',
    col:'#78CB65'
  },
  { id: 11, name: "GSAP", img: "images/gsap.svg",
    col:''
   },
  { id: 12, name: "Git", img: "images/git.svg",
    col:''
   },
   {
    id:13,
    name:'Html',
    img:'/images/html.svg',
    col:'#FE6D00'
  },
  {
    id:14,
    name:'Css',
    img:'/images/css.svg',
    col:''
  },
  {
    id:15,
    name:'Js',
    img:'images/js.svg',
    col:''
  },
  {
    id:16,
    name:'tailwindcss',
    img:'images/tailwind.svg',
    col:''
  },
  { id: 17, name: "Express", img: "images/express-js.png",
    col:''
   },
  {
    id:18,
    name:'Node',
    img:'/images/node.png',
    col:'#78CB65'
  },
    {
    id:19,
    name:'React',
    img:'images/react.png',
    col:'#78CB65'
  },
  { id: 20, name: "Mongoose", img: "images/MongoDB.svg",
    col:''
   },
  { id: 21, name: "Java", img: "images/java.svg",
    col:''
   },
  { id: 22, name: "Python", img: "images/Python.svg" ,
    col:''
  },
  { id: 23, name: "C", img: "images/C2.svg",
    col:''
   },
  { id: 24, name: "GSAP", img: "images/gsap.svg",
    col:''
   },
  { id: 25, name: "Git", img: "images/git.svg",
    col:''
   },
  { id: 26, name: "Java", img: "images/java.svg",
  }

];


const allProjects = [
  {
    id:1,
    Title: "Davinchi",
    img: "/images/gf.webp",
    video: "/videos/Davinchi.mp4",
    imges: [
      { img: "/images/davinchi_1.png",},
      { img: "/images/davinchi_1.png",},
      { img: "/images/davinchi_2.png",}
    ],
    stack: ['Html','Css','JavaScript','hugging Face','git','vercel'],
    link:null,
    status: "Not active",
    github: "https://github.com/LuckyBaliyan/AI_IMAGE_GENERATOR.git",
    para:
      "An AI-powered image generator that creates high-quality visuals quickly and efficiently.",
    content:
      "Davinchi is an advanced AI-based image generator that converts text prompts into unique, high-resolution visuals, designed with a focus on performance, reliability, and accessibility. I optimized the system with efficient model handling, asynchronous data flows, and caching to ensure users get results in real time without delays. The platform is fully responsive, featuring a modern and minimal UI that adapts seamlessly across devices, and I implemented lazy loading and error-handling strategies to enhance stability when handling heavy image outputs. This project strengthened my skills in integrating AI models with web applications, managing computationally intensive tasks, and designing systems that remain fast and intuitive under load. More importantly, it allowed me to refine the balance between complex back-end processes and a user-friendly interface. The impact of Davinchi lies in enabling designers, creators, and businesses to generate visuals instantly, making creative workflows faster and more accessible. This project showcases my ability to combine AI, optimization techniques, and polished front-end design into a real-world solution with significant practical value.",
    Date:'2025'
  },
  {
    id:2,
    Title: "Luxora",
    img: "/images/p3 (1).webp",
    Date:'2025',
    video: "/videos/luxora.mp4",
    imges: [
      { img: "/images/luxora_1.png",},
      { img: "/images/luxora_2.png",},
      { img: "/images/luxora_4.png",},
      { img: "/images/luxora_3.png",},
      { img: "/images/luxora_5.png",},
      { img: "/images/luxora_6.png",},
      { img: "/images/luxora_7.png",},
      { img: "/images/luxora_8.png",},
      { img: "/images/luxora_9.png",},
      { img: "/images/luxora_10.png",},
      { img: "/images/luxora_11.png",},
      { img: "/images/luxora_4.png",},
    ],
    stack: ['html','tailwind css','react','node','express','lenis','mongo db','jwt','git','stripe','cloudinary','react-toastify','vercel'],
    link: "https://luxora-frontend-rust.vercel.app/",
    status: "Live",
    github: "https://github.com/LuckyBaliyan/Brainwave_Matrix_Intern.git",
    para:
      "A luxury-focused MERN stack e-commerce platform designed for premium clothing brands.",
    content:
      "Luxora is a full-stack MERN e-commerce application crafted for premium clothing brands, developed with the goal of delivering a high-end, luxury shopping experience to customers. The platform features advanced payment integration through Razorpay, support for cash-on-delivery, and real-time order tracking, giving users full transparency throughout their shopping journey. To elevate the user experience, I implemented Lenis for smooth scrolling and designed a clean, modern interface that emphasizes the exclusivity of the brand’s products. The system is fully responsive, optimized with lazy loading, API call optimization, and MongoDB indexing to handle performance at scale. Building Luxora allowed me to gain practical experience in developing secure transactions, building scalable architectures, and creating reliable order management systems. I also learned to refine the UI/UX flow so that every detail, from product discovery to checkout, feels seamless and intuitive. The impact of Luxora lies in how it combines business-ready features with polished design, showcasing my ability to deliver end-to-end solutions that not only work technically but also resonate with customers by driving trust, engagement, and loyalty.",
  },
  {
    id:3,
    Title: "Reimagine",
    img: "/images/p4.webp",
    Date:'2025',
    video: "/videos/reimagine.mp4",
    imges: [{img:"/images/reimagine_1.png"},
      {img:"/images/reimagine_2.png"},
      {img:"/images/reimagine_3.png"},
      {img:"/images/reimagine_4.png"},
      {img:"/images/reimagine_5.png"},
      {img:"/images/reimagine_6.png"},
      {img:"/images/reimagine_7.png"},
    ],
    stack: ['Html','tailwind css','react','gsap','Scroll Trigger','lenis','git','vercel'],
    link: "https://anime-reimagine.vercel.app/",
    status: "Live",
    github: "https://github.com/LuckyBaliyan/AnimeReimagine.git",
    para:
      "An anime-inspired animated website with immersive GSAP-driven transitions.",
    content:
      "Reimagine is a fully responsive, anime-inspired interactive website built to push the boundaries of front-end design and animation. The platform uses GSAP for timeline-driven animations, clipPath morphing for advanced shape transitions, and card tilt effects that make the interface more dynamic and engaging. To ensure a seamless first impression, I created a custom website loader, and I structured the code using reusable components for scalability and maintainability. Performance was a key focus, so I carefully optimized animation sequences and implemented lazy rendering to keep the experience smooth even with heavy motion. Developing Reimagine deepened my knowledge of creating immersive, animated user experiences while ensuring cross-device compatibility and fast loading speeds. It also gave me the opportunity to refine my creative problem-solving approach by balancing artistic animations with performance constraints. The impact of Reimagine is its ability to capture attention and tell stories in a way that feels alive and interactive, making it a showcase of my ability to blend technical expertise with creativity to deliver memorable, high-quality digital experiences.",
  },
  {
    id:4,
    Title: "Times Global",
    img: "/images/m4.webp",
    Date:'2025',
    video: "/videos/times.mp4",
    imges: [{img:"/images/times_1.jpg"},{img:"/images/times_2.jpg"},{img:"/images/times_3.jpg"},{img:"/images/times_1.jpg"},{img:"/images/times_2.jpg"},{img:"/images/times_3.jpg"},],
    stack: ['html','css','javaScript','Rest Api','gsap','scroll trigger','lenis','git','vercel'],
    link: "https://api-projects-two.vercel.app/",
    status: "Live",
    github: "https://github.com/LuckyBaliyan/API_Projects.git",
    para:
      "A dynamic news portal with real-time search and smooth user interactions.",
    content:
      "Times Now Roman is a modern and interactive news portal designed with a clean, accessible UI/UX and powered by live API integrations using vanilla JavaScript. The platform allows users to instantly search and filter news articles, creating an engaging and responsive reading experience. To make browsing more enjoyable, I implemented smooth scrolling with Lenis and interactive animations using ScrollTrigger, synced seamlessly with the scroll behavior. The portal is fully responsive and optimized for fast data fetching, efficient rendering, and accessibility across devices. While building this project, I gained hands-on experience with API integration, managing asynchronous requests, and designing scalable front-end systems without frameworks. I also learned to fine-tune animations and layouts to keep the platform lightweight while enhancing user engagement. The impact of Times Now Roman lies in making news consumption interactive and fun, whether used for college updates, city-level portals, or larger audiences. This project demonstrates my ability to merge practical information systems with engaging design, showcasing both my technical depth and UI/UX sensibility.",
  },
  {
    id:5,
    Title: "Nexa Bridge",
    img: "/images/pl.jpg",
    Date:'2025',
    video: "/videos/Nexa.mp4",
    imges: [{img:'/images/nexa_2.png'},{img:'/images/nexa_3.png'},{img:'/images/nexa_7.png'},
      {img:'/images/nexa_5.png'},{img:'/images/nexa_6.png'},{img:'/images/nexa_1.png'},{img:'/images/nexa_8.png'},
      {img:'/images/nexa_9.png'},{img:'/images/nexa_10.png'},{img:'/images/nexa_11.png'},
    ],
    stack: ['html','tailwind css','react','framer motion','gsap','jwt','node','typeScript','express','mongo db','cloudinary','Razorpay','stripe',
      'react toastify','git','vercel'],
    link: "https://nexa-bridge-dun.vercel.app/",
    status: "under development",
    github: "https://github.com/LuckyBaliyan/NexaBridge.git",
    para:
      "An alumni-student connectivity platform with mentorship, jobs, and community features.",
    content:
      "Nexa Bridge is a feature-rich alumni-student connectivity platform designed to foster meaningful relationships, mentorship, and career opportunities within educational communities. It includes separate dashboards for students, alumni, and administrators, each equipped with tailored functionalities such as mentorship programs, community postings, job and internship boards, donations, chats, and even video calls for real-time interactions. The platform is built to be fully responsive and scalable, capable of handling multiple roles and large user bases without sacrificing performance. In developing Nexa Bridge, I focused on implementing role-based access control, integrating real-time communication tools, and ensuring data security across different modules. I also optimized the system for scalability, enabling smooth communication and interaction even with high traffic. This project significantly improved my ability to design and manage complex full-stack architectures while working on socially impactful features that can bring real-world value. The impact of Nexa Bridge lies in enabling students to seek guidance, alumni to give back, and institutions to maintain strong networks, demonstrating my capability to build systems that combine technical strength with long-term community impact.",
  },
   {
    id:6,
    Title: "Davinchi",
    img: "/images/gf.webp",
    video: "",
    imges: [],
    stack: [],
    link:null,
    status: "Not active",
    github: "https://github.com/LuckyBaliyan/AI_IMAGE_GENERATOR.git",
    para:
      "An AI-powered image generator that creates high-quality visuals quickly and efficiently.",
    content:
      "Davinchi is an advanced AI-based image generator that converts text prompts into unique, high-resolution visuals, designed with a focus on performance, reliability, and accessibility. I optimized the system with efficient model handling, asynchronous data flows, and caching to ensure users get results in real time without delays. The platform is fully responsive, featuring a modern and minimal UI that adapts seamlessly across devices, and I implemented lazy loading and error-handling strategies to enhance stability when handling heavy image outputs. This project strengthened my skills in integrating AI models with web applications, managing computationally intensive tasks, and designing systems that remain fast and intuitive under load. More importantly, it allowed me to refine the balance between complex back-end processes and a user-friendly interface. The impact of Davinchi lies in enabling designers, creators, and businesses to generate visuals instantly, making creative workflows faster and more accessible. This project showcases my ability to combine AI, optimization techniques, and polished front-end design into a real-world solution with significant practical value.",
    Date:'2025'
  },
  {
  id: 7,
  Title: "OCHI_DESIGN",
  img: "/images/ochi2.png",
  video: "/videos/ochi.mp4",
  imges:[{ img: '/images/ochi3.png' },
  { img: '/images/ochi4.png' },
  { img: '/images/ochi6.png' },
  { img: '/images/ochi5.png' },
  {
    img:'/images/ochi1.png'
  }
  ],
  stack: ["React", "Framer Motion", "Locomotive Scroll", "TailwindCSS", "Git", "Vercel", "HTML"],
  link: 'https://ochi-design-agency-one.vercel.app/',
  status: "Active",
  github: "https://github.com/LuckyBaliyan/ochiDesignAgency.git",
  para:
    "A modern design agency landing page built with smooth animations and prallax",
  content:
    "Ochi.design is a creative and interactive design agency landing page that blends performance with stunning motion design. The project showcases the power of Framer Motion for fluid animations and Locomotive Scroll for smooth, parallax-based scrolling experiences. I learned how to configure Locomotive Scroll effectively to achieve synchronized parallax effects and fine-tuned scroll-based animations for different sections. The layout was crafted with TailwindCSS for clean, responsive styling, ensuring the design adapts beautifully across devices. Through this project, I strengthened my ability to build visually engaging and high-performing websites that provide a premium user experience. Hosting was done on Vercel for fast deployment, and the codebase was maintained via Git for version control. Visionary represents my expertise in integrating animation frameworks with React to create experiences that feel both modern and cinematic.",
  Date: "2025"
 },
  {
    id:8,
    Title: "Reimagine",
    img: "/images/p4.webp",
    Date:'2025',
    video: "",
    imges: [],
    stack: [],
    link: "https://anime-reimagine.vercel.app/",
    status: "Live",
    github: "https://github.com/LuckyBaliyan/AnimeReimagine.git",
    para:
      "An anime-inspired animated website with immersive GSAP-driven transitions.",
    content:
      "Reimagine is a fully responsive, anime-inspired interactive website built to push the boundaries of front-end design and animation. The platform uses GSAP for timeline-driven animations, clipPath morphing for advanced shape transitions, and card tilt effects that make the interface more dynamic and engaging. To ensure a seamless first impression, I created a custom website loader, and I structured the code using reusable components for scalability and maintainability. Performance was a key focus, so I carefully optimized animation sequences and implemented lazy rendering to keep the experience smooth even with heavy motion. Developing Reimagine deepened my knowledge of creating immersive, animated user experiences while ensuring cross-device compatibility and fast loading speeds. It also gave me the opportunity to refine my creative problem-solving approach by balancing artistic animations with performance constraints. The impact of Reimagine is its ability to capture attention and tell stories in a way that feels alive and interactive, making it a showcase of my ability to blend technical expertise with creativity to deliver memorable, high-quality digital experiences.",
  },
  {
    id:9,
    Title: "Times Global",
    img: "/images/m4.webp",
    Date:'2025',
    video: "",
    imges: [],
    stack: [],
    link: "https://api-projects-two.vercel.app/",
    status: "Live",
    github: "https://github.com/LuckyBaliyan/API_Projects.git",
    para:
      "A dynamic news portal with real-time search and smooth user interactions.",
    content:
      "Times Now Roman is a modern and interactive news portal designed with a clean, accessible UI/UX and powered by live API integrations using vanilla JavaScript. The platform allows users to instantly search and filter news articles, creating an engaging and responsive reading experience. To make browsing more enjoyable, I implemented smooth scrolling with Lenis and interactive animations using ScrollTrigger, synced seamlessly with the scroll behavior. The portal is fully responsive and optimized for fast data fetching, efficient rendering, and accessibility across devices. While building this project, I gained hands-on experience with API integration, managing asynchronous requests, and designing scalable front-end systems without frameworks. I also learned to fine-tune animations and layouts to keep the platform lightweight while enhancing user engagement. The impact of Times Now Roman lies in making news consumption interactive and fun, whether used for college updates, city-level portals, or larger audiences. This project demonstrates my ability to merge practical information systems with engaging design, showcasing both my technical depth and UI/UX sensibility.",
  },
  {
    id:10,
    Title: "Nexa Bridge",
    img: "/images/pl.jpg",
    Date:'2025',
    video: "",
    imges: [],
    stack: [],
    link: "https://nexa-bridge-dun.vercel.app/",
    status: "under development",
    github: "https://github.com/LuckyBaliyan/NexaBridge.git",
    para:
      "An alumni-student connectivity platform with mentorship, jobs, and community features.",
    content:
      "Nexa Bridge is a feature-rich alumni-student connectivity platform designed to foster meaningful relationships, mentorship, and career opportunities within educational communities. It includes separate dashboards for students, alumni, and administrators, each equipped with tailored functionalities such as mentorship programs, community postings, job and internship boards, donations, chats, and even video calls for real-time interactions. The platform is built to be fully responsive and scalable, capable of handling multiple roles and large user bases without sacrificing performance. In developing Nexa Bridge, I focused on implementing role-based access control, integrating real-time communication tools, and ensuring data security across different modules. I also optimized the system for scalability, enabling smooth communication and interaction even with high traffic. This project significantly improved my ability to design and manage complex full-stack architectures while working on socially impactful features that can bring real-world value. The impact of Nexa Bridge lies in enabling students to seek guidance, alumni to give back, and institutions to maintain strong networks, demonstrating my capability to build systems that combine technical strength with long-term community impact.",
  }
];

const works = [
  {
    id:'1-0',
    video:'/videos/Davinchi.mp4',
    previewImg:'/images/gf.webp',
    name:'Davinchi',
    routes:1,
  },
  {
    id:'1-1',
    video:'/videos/luxora.mp4',
    previewImg:'/images/p3 (1).webp',
    name:'Luxora',
    routes:2,
  },
  {
    id:'1-2',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
    routes:3,
  },
  {
    id:'1-3',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
    routes:4,
  },
  {
    id:'2-0',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
  },
  {
    id:'2-1',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
  },
  {
    id:'2-2',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
  },
  {
    id:'3-0',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
  },
  {
    id:'3-1',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
  },
  {
    id:'3-2',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
  },
  {
    id:'3-3',
    video:'',
    previewImg:'/images/left-i.jpeg',
    name:'Project',
  }
];

const MyImages = [
  '/images/myImg.webp',
  '/images/my2.jpg',
  '/images/my1.jpg',
  '/images/myImg.webp',
  '/images/my2.jpg',
  '/images/my1.jpg',
]

export {greetings,data,socials,expertise,latest,stacks,allProjects,works,MyImages};