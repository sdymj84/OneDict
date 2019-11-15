import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import DictImage from "./assets/images/dict.jpg";

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [word, setWord] = useState("");

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

  const handleChange = text => {
    setWord(text);
  };

  const handleSubmit = async () => {
    console.log(process.env.LEARNER_KEY);
    const res = await axios.get(
      `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${process.env.LEARNER_KEY}`
    );
    console.log(res);
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={DictImage}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          opacity: 0.3
        }}
      />
      <Text style={styles.title}>OneDict</Text>
      <Text style={styles.introText}>Merriam-Webster</Text>
      <Text style={styles.introText}>Learner’s Dictionary</Text>
      <Text style={styles.introText}>+</Text>
      <Text style={styles.introText}>Urban Dictionary</Text>

      <View style={{ margin: 50 }}>
        <TextInput
          placeholder="Enter word..."
          style={styles.input}
          onChangeText={handleChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SEARCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: "20%",
    marginBottom: "10%",
    fontFamily: "Montserrat",
    fontSize: 60,
    textAlign: "center",
    color: "#333333",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 10,
      height: 10
    },
    textShadowRadius: 10
  },
  introText: {
    fontFamily: "Montserrat-bold",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    color: "#eb5757"
  },
  input: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#F2994A",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2994A",
    height: 45,
    borderRadius: 5
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "Montserrat-bold"
  }
});
