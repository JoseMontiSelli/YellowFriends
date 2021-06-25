import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export function ProfileBio() {
    return (
        <View style={styleBio.bio}>
            <Text style={styleBio.textBio}>Eu sou só um cara legal tentando ajudar as pessoas e gosto de trens</Text>
        </View>
    )
}

const styleBio = StyleSheet.create({
    // BIOGRAFIA
    bio: {
        justifyContent: 'center',
        marginTop: 30,
        paddingHorizontal: 30,
    },
    textBio: {
        fontSize: 18,
    },
})

