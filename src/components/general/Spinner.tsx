import styled from 'styled-components';

export const Spinner = styled.div`
  width: 10rem;
  height: 10rem;
  border: 2rem solid #e4e4ee;
  border-top: 2rem solid #18181a;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  margin: 3rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
