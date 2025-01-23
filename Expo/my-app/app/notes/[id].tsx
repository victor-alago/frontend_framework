import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { items } from '@/assets/data';

export default function NoteDetail() {
  const { id } = useLocalSearchParams();
  const note = items.find(item => item.id === id);

  if (!note) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Note not found</Text>
      </View>
    );
  }

  const index = items.findIndex(item => item.id === id);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{items[index].title}</Text>
      <Text style={styles.body}>{items[index].body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20
  },
  title: {
    fontSize: 24,
    color: "white",
    marginBottom: 10
  },
  body: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center"
  }
});
