import { ORDERS } from '@/assets/orders';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const OrderDetails = () => {
  const { slug } = useLocalSearchParams();

  const order = ORDERS.find((order) => order.slug === slug);

  if (!order) return <Redirect href="/404" />;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `${order.item}`,
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Text style={styles.item}>{order.item} </Text>
      <Text style={styles.details}>{order.details} </Text>
      <View style={[styles.statusBadge, styles[`statusBadge_${order.status}`]]}>
        <Text style={styles.statusText}>{order.status}</Text>
      </View>
      <Text style={styles.date}>{order.date} </Text>
      <Text style={styles.itemsTitle}>Items Ordered</Text>
      <FlatList
        data={order.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Image source={item.heroImage} style={styles.heroImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemPrice}>Price: ${item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  item: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 16,
  },
  date: {},
  statusBadge: {
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  statusBadge_Pending: {
    backgroundColor: '#ffcc00',
  },
  statusBadge_Completed: {
    backgroundColor: '#4de366',
  },
  statusBadge_Shipped: {
    backgroundColor: '#5baef7',
  },
  statusBadge_InTransit: {
    backgroundColor: '#ff9500',
  },
  itemsTitle: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  heroImage: {
    width: '45%',
    height: 130,
    borderRadius: 10,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 7,
  },
  itemInfo: {
    paddingHorizontal: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    marginTop: 4,
  },
});
