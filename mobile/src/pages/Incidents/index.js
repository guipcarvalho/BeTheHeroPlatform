import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import logoImg from '../../assets/logo.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Incidents() {
    const navigation = useNavigation()

    const navigateToDetails = () => {
        navigation.navigate('Details')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>


            <FlatList
                data={[1, 2, 3]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={
                    () => (
                        <View style={styles.incidentList}>
                            <View style={styles.incident}>
                                <Text style={styles.incidentProperty}>ONG:</Text>
                                <Text style={styles.incidentValue}>APAD</Text>

                                <Text style={styles.incidentProperty}>CASO:</Text>
                                <Text style={styles.incidentValue}>Cachorro atropelado</Text>

                                <Text style={styles.incidentProperty}>VALOR:</Text>
                                <Text style={styles.incidentValue}>R$ 120,00</Text>

                                <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetails}>
                                    <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                                    <Feather name="arrow-right" size={16} color="#E02141" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
                />

            
        </View>
    )
}