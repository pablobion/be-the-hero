import React from 'react'
import { Feather} from '@expo/vector-icons'
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native'
import logoImg from '../../assets/logo.png'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
export default function Incidents(){
    const navigation = useNavigation()

    function navigateToDetail(){
        navigation.navigate('Detail')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
            </View>
        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.description}>escolha um dos casos abaixo e salve o dia.</Text>

        <FlatList 
            style={styles.incidentList} //passando o css para a incident list
            data={[1,2,3]}
            showsVerticalScrollIndicator={false} //removendo os scroll do lado
            keyExtractor={incident => String(incident)} // key unica (o read pede isso)
            renderItem={() => (
                <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>Apadsss</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>

                <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={navigateToDetail}
                >
                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#E02141"/>
                </TouchableOpacity>
            </View>
            )}
        />

  


        </View>
    )
}