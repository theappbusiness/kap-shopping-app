import styled from "styled-components";

const Alert = styled.div`
  background-color: ${(props: { variant: string }) => {
    if (props.variant === "danger") {
      return "red";
    }
  }};
`;

export default Alert;
