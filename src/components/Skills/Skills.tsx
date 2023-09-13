import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import {
  Navigation, Autoplay, FreeMode,
} from 'swiper/modules';
import { v4 as uuid4 } from 'uuid';
import Line from '../Animations/Animations.styles';
import {
  SkillIcon, StyledSkills, SkillHeaderWrapper, SkillHeader,
} from './Skills.styles';

import GetSKills from './GetSkills';

export default function Skills() {
  const data = GetSKills();

  return (
    <StyledSkills>
      <SkillHeaderWrapper>
        <SkillHeader>Skills</SkillHeader>
      </SkillHeaderWrapper>
      <Line $horizontal />
      <Swiper
        modules={[Navigation, Autoplay, FreeMode]}
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
        {data.map((skill) => (
          <SwiperSlide key={uuid4()}>
            <SkillIcon as="a" href={skill.link} target="_blank" $icon={skill.icon} />
            <a href={skill.link} target="_blank" rel="noreferrer">{skill.name}</a>
          </SwiperSlide>
        ))}
      </Swiper>

    </StyledSkills>
  );
}
