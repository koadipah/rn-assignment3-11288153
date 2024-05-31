import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

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
      <Text style = {{fontSize: 30, fontWeight: 'bold', marginBottom: 2}}>Categories</Text>
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
  
});
