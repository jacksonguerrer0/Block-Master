import styled from "styled-components";
import variables from "./variables";
//Figma
export const H1 = styled.h1`
  font-family: ${variables.fontPrimary};
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 56px;
  letter-spacing: 0.01em;
  color: ${variables.white};
`;
export const H3 = styled.h3`
  font-family: ${variables.fontSecondary};
  font-style: normal;
  font-weight: bold;
  font-size: 37px;
  line-height: 31px;
  color: #111111;
`;
export const H5 = styled.h5`
  font-family: ${variables.fontPrimary};
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.01em;
  color: #111111;
`;
export const P1Bold = styled.p`
  font-family: ${variables.fontPrimary};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #111111;
`;
export const P2Regular = styled.p`
  font-family: ${variables.fontPrimary};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
`;
//texto de botones
export const TextButton = styled.p`
  font-family: ${variables.fontPrimary};
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #111111;;
`;
export const Span = styled.span`
  font-family: ${variables.fontPrimary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: ${variables.grey};
`;