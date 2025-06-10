import TechNewsDetail from '@/components/TechNewsDetail';
import { useAppSelector } from '@/hooks/useAppStore';
import { HackerNewsItem } from '@/models/hackerNewsItem';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';

export default function TechNewsDetailScreen() {

  useEffect(() => {
  const backAction = () => {
    router.back();
    return true; 
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction
  );

  return () => backHandler.remove();
}, []);
  
  const newsItem: HackerNewsItem|undefined = useAppSelector((state) => state.techNewsReducer.selectedNews);
  if (!newsItem) return null;

  return <TechNewsDetail item={newsItem} />;
}
