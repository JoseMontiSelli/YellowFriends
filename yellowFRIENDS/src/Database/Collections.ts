import { database } from "./FirebaseConfig";

export const Usuarios = database.collection('Usuarios');
export const Selos = database.collection('Selos')
export const SalasDeChat = database.collection('SalasDeChat')
export const Denuncias = database.collection('Denuncias')

