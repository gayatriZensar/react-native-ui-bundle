import {View, Alert } from 'react-native';
import { CustomButton } from 'react-native-ui-bundle';

export default function App() {
 
  return (
    <View>
    <CustomButton title="Click Me" onPress={() => Alert.alert('Button Pressed!')} />
  </View>
  );
}


