import { Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <ToastProvider offsetTop={insets.top} offsetBottom={insets.bottom}>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: false, title: 'Shop' }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: false, title: 'Categories' }}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: false, title: 'Product' }}
        />
        <Stack.Screen
          name="cart"
          options={{ presentation: 'modal', title: 'Shopping Cart' }}
        />
        <Stack.Screen name="auth" options={{ headerShown: true }} />
      </Stack>
    </ToastProvider>
  );
}
