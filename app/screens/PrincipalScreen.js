import React, { Component } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function PrincipalScreen({ navigation, route }) {
    const data = route.params;
    const email = data._tokenResponse.email.split('@');

    return (
        <Text style={{ textAlign: 'center', marginTop: 100, fontFamily: 'NextPersonDemoBold', fontSize: 30, flex: 1, flexWrap: 'wrap', flexShrink: 1, padding:15}}>
            Bienvenido a Home { email[0] }
        </Text>
    )
}