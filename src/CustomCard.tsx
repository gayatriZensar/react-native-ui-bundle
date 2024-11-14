import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, type ImageSourcePropType } from 'react-native';

interface CardProps {
  title: string;
  image?: ImageSourcePropType;
  content: string;
  onPress?: () => void;
}

const CustomCard: React.FC<CardProps> = ({ title, image, content, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
    {/* Circular image positioned above the card */}
    {image && <Image source={image} style={styles.image} />}
    
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    margin: 12,
    paddingTop: 40, // Space at the top for the overlapping image
    borderRadius: 16,
    backgroundColor: '#ffffff',
    elevation: 8, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    position: 'absolute',
    top: -40, // Positions image above the card content
    left: '50%',
    marginLeft: -40, // Centers the image horizontally
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#e0e0e0',
  },
  content: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default CustomCard;
