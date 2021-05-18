import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

export default function NavHome() {
    return (
        <View>

        <View style={styles.iconContainer}>
            <Image style = {styles.icon} source = {require('../images/icons/IconHome.png')}/>
        </View>

        <Text style = {styles.iconText}>
            Home
        </Text>

    </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFD600',
        height: 50,
        width: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        width:30,
        height: 30
    },

    iconText: {
        textAlign: 'center'
    }
}
)