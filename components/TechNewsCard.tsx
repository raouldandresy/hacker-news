import { HackerNewsItem } from "@/models/hackerNewsItem";
import { Pressable, StyleSheet } from 'react-native';
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function TechNewsCard({ item, onPress }: { item: HackerNewsItem, onPress: (item: HackerNewsItem)=> void }) {

  const onPressItem = () => {
    onPress && onPress(item);
  }

    return (
      <Pressable onPress={onPressItem}>
        <ThemedView type="card" style={styles.card}>
            <ThemedText type="title">{item.title ?? 'No title'}</ThemedText>
            <ThemedText type="subtitle">Autore: {item.by ?? 'Sconosciuto'}</ThemedText>
             <ThemedView type="card" style={styles.rowContainer}>
                <ThemedText type="comment">Punteggio: {item.score ?? 0}</ThemedText>
                <ThemedText type="comment">Commenti: {item.descendants ?? 0}</ThemedText>
             </ThemedView>
        </ThemedView>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
