import {
  Navigation, A11y, Autoplay, FreeMode,
} from 'swiper/modules';
import { v4 as uuid4 } from 'uuid';
import data from './skills.json';
import { Line } from '../Animations/Animations.styles';
import {
  SkillsWrapper, Skill, SkillIcon, StyledSkills, SkillHeaderWrapper, SkillHeader,
} from './Skills.styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';

export default function Skills() {
  const skills = data.map((skill) => (
    <Skill key={uuid4()}>
      <SkillIcon as="a" href={skill.link} target="_blank" $icon={skill.icon} />
      <a href={skill.link} target="_blank" rel="noreferrer">{skill.name}</a>
    </Skill>
  ));
  return (
    <StyledSkills>
      <SkillHeaderWrapper>
        <SkillHeader>Skills</SkillHeader>
      </SkillHeaderWrapper>
      <Line $horizontal />
      <SkillsWrapper
        modules={[Navigation, A11y, Autoplay, FreeMode]}
        navigation
        spaceBetween={50}
        slidesPerView={2}
        loop
        autoplay
        freeMode
        breakpoints={{
          1030: {
            slidesPerView: 5,
          },
          700: {
            slidesPerView: 3,
          },
        }}
      >
        {skills}
      </SkillsWrapper>

    </StyledSkills>
  );
}
