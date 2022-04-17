import React, { Component, useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Image,
    Alert
} from "react-native";
import { loginStyles } from '@styles/styles';
import MyTextInput from '@components/MyTextInput';
import colors from '@styles/colors';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import SweetAlert from 'react-native-sweet-alert';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigate } from "react-router-dom";

export default function LoginScreen({ navigation }) {
    const [hidePassword, setHidePassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    var errorMessage = 'No se pudo crear el usuario de forma correcta verifique los datos.';
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);


    const handleCreateAcount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                SweetAlert.showAlertWithOptions({
                    title: 'Bienvenido',
                    subTitle: 'Nos alegra que te hayas registrado',
                    confirmButtonTitle: 'Igual a mi',
                    style: 'success',
                    cancellable: true
                });
                navigation.navigate('Principal', userCredential);
            })
            .catch(error => {
                errorMessage = convertMessage(error.code);
                SweetAlert.showAlertWithOptions({
                    title: 'Error',
                    subTitle: errorMessage,
                    confirmButtonTitle: 'OK',
                    style: 'error',
                    cancellable: true
                });
            })
    }


    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                var email = userCredential._tokenResponse.email.split('@');

                SweetAlert.showAlertWithOptions({
                    title: 'Bienvenido',
                    subTitle: 'Nos alegra que hayas vuelto ' + email[0],
                    confirmButtonTitle: 'Gracias!',
                    style: 'success',
                    cancellable: true
                });
                navigation.navigate('Principal', userCredential);
            })
            .catch(error => {
                errorMessage = convertMessage(error.code);
                SweetAlert.showAlertWithOptions({
                    title: 'Error',
                    subTitle: errorMessage,
                    confirmButtonTitle: 'OK',
                    otherButtonTitle: 'Cancel',
                    style: 'error',
                    cancellable: true
                });
            })
    }

    const convertMessage = (code) => {
        switch (code) {
            case 'auth/user-disabled': {
                return 'Usuario deshabilitado.';
            }
            case 'auth/user-not-found': {
                return 'Usuario no encontrado.';
            }
            case 'auth/wrong-password': {
                return 'Password incorrecto intente nuevamente.';
            }
            case 'auth/email-already-in-use': {
                return 'Usuario ya creado.';
            }
            case 'auth/weak-password': {
                return 'Password debil, minimo 6 digitos.';
            }
            case 'auth/invalid-email': {
                return 'Mail Invalido.';
            }
            default: {
                var message = 'No se pudo crear el usuario de forma correcta verifique los datos.';

                return message;
            }
        }
    }

    const bruce = () => {
        setEmail('bruce.wayne@gotham.com');
        setPassword('123456');
    }

    const diana = () => {
        setEmail('di@gmail.com');
        setPassword('123456');
    }

    const junior = () => {
        setEmail('junior@gmail.com');
        setPassword('123456');
    }

    return (
        <View style={[loginStyles.container, { padding: 50 }]}>
            <StatusBar backgroundColor={colors.BLUE} translucent={true} />
            <View style={[loginStyles.logo]}>
                <Image source={require('@recursos/images/icon.png')} style={{ height: 200, width: 200 }} />
            </View>
            <MyTextInput value={email} keyboardType='email-address' placeholder='E-mail' image='user' onChangeText={(text) => {
                setEmail(text);
            }
            } />
            <MyTextInput value={password} keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true} secureTextEntry={hidePassword}
                onPress={() => {
                    setHidePassword(!hidePassword)
                }}
                onChangeText={(text) => {
                    setPassword(text);
                }}
            />
            <View style={[loginStyles.btnMain, {marginTop:5}]}>
                <TouchableOpacity>
                    <Text style={[loginStyles.btntxt, { color: colors.OppositeGreenLogo }]} onPress={handleSignIn}>
                        Iniciar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={[loginStyles.btnMain, {marginBottom:50}]}>
                <TouchableOpacity>
                    <Text style={[loginStyles.btntxt, { color: colors.OppositeGreenLogo }]} onPress={handleCreateAcount}>
                        Registrarse
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'center', marginBottom:15 }}>
                <TouchableOpacity style={[loginStyles.btnUsers, {borderBottomLeftRadius: 15, borderTopLeftRadius: 15}]}>
                    <Text  style={[loginStyles.txtUsers]} onPress={diana}>
                        Diana
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[loginStyles.btnUsers, {marginHorizontal:1}]}>
                    <Text  style={[loginStyles.txtUsers]} onPress={bruce}>
                        Bruce
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[loginStyles.btnUsers, {borderBottomRightRadius: 15, borderTopRightRadius: 15}]}>
                    <Text  style={[loginStyles.txtUsers]} onPress={junior}>
                        Junior
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={[loginStyles.txtTransparent, { textDecorationLine: 'underline' }]}>
                        Olvide mi contraseña
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}