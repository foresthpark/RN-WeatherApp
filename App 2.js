import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Weather from "./Weather"

const API_KEY = "150c7c0b9d3f8bac3bec3d93a574cd94"

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
          this.getWeather(position.coords.latitude, position.coords.longitude)
        },
        error => {
          this.setState({
            error: error
          })
        }
    );
  }

  getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({
            temperature: json.main.temp,
            name: json.weather[0].main,
            isLoaded: true
          })
        })
  }

  render() {
    const {isLoaded, error, temperature, name} = this.state;
    return (
        <View style={styles.container}>
          <StatusBar hidden="true"/>
          {isLoaded ? (
              <Weather/>
          ) : (
              <View style={styles.loading}>
                <Text style={styles.loadingText}>The weather data is slowly incoming to your location</Text>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
              </View>
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    backgroundColor: "#fdf6aa",
    justifyContent: "flex-end",
    paddingLeft: 20,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,

  }
});
