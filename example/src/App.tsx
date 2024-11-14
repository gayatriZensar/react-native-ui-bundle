import {View, Alert } from 'react-native';
import { MyButton } from 'react-native-ui-bundle';

export default function App() {
 
  return (
    <View>
    <MyButton title="Click Me" onPress={() => Alert.alert('Button Pressed!')} />
  </View>
  );
}


