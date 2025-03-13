// import { useState } from "react";
// import participants from "./Data.jsx";
// import { FlatList } from "react-native-gesture-handler";
// import { Image, Text, TouchableOpacity, View } from "react-native";



// const RenderItems = () => {

//     const [data, setData] = useState(participants);


//     const toggleFollow = (id) => {
//         setData((prev) =>
//             prev.map((user) =>
//                 user.id === id ? { ...user, followed: !user.followed } : user
//             )
//         );
//     };

//     return (
//         <FlatList
//             ListHeaderComponent={
//                 <View style={{ alignItems: "center", marginBottom: 10 }}>
//                 <Image
//                   source={{ uri: "https://via.placeholder.com/150" }}
//                   style={{ width: 100, height: 100, borderRadius: 50 }}
//                 />
//                 <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 10 }}>
//                   Group Name
//                 </Text>
//                 <Text style={{ fontSize: 14, textAlign: "center", color: "gray" }}>
//                   This is the group description. It provides an overview of the group.
//                 </Text>
//               </View>
//             }
//             data={data}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//                 <View
//                     style={{
//                         flexDirection: "row",
//                         justifyContent: "space-between",
//                         alignItems: "center",
//                         padding: 15,
//                         backgroundColor: "white",
//                         marginVertical: 5,
//                         borderRadius: 10,
//                     }}
//                 >
//                     <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
//                         <Image width={20} height={20} source={require('../../assets/image.png')} style={{ width: 40, height: 40 }} />
//                         <Text style={{ fontSize: 16 }}>{item.name}</Text>
//                     </View>
//                     <TouchableOpacity
//                         onPress={() => toggleFollow(item.id)}
//                         style={{
//                             backgroundColor: item.followed ? "#ff5c5c" : "#4CAF50",
//                             paddingVertical: 5,
//                             paddingHorizontal: 15,
//                             borderRadius: 5,
//                         }}
//                     >
//                         <Text style={{ color: "white", fontWeight: "bold" }}>
//                             {item.followed ? "Unfollow" : "Follow"}
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             )} />)
// }


// export default RenderItems;