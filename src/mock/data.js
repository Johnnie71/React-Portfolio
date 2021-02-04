import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Johnnie G | Developer ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Johnnie',
  subtitle: 'Full stack software engineer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hello! I am a fullstack software engineer with experience in Ruby, Ruby on Rails, JavaScript, React.js. Currently Learning React Native to further my knowledge for mobile OS applications.',
  paragraphTwo:
    'With a background in architectural design my passion for sustainability has driven me to programming. In todays climate I feel it is important to lead by example and help accelerate the push towards green energy. Helping others access around the world acces such vital information',
  paragraphThree:
    'Learning new material on my own time has significantly broadened my creative space in and out of programming. 😀',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'EcoShareShot.png',
    title: 'Eco Share',
    info:
      'A fun, interactive social media web application. Where creatives from all over the world can come together and share their eco-friendly designs.',
    info2:
      'Utilized Ruby on Rails, Active Record for data relationships. JavaScript, React, Redux for state management in frontend',
    url: 'https://www.loom.com/share/ee145a72b8194b0e9d97a46a46315bdf',
    repo: 'https://github.com/Johnnie71/eco-designs-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'EZTaskShot.png',
    title: 'E-Z Task',
    info: 'A clean and simple single-page application where users can view/create task notes',
    info2: 'Utilized Ruby on Rails, Active Record in backend. Vanilla JavaScript in frontend',
    url: 'https://www.loom.com/share/00d67a6c4a7c4d5b9d67fd5ff7fcd8c9',
    repo: 'https://github.com/Johnnie71/EZ-Task-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'avatarScreenShot.png',
    title: 'Adventures of Avatar',
    info: 'Fun Interactive Ruby CLI game that a user can explore the world of Pandora',
    info2:
      'Utilized Ruby on Rails, and Active Record to access a Sqlite3 Database for easy table relationships',
    url: 'https://www.loom.com/share/22b9f38a28494df081c97334847273c0',
    repo: 'https://github.com/Johnnie71/ruby-project-guidelines-nyc01-seng-ft-082420/tree/JohnnieG', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'johnnie.agonz71@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/intent/user?screen_name=Johnnieg71',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@johnnie.agonz71',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/johnnie-gonzalez71/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Johnnie71',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
