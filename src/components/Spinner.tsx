import styled from "styled-components";

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 20px solid rgb(241, 241, 242);
  border-top: 20px solid rgb(160, 128, 252);
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
