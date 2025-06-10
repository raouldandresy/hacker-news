import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TechNewsList from '../techNewsList';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <TechNewsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },
});
