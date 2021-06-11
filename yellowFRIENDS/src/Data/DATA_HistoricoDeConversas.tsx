import { Usuarios, SalasDeChat } from '../Database/Collections'

// Função para pegar o ultimo array
function lastArrayIndex(someArray: any[]) {
    var someArrayCopy: any[] = [...someArray]
    let lastIndex: any
    lastIndex = someArrayCopy.pop()
    return lastIndex
}

// 1. Encontrar e relacionar a ultima mensagem enviada na sala de chat
const lastMessageTextProvider = (mensagem: any[]) => {
    var ultimaMensagem: string = lastArrayIndex(mensagem).text
    return ultimaMensagem
}
const lastMessageTimeProvider = (mensagem: any[]) => {
    var ultimaMensagem: any = lastArrayIndex(mensagem)
    const data = new Date(ultimaMensagem.DataTime.seconds * 1000)
    const lastMessageSended = {
        hora: data.getHours().toString(),
        minutos: data.getMinutes().toString()
    }
    return lastMessageSended
}
//2. Encontrar e relacionar se a mensagem foi lida por todos os usuarios da sala de chat
const isReaded = () => {
    var readedStatus: boolean
    return readedStatus = false;
}
//3. Trazer da sala de chat a hora da ultima mensagem

//4. Estruturar informações do chat
function chatRoomDataProvider() {
    // Lista para armazenar os dados da sala de chat
    const messageInfos: any = []
    SalasDeChat.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                // Shortcut para as mensagens das salas de chat
                var mensagens = doc.data().Mensagens
                // Informações da sala de chat que eu preciso
                var data = {
                    id: doc.data().id,
                    nome: "",
                    hora: lastMessageTextProvider(mensagens),
                    mensagem: lastMessageTimeProvider(mensagens).hora,
                    avatar: "",
                    isReaded: true
                }
                messageInfos.push(data)
            })
        });
    return messageInfos
}
const DADOS_CardUsuario = [{
    title: 'Conversas',
    data: [{
        id: '1',
        nome: "",
        hora: "20",
        mensagem: "Eu te amo",
        avatar: require('../images/Usuarios/Antonio.jpg'),
        isReaded: true
    }]
}];

// {
//     title: 'Grupos',
//     data: [chatRoomDataProvider()]
// }

export default DADOS_CardUsuario;