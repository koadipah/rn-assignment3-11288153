import { StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.profileContainer}>
        <View>
          <Text style = {{fontSize: 30, fontWeight: 'bold', marginBottom: 2}}>Hello,   Devs </Text>
          <Text>14 task for today</Text>
        </View>
        <View>
          <Image source={require('./assets/person.png')} style = {{marginRight: 5 }} />
        </View>
      </View>
      <View>
        <Image source={require('./assets/Search.png')} style = {{marginBottom: 50}}/>
      </View>
      <Text style = {{fontSize: 30, fontWeight: 'bold', marginBottom: 20}}>Categories</Text>
      <View>
        <ScrollView  horizontal={true}>
          <View style = {styles.categoryContainer}>
            <Image source={require('./assets/young woman working online.png')} style = {styles.categoryImage}/>
            <View style = {styles.textContainer}>
              <Text style={styles.categoryText}>Exercise</Text>
              <Text>12 task</Text>
            </View>
          </View>
          <View>
            <View style = {styles.categoryContainer}>
              <Image source={require('./assets/young woman working at desk.png')} style = {styles.categoryImage}/>
              <View style = {styles.textContainer}>
                <Text style={styles.categoryText}>Study</Text>
                <Text>12 task</Text>
              </View>
            </View>
          </View>
          <View>
            <View style = {styles.categoryContainer}>
              <Image source={require('./assets/code.jpeg')} style = {styles.categoryImage}/>
              <View style = {styles.textContainer}>
                <Text style={styles.categoryText}>Code</Text>
                <Text>12 task</Text>
              </View>
            </View>
          </View>
          <View>
            <View style = {styles.categoryContainer}>
              <Image source={require('./assets/cook2.jpeg')} style = {styles.categoryImage}/>
              <View style = {styles.textContainer}>
                <Text style={styles.categoryText}>Cook</Text>
                <Text>12 task</Text>
              </View>
            </View>
          </View>
          <View>
            <View style = {styles.categoryContainer}>
              <Image source={require('./assets/sleep2.jpeg')} style = {styles.categoryImage}/>
              <View style = {styles.textContainer}>
                <Text style={styles.categoryText}>Sleep</Text>
                <Text>12 task</Text>
              </View>
            </View>
          </View>
          <View>
            <View style = {styles.categoryContainer}>
              <Image source={require('./assets/game2.png')} style = {styles.categoryImage}/>
              <View style = {styles.textContainer}>
                <Text style={styles.categoryText}>Games</Text>
                <Text>12 task</Text>
              </View>
            </View>
          </View>
          <View>
            <View style = {styles.categoryContainer}>
              <Image source={require('./assets/read.png')} style = {styles.categoryImage}/>
              <View style = {styles.textContainer}>
                <Text style={styles.categoryText}>Reading</Text>
                <Text>12 task</Text>
              </View>
            </View>
          </View>
          <View>
            <View style = {styles.categoryContainer}>
              <Image source={require('./assets/exercise.jpeg')} style = {styles.categoryImage}/>
              <View style = {styles.textContainer}>
                <Text style={styles.categoryText}>Yoga</Text>
                <Text>12 task</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e2d3',
    paddingTop: 70,
    paddingHorizontal: 25
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    marginBottom: 20
  },
  categoryContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 20,
    width: 220,
    height: 250,
    position: 'relative', // Added for positioning the text container
  },
  categoryImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  textContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5, // Optional: Add padding for better readability
    borderRadius: 5, // Optional: Add border radius for better aesthetics
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
