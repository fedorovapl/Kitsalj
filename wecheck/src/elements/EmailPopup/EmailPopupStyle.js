import styled from "styled-components";
import Popup from "reactjs-popup";

export const StyledPopup = styled(Popup)`
  @keyframes anvil {
    0% {
      transform: scale(1) translateY(0px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
      transform: scale(0.96) translateY(10px);
      opacity: 0;
      box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
      transform: scale(1) translateY(0px);
      opacity: 1;
      box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
  }
  &-content {
    display: flex;
    background-color: #fff;
    max-width: 80%;
    -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
  &-overlay {
    background: #0000008c;
  }
`;
export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  p {
    margin: 40px 40px;
    text-align: center;
    max-width: 400px;
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #333333;
  }
  img {
    align-self: flex-end;
    cursor: pointer;
  }
`;
