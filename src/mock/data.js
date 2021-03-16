import { nanoid } from 'nanoid';

var count = 0;

function incrementCount() {
  count++;
  return count;
};

// HEAD DATA
export const headData = {
  title: 'Samir Haq - Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// NAVIGATION DATA
export const navigationData = {
  stuff: ''
};

// HERO DATA
export const heroData = {
  title: 'Hey all. I\'m',
  name: 'Samir',
  subtitle: 'A software engineer based in the Greater Toronto Area.',
  cta: '',
  resume: 'Samir_Haq_Resume.pdf',
};

// ABOUT DATA
export const aboutData = {
  img: 'samirhaq.png',
  paragraphOne: 'I\'m currently a computer science student with a minor in mathematics at the University of Guelph, graduating in April, 2021. I have been programming for 7 years and have amassed a wide skillset thus far. I have experience programming in a multitude of languages and frameworks.',
  paragraphTwo: 'I enoy both back-end and front-end programming and I have a passion for using my critical thinking skills to solve challeging problems. I love learning and I am always striving to extract as much knowledge as possible from any experience I get. I am also a very curious person who has many interests outside of just programming.',
  paragraphThree: 'If you want a more in depth look at my life, click below...',
};

export const timelinesData = [
  {
    id: nanoid(),
    time: '1998-2015',
    heading: 'Humble Beginnings',
    img: 'Sauag.jpg',
    description: 'I was born in Mississauga, Canada to two Bengali parents. Throughout my childhood I had a number of passions and hobbies. I grew up most of my life playing rep hockey and always had an affinity for all sports, especially basketball. I also like to consider myself an artistic person as I have always had a big appreciation for arts such as film and music. These are some of the things that have shaped me into the person I am today.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'June 2016',
    heading: 'Graduated Highchool',
    img: 'MHS.jpg',
    description: 'I graduated Meadowvale Secondary School with an 88% average and a newfound love for developing software, thanks to my wonderful computer science teacher. She had given me the base for programming in which I have built all of my skills from today. She helped me find a new passion, where I started to take on my own personal projects. In grade 12, a friend of mine and I built a "Who Wants to be a Millionaire" game using Python from scratch. I finished with a 93% and 91% in her classes in grade 11 and 12, leading me to pursue a career in this field.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'September 2016',
    heading: 'Started at University of Guelph',
    img: 'Johnston-hall.jpg',
    description: 'I attribute much of my knowledge in programming to the University of Guelph. During my time at the University so far I have developed a deep understanding in many aspects of computing and software development. I have taken several valuable classes that have taught me Object-Oriented Programming, Data Structures, Algorithms, Data Science, Full Stack Web Development, Cloud Computing, Computer Vision and much more. I also decided to pursue a minor in mathematics to expand my skillset and develop my strong critical thinking skills.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'May 2018',
    heading: 'Started Working at Kenna',
    img: 'Sussex.jpg',
    description: 'During my first work term, I worked at Kenna, a marketing firm. At Kenna I gained critical knowledge in databases. Working with a lot of SQL, I wrote queries to pull information from a selection of different tables to create data reports for our clients. Much of my work there involved learning and understanding SQL. My ability to quickly learn new skills came quite handy here as I was even trusted to run SQL lessons for various teams to teach them the basics. This was also my first exposure to more theoretical database topics as I was tasked to create an ER diagram for a procedure with the most used dashboard at the company. This was very helpful as it let others see exactly where all the data was coming from, and how it was calculated. The diagram is still used at the company today.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'May 2019',
    heading: 'First Work Term at Tulip',
    img: 'oneyork.jpg',
    description: 'For my second co-op, I worked a 4-month term at Tulip. Tulip is a software company that focuses on creating a platform for retailers. Here is where my programming knowledge really broke out. I learned countless knew skills and technologies such as how to use Docker, AWS, GCP, Cloud programming and more. My biggest takeaways from this work term were working on a CRUD service that injects data into a database and creating bulk requests to send all the data in one query. I also got to work on many diverse tasks involving the Tulip API, including learning how a modern API service is built from scratch and implemented into a full-scale application. This was my first robust programming job, and it gave me incredible experience going back to school that put me above my peers.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'January 2020',
    heading: 'Round 2 at Tulip',
    img: 'tulip.jpg',
    description: 'I enjoyed my first term with Tulip so much that I decided to return for another 8-month term. This time, it was much easier to get my feet wet as I already had an understanding of the code base and work environment. I worked on 2 main projects during this term. These included a CRUD service where I continued working on a newer, more efficient version of the service as well as a brand-new project where I helped build a full-stack application from scratch. I further broadened my industry skills by working with technologies such as Nginx, GCP, Python scripts, Golang, Protobuf, Twig, Symphony and Guzzle. I was also able to get experience building a full-scale application all the way from the API to the front end and seeing how everything works together. Outside of technical skills, I also expanded by communication skills by being one of the go-to people on a project, meaning if any issues arose related to the service I would explain how the system works to others who did not have experience with it. Also, being treated as a full-timer, I was given critical tasks that taught me to work under pressure and finish tasks in time efficient manner. Additionally, I worked on tasks that effected multiple divisions across the company, which taught me to work with various teams in order to ensure any significant change I made would not negatively affect other services or groups.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'April 2020',
    heading: 'Graduating University of Guelph',
    img: 'gryphon.jpg',
    description: 'After my final semester at the University of Guelph I now have a very broad skillset that I have acquired through my work terms and school. I am prepared to take on new roles within the industry as I feel I am an asset to any company with my experience in many different parts of programming, as well as the intrapersonal skills I\'ve developed working in teams at UofG and in my Co-op terms. I am sad to close this chapter on my life but excited for what is in store for me going forward.',
    count: incrementCount(),
  },

];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'kazimoto.jpg',
    title: 'Kazimoto',
    info: 'A landing page for a startup company based in Mississauga. The website was developed using ReactJS and has a built in email server that sends an automatic email to the owner when someone leaves a message on the page.',
    info2: 'Tech Stack: ReactJS, AJAX, JQuery',
    url: 'http://www.kazimoto.ca',
    repo: 'https://github.com/samirhaq/Kazimoto', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shopify-developers.jpg',
    title: 'VendorX',
    info: 'A Shopify integrated application using Ruby on Rails. Many stores never hold any inventory themselves, rather take an order from a customer, and then send that order to the vendors. This app will automate the process so as soon as an order is issued from a customer. The order will be parsed and exported into a CSV file for each vendor, which will then be sent out to the specific products for each vendor.',
    info2: 'Tech Stack: OAuth2, Ruby on Rails, Shopify API',
    url: '',
    repo: 'https://github.com/samirhaq/shopify-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'geanology.png',
    title: 'Geanology App',
    info: 'A webapp to let you pass in GEDCOM files and then parses it to link family trees together and lets you view it. You can then see the family tree information including, specific members, descendants or anscestors, the number of members in a family, the number of members in a generation etc. Built using an API written in C, along with a MySQL database and a NodeJS server. Uses Bootstrap and Express for the front-end framework.',
    info2: 'Tech Stack: C, NodeJS, ExpressJS, JQuery, Bootstrap, MySQL',
    url: '',
    repo: 'https://github.com/samirhaq/Geanology-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GoogleCalender.jpg',
    title: 'Mattermost Calender Bot',
    info: 'A Mattermost Bot built while working at Tulip, which sent reminders to attendees of meetings via direct message, one minute prior to their meeting. The message contains the room, attendees, and any possible meeting link.',
    info2: 'Tech Stack: Python, Google Calender API, GitLab scheduler, Mattermost API',
    url: '',
    repo: 'https://github.com/samirhaq', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fantasybasketball.png',
    title: 'In Progress: Fantasy Basketball Tool',
    info: 'I have developed a large passion for basketball, especially fantasy basketball, so I wanted to create a tool for 9 category fantasy that uses simple machine learning to identify your teams build. Including identifying your strengths and punts and matchup based suggestions. Based on this, using Yahoo! fantasy projections, or regular season stats, will suggest the best players to pickup either for your build, or for your weekly matchup. If you have any other suggestions to add, please contact me!',
    info2: 'Tech Stack: Yahoo Fantasy API, NodeJS, ReactJS',
    url: '',
    repo: 'https://github.com/samirhaq', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact me if you would like to work together!',
  btn: 'Contact Me',
  email: 'samirhaq031@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/samir-haq/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/samirhaq',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
