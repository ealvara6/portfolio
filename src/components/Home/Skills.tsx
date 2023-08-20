import {
  Navigation, A11y, Autoplay, FreeMode,
} from 'swiper/modules';
import { v4 as uuid4 } from 'uuid';
import data from './skills.json';
import {
  SkillsWrapper, Skill, SkillIcon, StyledSkills, Line,
} from './Home.styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import Header from '../Headers';

export default function Skills() {
  const skills = data.map((skill) => (
    <Skill key={uuid4()}>
      <SkillIcon as="a" href={skill.link} target="_blank" $icon={skill.icon} />
      <a href={skill.link} target="_blank" rel="noreferrer">{skill.name}</a>
    </Skill>
  ));
  return (
    <StyledSkills>
      <Header>
        Skills
        <Line $horizontal />
      </Header>
      <SkillsWrapper
        modules={[Navigation, A11y, Autoplay, FreeMode]}
        navigation
        spaceBetween={50}
        slidesPerView={5}
        loop
        autoplay
        freeMode
        breakpoints={{
          100: {
            width: 650,
            slidesPerView: 5,
          },
        }}
      >
        {skills}
      </SkillsWrapper>

    </StyledSkills>
  );
}
