import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import Svg, { Path } from 'react-native-svg';


const CommunityDetail = ({ route }) => {
    const [name, setName] = useState("")
    const [question, setQuestion] = useState("");
    const [inputValue, setInputValue] = useState('');


    const params = route.params;
    useEffect(() => {
        console.log(params);
        setName(params.name);
        setQuestion(params.description);
    }, []);


    const CurvedLine = () => (
        <Svg height="80" width="30" style={{position:'absolute',top:'20%',left:'2%',zIndex:-1,height:100}}>
          <Path d="M10 0 V30 Q10 40, 20 40" stroke="#ccc" strokeWidth="2" fill="none" />
        </Svg>
      );



    return (
        <View style={{ flex: 1, backgroundColor: '#16181a' }} >
            <FlatList
                ListHeaderComponent={

                    <LinearGradient style={styles.item} colors={["rgba(33, 34, 35, 0.4)", "rgba(25, 26, 27, 0.6)"]}>
                        <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <Image source={require('../../../assets/image.png')} style={{ width: '30', height: '30' }} />
                            <Text style={styles.userNameStyle}>{name}</Text>
                        </View>

                        {/* question section */}
                        <View style={{ paddingHorizontal: 10, gap: 5 }}>
                            <Text style={{color:'white'}}>
                                Question:
                            </Text>
                            <Text style={{ color: 'white' }} ellipsizeMode='tail' >
                                {question}
                            </Text>
                        </View>


                        <View style={styles.replyContainer}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                <AntDesign name="hearto" size={24} color="white" />

                            </View>
                            <TouchableOpacity >
                                <Text style={{ color: 'white' }}>send</Text>

                            </TouchableOpacity>
                        </View>


                    </LinearGradient>

                }
                data={new Array(50)}
                renderItem={() =>

                    <LinearGradient style={[styles.listItem, styles.commentContainer]} colors={["rgba(33, 34, 35, 0.4)", "rgba(25, 26, 27, 0.6)"]}>
                        
                        <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <Image source={require('../../../assets/image.png')} style={{ width: '30', height: '30' }} />
                            <Text style={styles.userNameStyle}>Reply User</Text>
                        </View>
                        <View style={styles.replyLine} />
                        {/* reply section */}
                        <View style={{ paddingHorizontal: 50, paddingBottom: 10 }}>
                            <Text style={{ color: 'white' }} ellipsizeMode='tail' >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, orci vel convallis lobortis, felis mauris ultricies velit, at fringilla mi velit vel lectus. Sed vel libero in nunc faucibus molestie. Donec vel justo vel justo viverra efficitur.
                            </Text>
                        </View>
                    </LinearGradient>

                }
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderTopWidth: 1, borderColor: '#ccc' }}>
                <TextInput
                    style={{ borderColor: 'white', borderWidth: 1, height: 50, flex: 1, padding: 10 }}
                    placeholder='Reply'
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <Pressable onPress={() => console.log("hello")
                } style={{ marginLeft: 10, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
                    <Text style={{ color: 'white' }}>Send</Text>
                </Pressable>
            </View>

        </View>
    )




}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        // paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 10,
        gap: 10
    },
    item: {
        // padding: 15,
        gap: 10,
        // backgroundColor: '#f9f9f9',
        marginVertical: 5,

        borderRadius: 5,
        paddingBottom: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    replyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        paddingTop: 8,
        paddingHorizontal: 10,
        borderTopColor: 'white',
        borderTopWidth: 1
    },
    listItem: {
        gap: 10,
        flex: 1,
        // backgroundColor: '#f9f9f9',
        marginVertical: 5,
        borderRadius: 5,

    },
    totalRepliesText: {
        alignItems: 'center',
        fontSize: 12,
        paddingTop: 5,
        color: 'gray'

    },
    userNameStyle: {
        fontWeight: 'bold',
        color: 'white',
    },
    replyLine: {
        width: 2,
        backgroundColor: '#ccc',
        position: 'absolute',
        left: 18,
        top: 10,
        bottom: 5,
        zIndex:-1
    },
});

export default CommunityDetail