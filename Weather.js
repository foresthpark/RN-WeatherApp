import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons"

export default class Weather extends Component {
  render() {
    return (
        <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
          <View style={styles.upper}>
            <Ionicons color="white" size={144} name="ios-rainy"/>
            <Text style={styles.temp}>35°</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>Raining cats and dogs</Text>
            <Text style={styles.subtitle}>For more info look out the window</Text>
          </View>
        </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temp: {
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    color: "white",
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  title: {
    fontSize: 35,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 25,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 30,
  },
})