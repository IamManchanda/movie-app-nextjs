import Head from "next/head";
import styled from "styled-components";

const TitleStyled = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledComponentsDemoPage = () => <TitleStyled>Home</TitleStyled>;

export default StyledComponentsDemoPage;
