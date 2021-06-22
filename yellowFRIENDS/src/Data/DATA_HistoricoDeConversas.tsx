import React, { useState, useEffect } from "react";
import { Usuarios, SalasDeChat } from '../Database/Collections'

// Função para pegar o ultimo array
export function lastArrayIndex(someArray: any[]) {
    var someArrayCopy: any[] = [...someArray]
    let lastIndex: any
    lastIndex = someArrayCopy.pop()
    return lastIndex
}
//4. Estruturar informações do chat
const chatRoomDataProvider = () => {
    const mensagens: any = []
    SalasDeChat.get().then((snapshot) => {
        snapshot.forEach((doc) => {
            var data = {
                id: lastArrayIndex(doc.data().Mensagens).IdMensagem,
                avatar: require('../images/Usuarios/Antonio.jpg'),
                nome: lastArrayIndex(doc.data().Mensagens).NomeUsuario,
                mensagem: lastArrayIndex(doc.data().Mensagens).Texto,
                hora: '20:30',
                isReaded: true,
            }
            mensagens.push(data)
        })
    })
    return mensagens
}

var testData = chatRoomDataProvider()

console.log(testData)

const DADOS_CardUsuario = [{
    title: 'Conversas',
    data: testData
}];

export default DADOS_CardUsuario;
