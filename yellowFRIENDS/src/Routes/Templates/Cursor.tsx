import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import IconHome from "../../images/icons/IconHome";
import IconAjudar from "../../images/icons/IconAjudar";
import IconBuscarAjuda from "../../images/icons/IconBuscarAjuda";

interface CursorProps {
    labelName: string
    iconName?: string
    renderIcon?: React.ReactNode
};

export function Cursor({ labelName, iconName }: CursorProps) {
    // Icones possiveis dentro do curso
    const icon_home = <IconHome style={{ fillColor: '#fff', contrastColor: '#000', height: 28, width: 29, }} />
    const icon_Ajudar = <IconAjudar style={{ fillColor: '#fff', contrastColor: '#000', height: 28, width: 29, }} />
    const icon_BuscarAjuda = <IconBuscarAjuda style={{ fillColor: '#fff', contrastColor: '#000', height: 28, width: 29, }} />

    // Icone que vai dentro do Cursor
    var innerIcon;
    if (iconName?.toLowerCase() === 'home') {
        innerIcon = icon_home;
    }
    if (iconName?.toLowerCase() === 'buscar ajuda') {
        innerIcon = icon_BuscarAjuda;
    }
    if (iconName?.toLowerCase() === 'ajudar') {
        innerIcon = icon_Ajudar
    }

    return (
        <View>
            <View style = {styles.textContainer}>
                <View style={styles.iconContainer}>
                    {innerIcon}
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.iconText} >
                    {labelName}
                </Text>
            </View>

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
        alignItems: 'center',
    },

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    iconText: {
        width: Dimensions.get('window').width / 3,
        textAlign: 'center',
    }
}
)