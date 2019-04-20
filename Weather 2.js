import React from 'react'
import {LinearGradient, StyleSheet, Text, View} from 'react-native'
import {Ionicons} from "@expo/vector-icons"

class Weather extends React.Component {
  render() {
    return (
        <LinearGradient
            colors={["#00C6FB", "#005BEA"]}
            style={styles.container}
        >
          <View style={styles.upper}>
            <Ionicons color="white" size={144} name="ios-rainy"/>
            <Text style={styles.temp}>35°</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>Raining cats and dogs</Text>
            <Text style={styles.subtitle}>For more info, look out the window</Text>
          </View>
        </LinearGradient>
    )
  }
}

// Weather = ({temp}) => {
//   return (
//       <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//         <View style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy"/>
//           <Text style={styles.temp}>{temp}</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>Raining cats and dogs</Text>
//           <Text style={styles.subtitle}>For more info, look out the window</Text>
//         </View>
//       </LinearGradient>
//   );
// }

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  temp: {
    fontSize: 80,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 25,
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
    marginBottom: 6,
    fontWeight: "300",
  },
  subtitle: {
    fontSize: 22,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 25,
  }
})

