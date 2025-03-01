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
  showText = true,
}: HeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Image src={logo} alt={blogName} />
      <Styled.TextWrapper showText={showText}>
        <Heading as="h3" size="medium">
          {blogName}
        </Heading>
        <Styled.Text>{blogDescription}</Styled.Text>
      </Styled.TextWrapper>
    </Styled.Container>
  );
};
