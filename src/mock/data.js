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
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I\'m currently a computer science student with a minor in math at the University of Guelph graduating in 2021. I have been programming for 7 years and have amassed a wide skillset thus far. I have experience programming in a multitude of languages and frameworks.',
  paragraphTwo: 'I love both back-end and front-end programming and I have a passion for using my critical thinking skills to solve challeging problems. I love learning and I am always striving to extract as much knowledge as possible from any experience I get. I am also a very curious person who has many interests outside of just programming.',
  paragraphThree: 'If you want a more in depth look at my life, click below...',
};

export const timelinesData = [
  {
    id: nanoid(),
    time: '1998-2015',
    heading: 'Humble Beginnings',
    img: 'Sauag.jpg',
    description: 'I was born in Mississauga, Canada to two Bengali parents. In my childhood I had many passions. I grew up most of my life playing rep hockey and always had an affinity for all sports, especially basketball. I also like to consider myself an artsy person as I have always had a big appreciation for things such as film and music. These are some of the things that have shaped me into the person I would become.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'June 2016',
    heading: 'Graduated Highchool',
    img: 'MHS.jpg',
    description: 'I graduated Meadowvale Secondary School with an 88% average and a new found love for developing software thanks to my wonderful computer science teacher, who had given me the base for programming that I have built all of my skills from today. She helped me find a new passion, where I would even work on projects myself. In grade 12, a friend of mine and I built a "Who Wants to be a Millionaire" game using Python from scratch. I finished with a 93% and 91% in her classes in grade 11 and 12, leading me to pursue a career in this field.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'September 2016',
    heading: 'Started at University of Guelph',
    img: 'Johnston-hall.jpg',
    description: 'I attribute much of my knowledge in programming to the University of Guelph. At my time at the Univeristy so far I have learned many aspects of computing and software development. I took many valuable classes that have taught me things such as Object-Oriented Programming, Data Structures, Algorithms, Data Science and Full Stack Web Development. I also decided to pursue a minor in mathematics to expand my skillset and develop my strong critical thinking skills',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'May 2018',
    heading: 'Started Working at Kenna',
    img: 'Sussex.jpg',
    description: 'For my first work term I worked at Kenna, a marketing firm. Here, I gained critical knowledge in databases. Working with a lot of SQL, I wrote queries to pull information from a selection of different tables to create data reports for our clients. Much of my work there invloved learning and understanding SQL. My ability to quickly learn new skills came quite handy here as I was even trusted to run SQL lessons for various teams to teach them the basics. This was also my first exposure to more theoretical database topics as I was tasked to create an ER diagram for a procedure for the most used dashboard at the company. This was very helpful as it let others see where exactly all the data was coming from, and how it was calculated. The diagram is still used at the company today.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'May 2019',
    heading: 'First Work Term at Tulip',
    img: 'oneyork.jpg',
    description: 'This was my first go around at Tulip for a 4 month term. Tulip is a software company that focuses on creating a platform for retailers. Here is my programming knowledge really broke out. I learned countless knew skills and technologies such as how to use Docker, AWS, GCP, Cloud programming and more. My biggest takeaways from this work term was working on a CRUD service that injects data into a database and creating bulk requests to send all the data in one query. I also got to work on many different tasks invloving the Tulip API and learning how a modern API service is built from scratch and implemented into a full scale application. This was my first robust programming job and it gave me incredible experience going back to school that put me above my peers.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'January 2020',
    heading: 'Round 2 at Tulip',
    img: 'tulip.jpg',
    description: 'After my first term, I loved it so much I decided to return for another 8 month term at Tulip. This time, it was much easier to get my feet wet as I already had an understanding of the code base letting me hop right in. I worked on 2 main projects during this term. A CRUD service where I continued working on a newer, more efficient version of the service as well as a brand new project where I helped build a full-stack application from scratch. I further broadened my industry skills working on new things such as Nginx, GCP, Python scripts, Golang, Protobuf, Twig, Symphony and Guzzle. I was also able to get experience building a full scale application all the way from the API to the front end and seeing how everything works together. Outside of just technical skills, I also learned valuable lessons in the industry such as being one of the go-to people on a project, so if any issues ever arised related to the service I had to be able to explain how everything works to others who have not worked with it as much. Also, being treated as a full-timer, I was given critical tasks that taught me to work under pressure and finish tasks in a quick and efficient manner. That along with working on tasks with high implications across the company taught me to work with many people from various teams in order to make sure any significant change would still let all the services across the company work as intended.',
    count: incrementCount(),
  },
  {
    id: nanoid(),
    time: 'April 2020',
    heading: 'Graduating University of Guelph',
    img: 'gryphon.jpg',
    description: 'After my final semester at the University of Guelph I now have a very broad skillset that I have acquired through my work terms and school. I feel very prepared to take on the industry as I feel I am an asset to any company with my experience in many different parts of programming, as well as the intrapersonal skills I\'ve developed working in teams at UofG and in my Co-op. I am sad to close this chapter on my life but excited for what is in store for me going forward.',
    count: incrementCount(),
  },

];

// SKILLS DATA
export const skillsData = {
  skills: ''
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Kazimoto',
    info: 'A website built using React and Meteor for a company that retails car detailing products. The website is currently just a landing page but will later be fully developed into a full webstore.',
    info2: 'This website was my first real exposure to using React and I learned a lot about the framework by playing around with it here. The website also contains an emailJS server which lets the user fill out a message form and sends an email containing the message to the company email.',
    url: 'http://www.kazimoto.ca',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Sundial',
    info: 'This webapp lets you view the Sunshine List data for select provinces and you can manipulate the data to filter out what you want to see our make graphs to compare.',
    info2: 'This project was a group assingment for our Systems Design in Applications class at UofG. This app was built using React with a Javascript backend to scrape and parse the data. My job was mostly using react-vis to implement the visualizations using the data from the Sunshine lists',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Geanology App',
    info: 'This webapp lets you pass in GEDCOM files and then parses it to link family trees together and lets you view it. You can then see the family tree information such as a specific members descendants or anscestors, the number of members in a family, the number of members in a generation etc.',
    info2: 'This was my first full-stack web application made for the class Software Systems Devlopment and Integration. It was built with a C backend for parsing, a NodeJS server, a MySQL database and a Bootstrap frontend',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'VendorX',
    info: 'This is a Shopify integrated application using Ruby on Rails. Many stores never hold any inventory themselves, rather take an order from a customer, and then send that order to the vendors. This app will automate the process so as soon as an order is issued from a customer. The order will be parsed and exported into a csv file for each vendor, which will then be sent out to the specific products for each vendor.',
    info2: 'This was my first attempt at using Ruby on Rails as well as using API authentication such as OAuth2. So far the application only has the backend to parse out the order but the rest is still in progress.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Mattermost/Slack Bots',
    info: 'I have made a couple different messaging service related bots for a hackday at Tulip as well as for a school project. The first bot for slack was a very simple full-stack application that lets a user enter in HR-like questions into the system with pre-canned answers. This way, whenever a new employee has a FAQ, they can ask the HR-bot rather than having to ask someone all the time. The second application was to send everyone invloved in a meeting a notification for the meeting with the time, room, meeting link and members to remind them that they have a meeting coming up',
    info2: 'The first bot using Slack was a much more simple concept, but it was built with a fully functioning backend and database using NodeJS and MongoDB which made it good exposure for the complete full-stack experience. The Mattermost bot was made using the Google Calender API and Python to parse out all the meetings and then send a hook containing all the data to Mattermost.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact me if you would like to know more!',
  btn: 'Contact Me',
  email: 'samirhaq031@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
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
