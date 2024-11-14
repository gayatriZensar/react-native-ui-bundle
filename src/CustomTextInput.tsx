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
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.errorBorder]}
        placeholder={placeholder}
        maxLength={maxLength}
        onChangeText={setText}
        value={text}
        {...props}
      />
      {maxLength && (
        <Text style={styles.counter}>{`${text.length} / ${maxLength}`}</Text>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  label: { marginBottom: 4 },
  input: { padding: 12, borderRadius: 8, borderWidth: 1 },
  errorBorder: { borderColor: 'red' },
  counter: { alignSelf: 'flex-end', fontSize: 12, color: 'gray' },
  errorText: { color: 'red', fontSize: 12 },
});

export default CustomTextInput;
