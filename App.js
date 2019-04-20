import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from './Weather'

const API_KEY = "150c7c0b9d3f8bac3bec3d93a574cd94";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    cityname: null
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
          console.log(json);
          // console.log(json.main.temp);
          console.log(json.weather[0].main);
          // console.log(json.name);
          this.setState({
            temperature: json.main.temp,
            name: json.weather[0].main,
            cityname: json.name,
            isLoaded: true
          })
        })
  }

  render() {
    const {isLoaded, error, temperature, cityname, name} = this.state;
    return (
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          {isLoaded ? <Weather
              temp={Math.floor(temperature - 273.15)}
              cityname={cityname}
              weatherName={name}
          /> : (
              <View style={styles.loading}>
                <Text style={styles.loadingText}>Weather info is incoming towards your location</Text>
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
    fontWeight: "bold",
    marginBottom: 40,
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 50,
  }
});
