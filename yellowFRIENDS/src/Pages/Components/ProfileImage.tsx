import React from 'react'
import { View } from 'react-native'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'


export function ProfileImage() {

    return (
        <View style={imageStyle .containerImagemUsuario}>
            <Image
                source={require('../../images/Usuarios/Antonio.jpg')}
                style={imageStyle.imagemUsuario}
            />
        </View>
    )
}


const imageStyle = StyleSheet.create({
    
// IMAGEM DO USUARIO
    containerImagemUsuario: {
        flex: 1,
        width: 240,
        height: 240,
        borderRadius: 1000,
        overflow: 'hidden'
    },
    imagemUsuario: {
        width: '100%'
    },

})

