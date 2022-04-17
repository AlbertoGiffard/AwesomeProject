import React, { Component } from "react";
import { View, StatusBar, Text } from "react-native";
import * as Animatable from 'react-native-animatable';
import { imageBackgroundStyle } from "@styles/styles";
import SplashScreenReact from 'react-native-splash-screen';

export default class SplashScreen extends Component {
    goToScreen(routeName) {
        this.props.navigation.navigate(routeName);
    }

    componentDidMount() {
        SplashScreenReact.hide();
        setTimeout(() => {
            this.goToScreen('Login')
        }, 3000, this)
    }

    render() {
        return (
            <View style={imageBackgroundStyle.image}>
                <Animatable.Text animation="zoomInUp" style={{ textAlign: 'center', marginTop: 10, fontFamily: 'Vonique64Bold', fontSize: 20 }}>
                    Alberto Giffard
                </Animatable.Text>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
                <Animatable.Image
                    animation='pulse'
                    easing='ease-out'
                    iterationCount='infinite'
                    style={{
                        width: 350,
                        height: 350,
                        margin: 100
                    }}
                    source={require('@recursos/images/splash.png')}
                />
                <Animatable.Text animation="rotate" style={{ textAlign: 'center', marginTop: 10, fontFamily: 'Vonique64', fontSize: 20 }}>
                4to B
                </Animatable.Text>
            </View>
        )
    }
}