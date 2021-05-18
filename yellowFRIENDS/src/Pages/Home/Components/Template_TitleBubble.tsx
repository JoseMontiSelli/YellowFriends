import React from 'react';
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

interface bubbleProps {
    text: string
}

export function Template_TittleBubble(props: bubbleProps) {
    return (
        <View style={styleTittle.titleSection_Background}>
            <Text style={styleTittle.titleSection_Texto}>
                {props.text}
            </Text>
        </View>
    )
}

const styleTittle = StyleSheet.create({
    // titulo da sessão
    titleSection_Background: {
        backgroundColor: '#FFE600',
        width: 126,
        height: 17,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28
    },
    titleSection_Texto: {
        color: '#ffffff',
        fontWeight: '700'
    },
}

)
