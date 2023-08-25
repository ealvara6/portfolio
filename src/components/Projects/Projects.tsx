import StyledProjects, {
  Buttons, Content, Description, Image, Project, TechTitle,
  Technologies, Technology, TechnologySection, Title,
} from './Projects.styles';
import portfolioImage from '../../assets/portfolio.png';
import Button from '../Button';
import Line from '../Animations/Animations.styles';
import Text from '../Text';

export default function Projects() {
  return (
    <StyledProjects>
      <Project>
        <Image $image={portfolioImage} />
        <Content>
          <Title>
            <div>
              <span>01.</span>
              {' '}
              Portfolio Project
            </div>
            <Line $horizontal />
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad accusantium repellendus facilis ducimus omnis unde distinctio
            fuga necessitatibus alias fugiat.

          </Text>
          <TechnologySection>
            <TechTitle>TECHNOLOGIES</TechTitle>
            <Technologies>
              <Technology>React</Technology>
              <Technology>React</Technology>
              <Technology>React</Technology>
              <Technology>React</Technology>
            </Technologies>
          </TechnologySection>
          <Buttons>
            <Button>Live Preview</Button>
            <Button>Code</Button>
          </Buttons>
        </Content>
      </Project>
    </StyledProjects>
  );
}
