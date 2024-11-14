import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, type TextInputProps } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  maxLength?: number;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  placeholder,
  error,
  maxLength,
  ...props
}) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      {/* Label */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Text Input Field */}
      <TextInput
        style={[styles.input, error && styles.errorBorder, text ? styles.filled : styles.empty]}
        placeholder={placeholder}
        maxLength={maxLength}
        onChangeText={setText}
        value={text}
        {...props}
      />

      {/* Character counter */}
      {maxLength && (
        <Text style={styles.counter}>{`${text.length} / ${maxLength}`}</Text>
      )}

      {/* Error Message */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android
  },
  errorBorder: {
    borderColor: '#f44336', // Red border color for error state
  },
  filled: {
    backgroundColor: '#ffffff', // White background when the input is filled
  },
  empty: {
    backgroundColor: '#f8f8f8', // Light gray background when input is empty
  },
  counter: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  errorText: {
    color: '#f44336', // Red text color for error
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomTextInput;
