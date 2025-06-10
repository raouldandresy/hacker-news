import TechNewsCard from '@/components/TechNewsCard';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppStore';
import { HackerNewsItem } from '@/models/hackerNewsItem';
import TechNewsThunks from '@/store/techNews/action';
import { setSelectedNews } from '@/store/techNews/slice';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useMemo } from 'react';
import { ActivityIndicator, Alert, BackHandler, FlatList, ListRenderItem, StyleSheet } from 'react-native';

export default function TechNewsList() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.techNewsReducer.loading);
  const error = useAppSelector((state) => state.techNewsReducer.error);
  const techList = useAppSelector((state) => state.techNewsReducer.techListWithDetails);
  const router = useRouter();
  
  useEffect(() => {
    dispatch(TechNewsThunks.fetchTechListIds());
  }, [dispatch]);

  useEffect(() => {
  const backAction = () => {
    Alert.alert('Esci dall’app?', 'Vuoi davvero uscire?', [
      {
        text: 'Annulla',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'Sì', onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction
  );

  return () => backHandler.remove();
}, []);


 const onPressItem = useCallback(
  (item: HackerNewsItem) => {
    dispatch(setSelectedNews(item));
    router.push({
      pathname: '/techNewsDetail',
    });
  },
  [dispatch, router]
);

  const renderTechNewsItem = useCallback<ListRenderItem<HackerNewsItem>>(
    ({ item }) => <TechNewsCard item={item} onPress={onPressItem}/>,
    [onPressItem]
  );

  const ListHeaderComponent = useMemo(
    () => <ThemedText style={styles.pageTitle}>Tech News</ThemedText>,
    []
  );

  const onRefresh = () => {
    if(!loading){
      dispatch(TechNewsThunks.fetchTechListIds())
    }
  }

  if (loading && techList.length === 0) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

if (error) {
  return (
    <ThemedView style={styles.errorContainer}>
      <ThemedText style={styles.errorEmoji}>🤖</ThemedText>
      <ThemedText style={styles.errorTitle}>Oops! Something went wrong</ThemedText>
      <ThemedText style={styles.errorMessage}>
        {error.includes('Network') 
          ? 'Please check your internet connection and try again.' 
          : 'Unable to load tech news. Try again later.'}
      </ThemedText>
      <ThemedText style={styles.retryButton} onPress={onRefresh}>
        🔄 Retry
      </ThemedText>
    </ThemedView>
  );
}


  return (
    <ThemedView style={styles.container}>
     <FlatList
        data={techList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTechNewsItem}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        refreshing={loading} 
        onRefresh={onRefresh} 
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,     
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  errorEmoji: {
    fontSize: 64,
    marginBottom: 12,
  },
  errorTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: '#FF3B30',
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignSelf: 'center'
  },
});
