import React, {useState, useEffect} from 'react'
import { Feather} from '@expo/vector-icons'
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native'
import logoImg from '../../assets/logo.png'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
import api from '../../services/api'


export default function Incidents(){
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)
    const navigation = useNavigation()

    function navigateToDetail(){
        navigation.navigate('Detail')
    }

    async function loadIncident(){
        const response = await api.get('incidents')
        setIncidents(response.data)
        setTotal(response.headers['x-total-count'])
    }

    useEffect(() =>{
        loadIncident()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}></Image>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
                </Text>
            </View>
        <Text style={styles.title}>Bem-Vindo!</Text>
        <Text style={styles.description}>escolha um dos casos abaixo e salve o dia.</Text>

        <FlatList 
            style={styles.incidentList} //passando o css para a incident list
            data={incidents}
            showsVerticalScrollIndicator={false} //removendo os scroll do lado
            keyExtractor={incident => String(incident.id)} // key unica (o read pede isso)
            renderItem={({item: incident}) => (
                <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
                    style: 'currency', 
                    currency: 'BRL' }).format(incident.value)}</Text>

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