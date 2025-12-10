import { ORDERS } from '@/assets/orders';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const OrderDetails = () => {
  const { slug } = useLocalSearchParams();

  const order = ORDERS.find((order) => order.slug === slug);

  if (!order) return <Redirect href="/404" />;

  return (
    <View>
      <Stack.Screen options={{ title: `${order.item}` }} />
      <Text style={styles.orderText}>{order.item} </Text>
      <Text style={styles.orderText}>{order.date} </Text>
      <Text style={styles.orderText}>{order.details} </Text>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  orderText: {
    padding: 16,
  },
});
