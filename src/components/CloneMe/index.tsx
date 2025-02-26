import * as Styled from './styles';

export type CloneMeProps = {
  title?: string;
};

export default function CloneMe({ title = 'change me' }: CloneMeProps) {
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  );
}
