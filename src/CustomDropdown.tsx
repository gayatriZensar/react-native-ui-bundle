import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

interface DropdownItem {
  label: string;
  value: any;
}

interface DropdownProps {
  items: DropdownItem[];
  selected: DropdownItem | null;
  onSelect: (item: DropdownItem) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({ items, selected, onSelect }) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text>{selected?.label || 'Select an option'}</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: { padding: 16, borderColor: '#ccc', borderWidth: 1, borderRadius: 8 },
  modalContainer: { flex: 1, justifyContent: 'center', backgroundColor: '#000000aa' },
  option: { padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ddd' },
});

export default CustomDropdown;
