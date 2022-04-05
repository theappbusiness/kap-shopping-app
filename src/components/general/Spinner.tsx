import styled from "styled-components";

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 20px solid #e4e4ee;
  border-top: 20px solid #18181a;
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

// add span inside spinner with class sr-only and text Loading

export default Spinner;
