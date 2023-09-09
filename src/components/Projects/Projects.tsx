import { useMediaQuery } from 'react-responsive';
import { v4 as uuid4 } from 'uuid';
import StyledProjects, {
  Buttons, Content, Image, Project, TechTitle,
  Technologies, Technology, TechnologySection, Title,
} from './Projects.styles';
import Button from '../Button';
import Line from '../Animations/Animations.styles';
import Text from '../Text';
import projects from './projects.json';
import { SectionHeader } from '../Headers';

export default function Projects() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  let count = -1;
  const projectComponents = projects.map((project) => {
    count += 1;
    return (
      <Project key={uuid4()}>
        <Image $image={isMobile ? project.imageMobile : project.image} $count={count} />
        <Content $count={count}>
          <Title>
            <span>{`0${count + 1}.`}</span>
            <div>{project.title}</div>
            <Line $horizontal />
          </Title>
          <Text>{project.desc}</Text>
          <TechnologySection>
            <TechTitle>TECHNOLOGIES</TechTitle>
            <Technologies>
              {project.tech.map((tech) => (
                <Technology key={uuid4()}>{tech}</Technology>
              ))}
            </Technologies>
          </TechnologySection>
          <Buttons>
            <Button as="a" href={project.website} target="_blank">Live Preview</Button>
            <Button as="a" href={project.code} target="_blank">Code</Button>
          </Buttons>
        </Content>
      </Project>
    );
  });

  return (
    <StyledProjects id="projects">
      <SectionHeader>Projects</SectionHeader>
      {projectComponents}
    </StyledProjects>
  );
}
