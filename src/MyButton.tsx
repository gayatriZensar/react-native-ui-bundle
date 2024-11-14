import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MyButtonProps {
  title: string;
  onPress: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default MyButton;
