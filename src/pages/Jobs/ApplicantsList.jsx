    import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
    import React, { useCallback, useMemo, useRef, useState } from 'react'
    import data from '../../GroupDetails/Data'
    import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
    import Ionicons from '@expo/vector-icons/Ionicons';
    import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
    import BottomSheetContent from '../Jobs/BottomSheetContent'

    const ApplicantsList = () => {
        // const snapPoints = useMemo(() => ['20%'], []);
        const bottomSheetRef = useRef(null);
        const [name,setName] = useState("")
        // let selectedRef = useRef("")
        const open = useCallback((name) => {
           
            setName(name)
           
            setTimeout(()=>{
                bottomSheetRef.current?.expand();
            },250)
        
             
        }, []);

        

        const OpenBottomSheet = () => (
            <BottomSheet
                overlayColor="rgba(0, 0, 0, 0.9)"
                enablePanDownToClose
                backgroundStyle={{ backgroundColor: '#16181a', borderRadius: 30 }}
                handleIndicatorStyle={{ backgroundColor: '#00de62' }}
                style={{ zIndex: 100000, elevation: 1000 }}
                enableDynamicSizing={false}
                ref={bottomSheetRef}
                snapPoints={['30%']}
                index={-1}
            >
                <Text style={{textAlign:'center',color:'white'}}>Connect to {name}</Text>
                <BottomSheetContent/>
            </BottomSheet>
        );


        return (
            <GestureHandlerRootView>
                <View style={{ backgroundColor: "#16181a" }}>
                    <FlatList

                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onLongPress={() => console.log('Long pressed')} >
                                <View
                                    style={styles.listContainer}
                                >
                                    <View style={styles.userInfoStyle}>
                                        <Image width={20} height={20} source={require('../../../assets/image.png')} style={{ width: 40, height: 40 }} />
                                        <Text style={{ fontSize: 16 }}>{item.name}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => open(item.name)}

                                        style={[styles.toggleFollow, { backgroundColor: item.followed ? "#ff5c5c" : "#4CAF50", }]}
                                    >
                                        <Text style={{ color: "white", fontWeight: "bold" }}>
                                            Contact
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </TouchableOpacity>
                        )} />

                </View>
                <OpenBottomSheet />
            </GestureHandlerRootView>
        )
    }




    const styles = StyleSheet.create({
        page: {
            backgroundColor: 'black'
        },
        groupName: {
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 10,
            color: "white"
        },
        description: {
            fontSize: 14,
            textAlign: "center",
            color: "gray",
        },
        listContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
            backgroundColor: "gray",
            borderBottomColor: "rgba(33, 34, 35, 0.4)",
            borderBottomWidth: 2
            // marginVertical: 5,
            // borderRadius: 10,
        },
        toggleFollow: {

            paddingVertical: 5,
            paddingHorizontal: 15,
            borderRadius: 5,
        },
        userInfoStyle: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10
        },
    });



    export default ApplicantsList




