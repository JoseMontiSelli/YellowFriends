import React from 'react';
import { StyleSheet, View, Text, Image, Switch } from 'react-native';

interface propsConfiguracao {
    nomeConfiguracao: string;
    descricaoConfiguracao: string;
    iconeConfiguracao: any;
    statusConfiguracao: boolean;
}

export default function Template_Configuracoes({ nomeConfiguracao, descricaoConfiguracao, iconeConfiguracao, statusConfiguracao }: propsConfiguracao) {
    // Usando o useState pra determinar uma variavel pra setar o Switch
    const [estaConfiguradoEm, mudarEstaConfiguradoPara ] = React.useState(statusConfiguracao);
    // Função que é realizada ao usar o switch
    const mudarConfiguracao = () => mudarEstaConfiguradoPara(!estaConfiguradoEm);

    return (
        <View style={styleConfig.contentSection}>

            <View style={styleConfig.contentSection_ImageBox}>
                <Image style={styleConfig.contentSection_Image} source={iconeConfiguracao} />
            </View>

            <View style={styleConfig.contentSection_TextBox}>
                <View style={styleConfig.switchBox}>
                    <Switch style = {styleConfig.switch} 
                            trackColor = {{true:'#fff', false:'#fff'}}
                            thumbColor = {estaConfiguradoEm ? "#FFE600":"#E9E9E9" }
                            value={estaConfiguradoEm} 
                            onValueChange={mudarConfiguracao} />
                </View>
                
                <Text style={styleConfig.contentSection_MainText}>
                    {nomeConfiguracao}
                </Text>

                <Text style={styleConfig.contentSection_Description}>
                    {descricaoConfiguracao}
                </Text>

            </View>
        </View>
    );
};

const styleConfig = StyleSheet.create({

    contentSection: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        width: "100%",
        height: 80,
    },

    // Imagem card de configuração
    contentSection_ImageBox: {
        width: 60,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentSection_Image: {
        width: 21,
        height: 26
    },

    // Texto do card de configuração
    contentSection_TextBox: {
        height: '100%',
        width: '90%',

        justifyContent: 'center',
    },

    contentSection_MainText: {
        width: '100%',
        marginTop: -15,
        fontSize: 16,
    },

    contentSection_Description: {
        width: '100%',

        fontSize: 12,
        color: '#B1B1B1'
    },

    // Caixa do switch
    switchBox:{
        width: "100%",
        height: 20
        ,
        paddingHorizontal: 40
    },

    switch:{
        alignSelf: 'flex-end',
        width: 20,
        height: 20
    }

})