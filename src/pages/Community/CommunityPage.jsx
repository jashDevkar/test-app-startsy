import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
const CommunityPage = () => {

  const navgiation = useNavigation();

  const [data, setData] = useState([
    { id: '1', name: 'Startsy user 1' },
    { id: '2', name: 'Startsy user 2' },
    { id: '3', name: 'Startsy user 3' },
    { id: '4', name: 'Startsy user 4' },
  ]);

  const addItem = () => {
    const newItem = { id: Math.random().toString(), name: `Startsy user ${data.length + 1}` };
    setData([...data, newItem]);
  };
  const removeItem = (itemId) => {
    setData(data.filter((item) => item.id !== itemId));
  };

  const clearItems = () => {
    setData([]);
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}

        ListHeaderComponent={
          // join community button
          <View style={styles.header}>
            <Button title="Add Item" onPress={addItem} />
            <Button title="Clear Items" onPress={clearItems} color="red" />
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navgiation.push("CommunityDetail", {
            itemId: item.id,
            name: item.name,

            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum adipisci quisquam alias inventore ad voluptas nam repellendus sint nesciunt odio, velit recusandae, maiores dolore suscipit reiciendis veritatis quibusdam voluptatibus.'
          })}
            >
            <LinearGradient colors={["rgba(33, 34, 35, 0.4)", "rgba(25, 26, 27, 0.6)"]} 
              style={styles.item}
              >

              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Image source={require('../../../assets/image.png')} style={{ width: '30', height: '30' }} />
                <Text style={styles.userNameStyle}>{item.name}</Text>
              </View>

              {/* question section */}
              <View>
                <Text numberOfLines={4} ellipsizeMode='tail' style={{color:'#999'}}>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eveniet rerum
                  adipisci quisquam
                  alias inventore ad
                  voluptas nam repellendus sint nesciunt odio, velit recusandae, maiores dolore suscipit reiciendis veritatis quibusdam voluptatibus.
                </Text>
              </View>



              <Text style={styles.totalRepliesText}> •12 Replies</Text>

            </LinearGradient>
          </TouchableOpacity>

        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#16181a',
    color:'white'
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
    padding: 15,
    gap: 10,
    // color:'white',
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
  }
});

export default CommunityPage