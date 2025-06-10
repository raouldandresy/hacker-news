import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HackerNewsItem } from '@/models/hackerNewsItem';
import React from 'react';
import { Button, Linking, ScrollView, StyleSheet } from 'react-native';

interface TechNewsDetailProps {
  item: HackerNewsItem;
}

export default function TechNewsDetail({ item }: TechNewsDetailProps) {
  const openUrl = () => {
    if (item.url) {
      Linking.openURL(item.url).catch(() =>
        alert('Impossibile aprire il link')
      );
    } else {
      alert('URL non disponibile');
    }
  };

  const formatDate = (unixTime?: number) => {
    if(!unixTime)
        return "";
    const date = new Date(unixTime * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText style={styles.title}>{item.title}</ThemedText>
        <ThemedText style={styles.info}>Autore: {item.by}</ThemedText>
        <ThemedText style={styles.info}>Data: {formatDate(item.time)}</ThemedText>
        <ThemedText style={styles.info}>Punteggio: {item.score}</ThemedText>
        <ThemedText style={styles.info}>Commenti: {item.descendants ?? 0}</ThemedText>
        <Button title="Apri articolo originale" onPress={openUrl} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    paddingBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
});
