/*eslint-disable*/
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { TabNavigator } from 'react-navigation';
import SearchScreen from './src/SearchScreen';
import ProfileScreen from './src/ProfileScreen';
import WishlistScreen from './src/WishlistScreen';

const App = TabNavigator({
    SearchScreen: { screen: SearchScreen},
    WishlistScreen: { screen: WishlistScreen },
    ProfileScreen: { screen: ProfileScreen },
})

export default App;
