import { useFocusEffect, useNavigation } from 'expo-router';
import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';

const JobsPostedScreen = () => {
  const navigation = useNavigation();
  var data = [];

  // const [fontsLoaded] = useFonts({
  //   'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }


  useFocusEffect(() => {
    for (var i = 0; i < 50; i++) {
      data.push(i);
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.headerTitle}>Manage Posts</Text>,
      // headerStyle: styles.headerStyle,
    });
  }, [navigation]);

  const Button = ({ onPress, isDisabled, title }) => (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: isDisabled ? '#555' : '#00de62' }]} 
      onPress={onPress} 
      >
      <Text style={[styles.buttonText, { color: isDisabled ? '#ddd' : '#000' }]}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.jobTitle}>Customer Service Sales Associate</Text>
      <Text style={styles.company}>Shah And Anchor Kutchhi Engineering College • Mumbai (On-site)</Text>
      <Text style={styles.status}>
        <Text style={styles.active}>Active</Text> • Posted Today
      </Text>
      <Text style={styles.stats}>0 applicants • {item} views</Text>
      <Text style={styles.jobType}>Free job post</Text>

      <View>
        <Text style={styles.descriptionTitle}>Job Description</Text>
        <Text style={styles.descriptionText} numberOfLines={2} ellipsizeMode="tail">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ducimus neque ipsum, laborum minus molestiae consequatur doloremque totam officia.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate('Applicants')} isDisabled={false} title={'Applicants'} />
        <Button onPress={() => console.log('Disable Job Clicked')} isDisabled={true} title={'Disable Job'} />
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  // headerStyle: {
  //   backgroundColor: '#00de62',
  // },
  headerTitle: {
    fontSize: 20,
    // fontWeight: 'bold',
    // color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  post: {
    backgroundColor: '#1e1e1e',
    marginVertical: 12,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  company: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 4,
  },
  active: {
    color: '#00de62',
    fontWeight: 'bold',
  },
  stats: {
    fontSize: 12,
    color: '#bbb',
    marginBottom: 4,
  },
  jobType: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#ddd',
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 6,
    elevation: 3,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default JobsPostedScreen;
