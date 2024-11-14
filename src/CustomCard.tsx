import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, type ImageSourcePropType } from 'react-native';

interface CardProps {
  title: string;
  image?: ImageSourcePropType;
  content: string;
  onPress?: () => void;
}

const CustomCard: React.FC<CardProps> = ({ title, image, content, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    {image && <Image source={image} style={styles.image} />}
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { margin: 8, borderRadius: 8, overflow: 'hidden', backgroundColor: 'white', elevation: 4 },
  image: { width: '100%', height: 150 },
  content: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold' },
  text: { fontSize: 14, color: 'gray' },
});

export default CustomCard;
