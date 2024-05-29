import {CalculatorApp} from './calculator'
import SplashScreen from "./SplashScreen";
import { useEffect, useState } from "react";
import { StyleSheet, StatusBar, View } from "react-native";

export default function App() {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);
  });
  return (
    <View style={styles.container}>
      {isShowSplashScreen ? <SplashScreen /> : <CalculatorApp/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});