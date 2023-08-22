import { Link } from 'react-router-dom';
import { v4 as uuid4 } from 'uuid';
import { NavLink } from '../Link/Link.styles';
import homeIcon from '../../assets/home.png';
import aboutIcon from '../../assets/user.png';
import projectIcon from '../../assets/html.png';
import resumeIcon from '../../assets/cv.png';

export default function getNavLinks() {
  const links = [
    {
      img: homeIcon,
      text: 'Home',
      path: '/',
    },
    {
      img: aboutIcon,
      text: 'About',
      path: 'about',
    },
    {
      img: projectIcon,
      text: 'Projects',
      path: '/projects',
    },
    {
      img: resumeIcon,
      text: 'Resume',
      path: 'resume',
    },
  ];

  return (
    <>
      {links.map((item) => (
        <NavLink as={Link} key={uuid4()} to={item.path}>
          <img src={item.img} alt={item.text} />
          <div>{item.text}</div>
        </NavLink>
      ))}
    </>
  );
}
