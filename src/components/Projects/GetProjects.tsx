import portfolioImage from '../../assets/portfolio.png';
import portfolioImageMobile from '../../assets/project-portfolio-mobile.png';
import pokememImage from '../../assets/poke-mem.png';
import pokememImageMobile from '../../assets/poke-mem-mobile.png';
import cvProjectImage from '../../assets/cv-project.png';
import cvProjectImageMobile from '../../assets/cv-mobile.png';
import battleshipImage from '../../assets/battleship.png';
import miniMessageBoardImage from '../../assets/mini-message-board.png';
import miniMessageBoardImageMobile from '../../assets/mini-message-board-mobile.png';

export default function GetProjects() {
  const data = [
    {
      image: miniMessageBoardImage,
      imageMobile: miniMessageBoardImageMobile,
      title: 'Mini Message Board',
      desc: 'This website is a project within the Odin Project. This website allowed me to strengthen my concepts of express and routing. This website takes in user input within the forms page and once submitted, adds the new form information into the posts collection which is displayed on the home page.',
      tech: ['Express', 'Tailwindcss', 'EJS'],
      website: 'https://mini-message-board-production-b121.up.railway.app/',
      code: 'https://github.com/ealvara6/mini-message-board',
    },
    {
      image: portfolioImage,
      imageMobile: portfolioImageMobile,
      title: 'Project Portfolio',
      desc: "As part of the Odin Project course, I created a portfolio website to display the work that I've done through my journey as a web developer. I utilize modern technologies such as Styled Components and Typescript to create my website, and I will continue updating my portfolio as I create many more projects to sharpen my skills.",
      tech: ['React', 'Styled Components', 'Vite', 'Typescript'],
      website: 'https://portfolio-sepia-tau-77.vercel.app/',
      code: 'https://github.com/ealvara6/portfolio',
    },
    {
      image: pokememImage,
      imageMobile: pokememImageMobile,
      title: 'Poke-Mem',
      desc: 'This project is part of the Odin Project full-stack web development course. I utilized the PokeAPI to fetch pokemon data inside of the useEffect hook. Poke-Mem is a memory card game that lets you choose between Pokemon generations 1-5. A set of pokemon are displayed, and you must click on each pokemon once to advance to the next level.',
      tech: ['react', 'Vite', 'SASS', 'pokeapi'],
      website: 'https://poke-mem-xi.vercel.app/',
      code: 'https://github.com/ealvara6/Poke-Mem',
    },
    {
      image: cvProjectImage,
      imageMobile: cvProjectImageMobile,
      title: 'CV Project',
      desc: 'This project is part of the Odin Project full-stack web development course. I coded this project with the main purpose of solidifying my knowledge in using usestate to update affected components. It is a simple CV template that allows users to input their information onto a template.',
      tech: ['react', 'SASS', 'Jest'],
      website: 'https://cv-project-alpha.vercel.app/',
      code: 'https://github.com/ealvara6/cv-project',
    },
    {
      image: battleshipImage,
      imageMobile: battleshipImage,
      title: 'Battleship',
      desc: 'This project is based on the popular board game Battleship. The user places their ships onto their game board before the game starts and faces off against an AI that randomly targets the players board after each turn. The main purpose of this project was to practice using the Jest testing framework to minimize the number of bugs in my application.',
      tech: ['javascript', 'Jest', 'SASS', 'Object Oriented Classes'],
      website: 'https://battleship-eight.vercel.app/',
      code: 'https://github.com/ealvara6/battleship',
    },
  ];

  return data;
}
