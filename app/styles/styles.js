import { StyleSheet } from 'react-native';
import colors from './colors';

const imageBackgroundStyle = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Background
    }
})

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.GreenLogo,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.Background
    },

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },

    btnMain: {
        width: 280,
        marginTop:40,
        marginBottom: 20,
        backgroundColor: colors.GreenLogo,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: colors.GreenLogo,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.GreenLogo,
        paddingVertical: 8,
        fontFamily: 'MorphinBold',
    },

    btnUsers: {
        textAlign: 'center',
        paddingVertical: 5,
        justifyContent: 'center',
        fontFamily: 'MorphinBold',
        backgroundColor: colors.GreenLogo,
        paddingVertical: 5,
        paddingHorizontal: 10
        
    },

    txtUsers:{
        fontSize: 18,
        color: colors.OppositeBackground
    },

    txtTransparent: {
        color: colors.OppositeGreenLogo,
        fontSize: 14,
        fontFamily: 'MorphinBold',
    }
})

export { imageBackgroundStyle, loginStyles, splashStyles };