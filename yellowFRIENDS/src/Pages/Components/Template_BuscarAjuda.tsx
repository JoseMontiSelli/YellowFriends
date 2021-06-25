import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

interface interBuscarAjuda{
    title: string;
    img: any;
}

export default function ({title, img}: interBuscarAjuda) {
    
return (
        <View style={styles.item}>
            <Image source={img} style={styles.img}/>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        padding: 6,
        marginVertical: 8,
        marginHorizontal: 10,
        flex:1,
        alignItems:'baseline',
    }
})