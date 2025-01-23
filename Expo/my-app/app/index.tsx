import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { items } from '@/assets/data';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes App</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: "/notes/[id]", params: { id: item.id } })
            }
          >
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardBody}>{item.body}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
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
  card: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    width: "90%"
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "white"
  },
  cardBody: {
    fontSize: 14,
    color: "#ccc"
  }
});
