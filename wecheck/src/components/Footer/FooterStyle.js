import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: #333d37;
  padding: 100px 0 0 0;
`;
export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const StyledLeftBlock = styled.div`
  margin-left: 23px;
  p {
    max-width: 370px;
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #ffffff;
    opacity: 0.7;
  }
  p:first-child {
    font-weight: 700;
    line-height: 40px;
    color: #ffffff;
    opacity: 1;
  }
`;
export const StyledCentrBlock = styled.div`
  margin-left: 127px;
  display: flex;
  flex-direction: column;
  a {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    text-decoration: underline;
    color: #ffffff;
  }
`;
export const StyledRightBlock = styled.div`
  max-width: 160px;
  p {
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160.44%;
    color: #ffffff;
  }
  img {
    width: 36px;
    margin-right: 12px;
  }
`;
export const StyledCopyright = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  p {
    cursor: pointer;
    font-family: "Gerbera";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #9f9f9f;
    text-decoration: underline;
  }
  p:first-child {
    cursor: default;
    text-decoration: none;
  }
`;

export const StyledBorder = styled.div`
  border: 1px solid #fff;
  opacity: 0.1;
`;
