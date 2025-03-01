import * as Styled from './styles';

export type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};
