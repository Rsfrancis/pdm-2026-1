import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput, useColorScheme } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [idade, setIdade] = useState('');
  const colorScheme = useColorScheme();

  const anoAtual = new Date().getFullYear();
  const anoNascimento = idade ? anoAtual - parseInt(idade) : null;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Campo idade */}
      <ThemedView style={styles.inputContainer}>
        <ThemedText type="subtitle">Digite aqui sua idade</ThemedText>
        <TextInput
  style={[
    styles.input,
    { color: colorScheme === 'dark' ? '#fff' : '#000' }
  ]}
  placeholder="Digite aqui sua idade"
  placeholderTextColor={colorScheme === 'dark' ? '#aaa' : '#666'}
  value={idade}
  onChangeText={setIdade}
  keyboardType="numeric"
/>

        {/* Resultado */}
        {anoNascimento && (
          <ThemedText type="subtitle">
            Seu ano de nascimento é {anoNascimento}
          </ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputContainer: {
    gap: 8,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});