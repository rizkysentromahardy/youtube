import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';

const data = [
    {
        cover: require('../assets/gambar/tami.jpg'),
        icon: require('../assets/gambar/tamiprofile.jpg'),
        judul: 'TAMI AULIA COVER FULL DEWA 19',
        durasi: 'Tami aulia · 39 rb x ditonton · 10 jam lalu'
    },
    {
        cover: require('../assets/gambar/mancing.jpg'),
        icon: require('../assets/gambar/trans7.png'),
        judul: 'MANCING MANIA EPISODE MONSTER KERAPU',
        durasi: 'Trans 7 · 1 jt x ditonton · 1 tahun lalu'
    },
    {
        cover: require('../assets/gambar/nex.jpg'),
        icon: require('../assets/gambar/nexprofile.png'),
        judul: 'MAKAN BARENG MAGDALENA ',
        durasi: 'Nex Carlos · 100 rb x ditonton · 17 jam lalu'
    }
];



const home = () => {
    const navigation = useNavigation();
    const _render = ({ item }) => (
        <View>
            <Image style={{
                height: 200,
                width: '100%',
                resizeMode: 'cover'
            }}
                source={item.cover} />
            <View style={styles.coloumDesc}>
                <TouchableHighlight style={styles.profile}>
                    <Image
                        style={styles.profileImg}
                        source={item.icon}
                    />
                </TouchableHighlight>
                <View >
                <Text style={styles.description}>
                    {item.judul}
                </Text>
                <Text style={styles.durasion}> {item.durasi}</Text>
            </View>
            </View>
            
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={_render}
                >
                </FlatList>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('list')}>
            <Text>Go to detail screen</Text>
          </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222f3e',
        flex: 1
    },
    card: {
        backgroundColor: '#222f3e',
        elevation: 8,
    },
    coloumDesc: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    description: {
        color: '#fff',
        fontSize: 15,
        paddingLeft:3
    },
    durasion: {
        color: '#fff',
        paddingVertical: 2,
        fontSize:12
    },
    profile: {
        marginHorizontal: 15,
        height: 40,
        width: 40,
        borderRadius: 40,
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 40,
    }
})
export default home;

