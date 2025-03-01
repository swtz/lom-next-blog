import { Heading } from '../Heading';
import * as Styled from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = false,
}: HeaderProps) => {
  return (
    <Styled.Container>
      <Styled.TextWrapper showText={showText}>
        <Heading as="h3" size="medium">
          {blogName}
        </Heading>
        <Styled.Text>{blogDescription}</Styled.Text>
      </Styled.TextWrapper>
      <Styled.ImageWrapper>
        <Styled.Image src={logo} alt={blogName} />
      </Styled.ImageWrapper>
    </Styled.Container>
  );
};
