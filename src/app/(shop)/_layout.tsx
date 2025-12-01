import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabsLayout = () => {
  return (
    <SafeAreaView>
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#1BC464'
      }}>
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="orders" options={{}} />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
