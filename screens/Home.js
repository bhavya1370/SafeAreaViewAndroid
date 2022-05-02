import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import GlobalStyles from './GlobalStyles'

export default function Home() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{
          backgroundColor: "white",
          padding: 15
        }}
        >
          <Text>Helloworld</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})