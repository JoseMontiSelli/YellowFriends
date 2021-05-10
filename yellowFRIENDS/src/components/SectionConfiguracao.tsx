import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface propsSection {
    nomeSessao: string;
}

export default function SectionConfiguracao({ nomeSessao }: propsSection) {
    return (
        <View>
            <Text style={styleSection.headerSection}>
                {nomeSessao}
            </Text>
        </View>
    )
};

const styleSection = StyleSheet.create({
    headerSection: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10
    },

    contentSection: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        width: "100%",
        height: 80,
    },
})