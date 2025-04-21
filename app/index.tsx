import { Stack, Link } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <SafeAreaView>
        <Text>Root</Text>
      </SafeAreaView>
    </>
  );
}
