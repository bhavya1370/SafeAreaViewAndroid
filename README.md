# SafeAreaViewAndroid
SafeAreaView for android React Native
Problem:
How do i use safeAreaView for my android based devices in react native?

Solution:

create a new .js file (name it whatever you want, I named it GlobalStyles.js) and write the following code:

import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
});

after this in your App.js import

import GlobalStyles from './GlobalStyles'

and whatever you want in your safe area view inside

<SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{
          backgroundColor: "white",
          padding: 15
        }}
        >
          {/* <Text>Anything here will be shown in safe area</Text>  */}
        </View>
      </View>
    </SafeAreaView>
 
