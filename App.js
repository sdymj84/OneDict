import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as Font from "expo-font";
import Input from "./components/Input";
import { View, StyleSheet } from "react-native";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      Montserrat: require("./assets/fonts/Montserrat.ttf"),
      "Montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf")
    });
    setIsFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <Background>
      <Container>
        <Title>OneDict</Title>
        <IntroText>Merriam-Webster</IntroText>
        <IntroText>Learner’s Dictionary</IntroText>
        <IntroText>+</IntroText>
        <IntroText>Urban Dictionary</IntroText>
        <Divider />
        <Input />
      </Container>
    </Background>
  );
}

const Background = styled.View`
  flex: 1;
  background-color: rgba(255, 100, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  width: 95%;
  margin: 20px;
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const Title = styled.Text`
  margin: 100px 0 30px 0;
  font-family: Montserrat;
  font-size: 60px;
  line-height: 67px;
  text-align: center;
  color: #333333;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const IntroText = styled.Text`
  font-family: Montserrat-bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #eb5757;
`;

const Divider = styled.View`
  height: 50px;
`;
