import * as S from './styles';

interface IPageWrapperProps {
  children: JSX.Element;
}

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  return <S.Container>{children}</S.Container>;
};
