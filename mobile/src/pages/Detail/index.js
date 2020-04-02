import React from 'react'
import { Feather } from '@expo/vector-icons'
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native'
import logoImg from '../../assets/logo.png'
import {useNavigation} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'
import styles from './styles'

export default function Detail(){

    const navigation = useNavigation()
    const message = 'Olá Apad, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00 '

    function navigateBack(){
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinha atropelada',
            recipients: ['pablo.bion@hotmail.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+554896691034&text=${message}`)
    }

    return (
        <View styles={styles.container}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg}></Image> 
                    <TouchableOpacity style={styles.voltar} onPress={navigateBack}>
                        <Feather name="arrow-left" size={28} color='red'/>
                    </TouchableOpacity>
                </View>
            </View>

        <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>Apadsss</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>

        <View style={styles.contactBox}>
            <Text style={styles.heroTitle}>Salve o dia!</Text>
            <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
            <Text style={styles.heroTitle}>Entre em contato:</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                    <Text style={styles.actionText}>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={sendMail}>
                    <Text style={styles.actionText} onPress={() => {}}>E-mail</Text>
                </TouchableOpacity>

            </View>
        </View>
        </View>
    )
}