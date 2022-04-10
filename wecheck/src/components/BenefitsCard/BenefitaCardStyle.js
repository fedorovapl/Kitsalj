import styled from "styled-components";

export const StyledCardContainer = styled.div`
  padding: 40px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 32px;
`;

export const StyledTitle = styled.p`
  padding-bottom: 20px;
  margin: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: -0.3px;
  color: #213a2b;
`;

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #396149;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1fdf6;
  border-radius: 32px;
  margin-top: 49px;
  img {
    width: 100%;
  }
`;
