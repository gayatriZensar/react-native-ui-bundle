import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e57373', // Red color
    paddingVertical: 14,  // Increased padding for a larger button
    paddingHorizontal: 24,
    borderRadius: 12,  // More rounded corners for a modern look
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,  // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
  },
  text: {
    color: '#fff', // White text
    fontSize: 18,  // Slightly larger text
    fontWeight: 'bold',  // Bold text for emphasis
    textAlign: 'center',
  },
});

export default CustomButton;
