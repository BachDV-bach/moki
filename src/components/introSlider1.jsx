import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'

export default class IntroSlider1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/IntroSlider/introSlider1.png')} style={styles.imgBg}>
                    <Text>ádsad</Text>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBg: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '60%',
    }
})
