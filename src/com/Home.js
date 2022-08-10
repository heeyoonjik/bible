import React from "react";
import { useRef } from "react";
import styled from "styled-components";

const Home = () => {
  const inputToFocus = useRef();

  return (
    <Inner>
      <VideoBg src="img/Motion_Web_1.mp4" autoPlay="true" loop muted />
      <IntroductionSection ref={inputToFocus}></IntroductionSection>
    </Inner>
  );
};

export default Home;

const Inner = styled.div`
  width: 100vw;
  height: 100vh;
`;

const VideoBg = styled.video`
  width: 100%;
  object-fit: contain;
`;

const IntroductionSection = styled.section`
  height: 6400px;
  background-color: black;
`;
