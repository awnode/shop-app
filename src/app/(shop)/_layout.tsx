import { FontAwesome } from '@expo/vector-icons';
import * as NavigationBar from 'expo-navigation-bar';
import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number;
}) {
  return <FontAwesome {...props} style={{ color: '#1BC464' }} />;
}

const TabsLayout = () => {
  useEffect(() => {
    NavigationBar.setButtonStyleAsync('dark');

    if (Platform.OS === 'android') {
      // Paksa status bar tidak memengaruhi layout
      // StatusBar.setTranslucent(false);
      StatusBar.setBarStyle('dark-content');
    }
  }, []);

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#1BC464',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Shop',
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="shopping-cart" />;
            },
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="book" />;
            },
            headerShown: false,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
