import { NavLink } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';
import { NavbarLink } from '../Link/Link.styles';
import homeIcon from '../../assets/home.png';
import aboutIcon from '../../assets/user.png';
import projectIcon from '../../assets/html.png';
import resumeIcon from '../../assets/cv.png';

export default function getNavLinks() {
  const links = [
    {
      img: homeIcon,
      text: 'Home',
      path: 'home',
    },
    {
      img: aboutIcon,
      text: 'About',
      path: 'about',
    },
    {
      img: projectIcon,
      text: 'Projects',
      path: 'projects',
    },
    {
      img: resumeIcon,
      text: 'Contact',
      path: 'contact',
    },
  ];

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {links.map((item) => (
        <NavbarLink key={uuid4()} onClick={() => handleClick(item.path)}>
          <img src={item.img} alt={item.text} />
          <div>{item.text}</div>
        </NavbarLink>
      ))}
    </>
  );
}
