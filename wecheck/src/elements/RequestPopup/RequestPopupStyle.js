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
    flex-direction: column;
    background-color: #fff;
    -webkit-animation: anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
  }
  &-overlay {
    background: #0000008c;
  }
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
  width: 500px;
  @media (max-width: 600px) {
    width: 320px;
    padding: 32px 16px;
  }
  p {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    color: #333333;
  }
  img {
    cursor: pointer;
  }
`;
export const StyledModalContent = styled.div`
  width: 500px;
  background: #f7f7f7;
  padding: 32px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 320px;
    padding: 32px 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
      width: 100%;
    }
    input[type="checkbox"] {
      width: auto;
      margin-right: 8px;
      accent-color: #219653;
    }
    label {
      display: flex;
      align-items: center;
      white-space: nowrap;
      font-family: "Sofia Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.65);
      a {
        cursor: pointer;
        margin-left: 5px;
        text-decoration: none;
        color: #219653;
      }
    }
    display: flex;
    flex-direction: column;
    input[type="text"],
    input[type="email"],
    input[type="number"] {
      margin-bottom: 16px;
      padding: 12px 24px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.06);
      box-sizing: border-box;
      border-radius: 8px;
      font-family: "Sofia Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 47px;
      color: #6e6e6e;
      &::placeholder {
        font-family: "Sofia Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 47px;
        color: #6e6e6e;
      }
    }
    input[type="submit"] {
      background: #219653;
      border-radius: 100px;
      padding: 18px;
      margin-top: 40px;
      border: none;
      font-family: "Sofia Pro";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 22px;
      color: #ffffff;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: #1c7e46;
      }
      &:active {
        background: #166839;
      }
    }
    input[type="submit"]:disabled {
      pointer-events: none;
      cursor: default;
      background: #ccc;
    }
  }
`;

export const StyledSucces = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: green;
`;
export const StyledError = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: red;
`;
export const StyledPending = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #333333;
`;
