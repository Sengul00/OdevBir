/// <reference types="nativewind/types" />

import React, { useState } from 'react';
import "./global.css";
import { Text, View, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { activities } from './src/data/db';


declare module 'react-native' {
  interface ViewProps { className?: string; }
  interface TextProps { className?: string; }
  interface TouchableOpacityProps { className?: string; }
}
declare module 'react-native-safe-area-context' {
  interface NativeSafeAreaViewProps { className?: string; }
};
export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });


  const [suggestion, setSuggestion] = useState<string>("Butona bas ve gününü güzelleştir! ✨");
  

  const [scaleAnim] = useState(new Animated.Value(1));


  const handlePress = () => {

    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.9, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();


    const randomIndex = Math.floor(Math.random() * activities.length);
    setSuggestion(activities[randomIndex]);
  };


  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-kawaii-pink items-center justify-center">
      <StatusBar barStyle="dark-content" />
      
      {/* Arka plan süslemeleri (Baloncuklar) */}
      <View className="absolute top-10 left-[-20] w-32 h-32 bg-kawaii-blue rounded-full opacity-50" />
      <View className="absolute bottom-20 right-[-10] w-40 h-40 bg-kawaii-cream rounded-full opacity-50" />
      <View className="absolute top-1/3 right-10 w-10 h-10 bg-kawaii-purple rounded-full opacity-40" />

      {/* Ana Kart */}
      <View className="w-11/12 bg-white/90 p-8 rounded-[40px] shadow-lg items-center border-4 border-white">
        
        {/* Başlık */}
        <Text className="text-3xl text-kawaii-dark text-center mb-8 font-nunito">
          Bugün Ne Yapalım? 🐱
        </Text>

        {/* Öneri Alanı */}
        <View className="h-40 justify-center items-center w-full bg-kawaii-cream/30 rounded-3xl p-4 mb-8 border-2 border-dashed border-kawaii-purple/30">
          <Text className="text-xl text-center text-gray-700 font-nunitoReg leading-8">
            {suggestion}
          </Text>
        </View>

        {/* Buton */}
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }} className="w-full">
          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={handlePress}
            className="bg-kawaii-purple w-full py-5 rounded-full shadow-md items-center border-b-4 border-b-purple-400"
          >
            <Text className="text-white text-xl font-nunito tracking-wider">
              Bana Fikir Ver!
            </Text>
          </TouchableOpacity>
        </Animated.View>

      </View>
      
      {/* Alt Bilgi */}
      <Text className="absolute bottom-10 text-gray-500 font-nunitoReg text-xs">
        Made with 💖 by Şengül Balta
      </Text>
    </SafeAreaView>
  );
}