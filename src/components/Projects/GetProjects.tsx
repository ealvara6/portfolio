import portfolioImage from '../../assets/portfolio.png';
import portfolioImageMobile from '../../assets/project-portfolio-mobile.png';
import pokememImage from '../../assets/poke-mem.png';
import pokememImageMobile from '../../assets/poke-mem-mobile.png';
import cvProjectImage from '../../assets/cv-project.png';
import cvProjectImageMobile from '../../assets/cv-mobile.png';
import battleshipImage from '../../assets/battleship.png';

export default function GetProjects() {
  const data = [
    {
      image: portfolioImage,
      imageMobile: portfolioImageMobile,
      title: 'Project Portfolio',
      desc: "As part of the Odin Project course, I created a portfolio website to display the work that I've done through my journey in becoming a web developer. I utilize modern technologies such as Styled Components and Typescript to create my website and I will continue updating my portfolio as I create many more projects to sharpen my skills.",
      tech: ['React', 'Styled Components', 'Vite', 'Typescript'],
      code: 'https://github.com/ealvara6/portfolio',
    },
    {
      image: pokememImage,
      imageMobile: pokememImageMobile,
      title: 'Poke-Mem',
      desc: 'This project is part of the Odin Project full stack web development course. I utilized the PokeAPI to fetch pokemon data inside of the useEffect hook. Poke-Mem is a memory card game that lets you choose between pokemon generations 1-5. a set of pokemon are displayed and you must click on each pokemon once to advance to the next level.',
      tech: ['react', 'Vite', 'SASS', 'pokeapi'],
      website: 'https://poke-mem-xi.vercel.app/',
      code: 'https://github.com/ealvara6/Poke-Mem',
    },
    {
      image: cvProjectImage,
      imageMobile: cvProjectImageMobile,
      title: 'CV Project',
      desc: 'This project is part of the Odin Project full stack web development course. I coded this project with the main purpose of solidifying my knowledge in using usestate to update affected components. It is a simple CV template that allows users to input their information onto a template.',
      tech: ['react', 'SASS', 'Jest'],
      website: 'https://cv-project-gbnhh68zc-ealvara6.vercel.app/',
      code: 'https://github.com/ealvara6/cv-project',
    },
    {
      image: battleshipImage,
      imageMobile: battleshipImage,
      title: 'Battleship',
      desc: 'This project is based off of the popular boardgame Battleship. The user places their ships onto their game board before the game starts and faces off against an AI that randomly targets the players board after each turn. The main purpose of this project was to practice using the Jest testing framework to minimize the amount of bugs in my application.',
      tech: ['javascript', 'Jest', 'SASS', 'Object Oriented Classes'],
      website: 'https://battleship-hcq6yae9j-ealvara6.vercel.app/',
      code: 'https://github.com/ealvara6/battleship',
    },
  ];

  return data;
}
