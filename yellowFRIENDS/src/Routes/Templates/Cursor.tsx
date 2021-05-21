import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import IconHome from "../../images/icons/IconHome";
import IconAjudar from "../../images/icons/IconAjudar";

interface CursorProps{
    labelName?: string
    iconName?: string
}

export function Cursor({labelName, iconName}: CursorProps) {
    const icon_home = <IconHome style={{ fillColor:'#fff',contrastColor:'#000', height: 28, width: 29,}} />
    const icon_Ajudar = <IconAjudar style={{ fillColor:'#fff',contrastColor:'#000', height: 28, width: 29,}} />

    var innerIcon;
    if (iconName === 'home') {
        innerIcon = icon_home;
    }
    if (iconName === 'ajudar') {
        innerIcon = icon_Ajudar
    }
    return (
    <View>
        
        <View style={styles.iconContainer}>
            {innerIcon}
        </View>

        <Text style = {styles.iconText}>    
            {labelName}
        </Text>

    </View>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: 40,
        width: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconText: {
        textAlign: 'center'
    }
}
)