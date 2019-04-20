import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import PropTypes from 'prop-types'

// Objects for different weather types
const weatherCases = {
  Rain: {
    colors: ['#006CFB', '#005BEA'],
    title: "Water is falling from the sky",
    subtitle: "For more info, look out the window",
    icon: "weather-pouring"
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: "The UV is strong in this one",
    subtitle: "It's always sunny in Philadelphia",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: "Thunderbolt and Lightning",
    subtitle: "Momma, I killed a man",
    icon: "weather-lighting-rainy"
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: "Failed to retrieve data from the Cloud",
    subtitle: "It's gloomy out there",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: "Time to build a snowman",
    subtitle: "No",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "It's raining, but like, not",
    subtitle: "Don't half-ass stuff",
    icon: "weather-rainy"
  },
  Mist: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "The Mist, it consumes us",
    subtitle: "The military never shows up when you need them",
    icon: "weather-fog"
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "I feel Hazed",
    subtitle: "It is the dim haze of mystery that adds enchantment to pursuit",
    icon: "weather-hail"
  },
};

// Receives props from App.js and shows Temp info
Weather = ({weatherName, temp}) => {
  console.log("This is the weatherName", weatherName)
  return (
      <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
        <View style={styles.upper}>
          <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
          <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
          <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
        </View>
      </LinearGradient>
  )
}

// What type of props should id recieve?
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather

// StyleSheet Component
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
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 20,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 50,
  },
})