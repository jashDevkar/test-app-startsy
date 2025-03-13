import { View, Image, StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const ProfilePage = ({progress = 0.8}) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={100}
        width={7}
        fill={progress*100}
        tintColor="white"
        backgroundColor="#3d5875"
        rotation={0}
        lineCap="round"
      >
        {() => (
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/image.png')} // Replace with your image URL
              style={styles.profileImage}
            />
            
          </View>
          
        )}
      </AnimatedCircularProgress>
        <Text style={styles.progressText}>{`${progress*100}%`}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
      },
      profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40, 
      },
      progressText: {
        position:'relative',
        zIndex:10,
        bottom:15,
        paddingHorizontal:10,
        paddingVertical:4,
        color:'white',
        backgroundColor:'green',
        borderRadius:10
      },
  });

export default ProfilePage