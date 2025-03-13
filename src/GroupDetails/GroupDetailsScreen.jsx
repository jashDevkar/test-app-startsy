import { useState } from "react";
import participants from "./Data.jsx";
import { FlatList } from "react-native-gesture-handler";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const GroudDetailsScreen = () => {

    const [data, setData] = useState(participants);


    const toggleFollow = (id) => {
        setData((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, followed: !user.followed } : user
            )
        );
    };

    const ListHeader = () => (<View style={{ alignItems: "center", marginBottom: 10 }}>
        <Image
            source={require('../../assets/image.png')}
            style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={styles.groupName}>
            Group Name
        </Text>
        <Text style={styles.description}>
            This is the group description. It provides an overview of the group.
        </Text>
    </View>
    )

    return (
        <View style={styles.page}>
            <FlatList
                contentContainerStyle={{ padding: 20 }}
                ListHeaderComponent={
                    <ListHeader />
                }
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onLongPress={() => console.log('Long pressed')}>
                        <View
                            style={styles.listContainer}
                        >
                            <View style={styles.userInfoStyle}>
                                <Image width={20} height={20} source={require('../../assets/image.png')} style={{ width: 40, height: 40 }} />
                                <Text style={{ fontSize: 16 }}>{item.name}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => toggleFollow(item.id)}
                                style={[styles.toggleFollow, { backgroundColor: item.followed ? "#ff5c5c" : "#4CAF50", }]}
                            >
                                <Text style={{ color: "white", fontWeight: "bold" }}>
                                    {item.followed ? "Unfollow" : "Follow"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
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
        marginVertical: 5,
        borderRadius: 10,
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

export default GroudDetailsScreen;