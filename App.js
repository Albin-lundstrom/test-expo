import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Weather  from './components/weather.js'
import News  from './components/news.js'


function HomeScreen({ navigation }) {
  return (
    <View style={ style.navCont }>
      <View style={ style.NaviView }>
        <Button
          title="Go to Weather"
          onPress={() => navigation.navigate('Weather')}
        />
      </View>
      <View style={ style.NaviView }>
        <Button
          title="Go to News"
          onPress={() => navigation.navigate('News')}
        />
      </View>
    </View>
  );
}

function WeatherScreen() {
  return (
    <View style={ style.navCont }>
      <Weather />
    </View>
  );
}

function NewsScreen() {
  return (
    <View style={ style.navCont }>
      <News />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const style = StyleSheet.create({
  navCont: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  NaviView: {
    margin: '5%', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})