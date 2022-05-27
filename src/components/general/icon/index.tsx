import styled from 'styled-components';

export const SvgContainer = styled.div<{
  height?: number;
  width?: number;
}>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    height: ${({ height }) => (height ? `${height}px` : 'auto')};
    width: ${({ width }) => (width ? `${width}px` : 'auto')};
  }
`;
interface IconProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
}

export const SvgIcon: React.FC<IconProps> = (props) => {
  const { Icon } = props;
  return (
    <SvgContainer {...props}>
      <Icon />
    </SvgContainer>
  );
};
