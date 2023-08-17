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
    },
    {
      img: aboutIcon,
      text: 'About',
    },
    {
      img: projectIcon,
      text: 'Projects',
    },
    {
      img: resumeIcon,
      text: 'Resume',
    },
  ];

  return (
    <>
      {links.map((item) => (
        <NavLink key={uuid4()}>
          <img src={item.img} alt={item.text} />
          <div>{item.text}</div>
        </NavLink>
      ))}
    </>
  );
}
