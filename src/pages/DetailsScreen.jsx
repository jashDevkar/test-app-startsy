import { View, Text, Pressable, TextInput, KeyboardAvoidingView, Platform, FlatList } from 'react-native'
import React, { useLayoutEffect, useState, useRef, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = () => {
    const navigation = useNavigation();
    const [message, setMessage] = useState([]);
    const [input, setInput] = useState("");
    const flatListRef = useRef();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "",
            headerLeft: () => (
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text>Back</Text>
                    </Pressable>
                    <Text>image</Text>
                    <Text>User name</Text>
                </View>
            )
        });
    }, []);

    const sendMessage = () => {
        if (input.trim()) {
            setMessage(prevMessages => [...prevMessages, input]);
            setInput("");
            setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
        }
    };

    return (

         <KeyboardAvoidingView 
            
            style={{ flex: 1 ,backgroundColor : "black"}}
        >
            <View style={{ flex: 1 }}>
                {/* FlatList with flex to allow input field at bottom */}
                <FlatList
                    ref={flatListRef}
                    data={message}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ marginBottom: 5, padding: 10, backgroundColor: '#ddd', borderRadius: 5 }}>
                            <Text>{item}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ flexGrow: 1, padding: 10 ,  }}
                    onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
                />
                
                {/* Input Field Stays at Bottom */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    borderTopWidth: 1,
                    borderColor: '#ccc',
                    backgroundColor: 'black',

                }}>
                    <TextInput
                        style={{ borderColor: "red", borderWidth: 1, height: 50, flex: 1, padding: 10 }}
                        placeholder='Type here'
                        value={input}
                        onChangeText={setInput}
                    />
                    <Pressable onPress={sendMessage} style={{ marginLeft: 10, padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
                        <Text style={{ color: 'white' }}>Send</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
  
    );
}

export default DetailsScreen;
