import javascriptIcon from '../../assets/icons8-javascript.svg';
import htmlIcon from '../../assets/icons8-html.svg';
import cssIcon from '../../assets/icons8-css.svg';
import sassIcon from '../../assets/icons8-sass.svg';
import reactIcon from '../../assets/icons8-react.svg';
import viteIcon from '../../assets/vitejs.svg';
import webpackIcon from '../../assets/icons8-webpack.svg';
import jestIcon from '../../assets/file-type-jest.svg';
import npmIcon from '../../assets/icons8-npm.svg';
import gitIcon from '../../assets/icons8-git.svg';
import typescriptIcon from '../../assets/icons8-typescript.svg';
import postgreSQLIcon from '../../assets/postgresql.jpeg';

export default function GetSKills() {
  const data = [
    {
      icon: javascriptIcon,
      name: 'Javascript',
      link: 'https://www.javascript.com/',
    },
    {
      icon: htmlIcon,
      name: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      icon: cssIcon,
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      icon: sassIcon,
      name: 'Sass',
      link: 'https://sass-lang.com/',
    },
    {
      icon: reactIcon,
      name: 'React',
      link: 'https://react.dev/',
    },
    {
      icon: viteIcon,
      name: 'Vite',
      link: 'https://vitejs.dev/',
    },
    {
      icon: webpackIcon,
      name: 'Webpack',
      link: 'https://webpack.js.org/',
    },
    {
      icon: jestIcon,
      name: 'Jest',
      link: 'https://jestjs.io/',
    },
    {
      icon: npmIcon,
      name: 'npm',
      link: 'https://www.npmjs.com/',
    },
    {
      icon: gitIcon,
      name: 'Git',
      link: 'https://git-scm.com/',
    },
    {
      icon: typescriptIcon,
      name: 'typescript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      icon: postgreSQLIcon,
      name: 'PostgreSQL',
      link: 'https://www.postgresql.org/',
    },
  ];

  return data;
}
