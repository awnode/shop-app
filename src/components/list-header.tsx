import { CATEGORIES } from '@/assets/categories';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const imgUri =
  'https://images.pexels.com/photos/17567462/pexels-photo-17567462.jpeg?_gl=1*nlw6cd*_ga*NjkxMTMyODAzLjE3NjQ2NTkxNTM.*_ga_8JE65Q40S6*czE3NjQ2NTkxNTMkbzEkZzEkdDE3NjQ2NTkxNTckajU2JGwwJGgw';

export const ListHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTop}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: imgUri }} style={styles.avatarImage} />
            <Text style={styles.avatarText}>Hello World!</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Link href={'/cart'} asChild>
            <Pressable>
              {({ pressed }) => (
                <View>
                  <FontAwesome
                    name="shopping-cart"
                    size={25}
                    color="gray"
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />

                  <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{1}</Text>
                  </View>
                </View>
              )}
            </Pressable>
          </Link>
          <TouchableOpacity style={styles.signOutButton}>
            <FontAwesome name="sign-out" size={25} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.heroContainer}>
        <Image
          source={require('../../assets/images/hero.png')}
          style={styles.heroImage}
        />
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <Link asChild href={`/categories/${item.slug}`}>
              <Pressable style={styles.category}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryText}>{item.name}</Text>
              </Pressable>
            </Link>
          )}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarText: {
    fontSize: 16,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerContainer: {
    gap: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    top: -12,
    right: 10,
    backgroundColor: '#1BC464',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  heroContainer: {
    width: '100%',
    height: 200,
  },
  category: {
    width: 100,
    alignItems: 'center',
    marginBottom: 16,
  },
  categoriesContainer: {},
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  categoryText: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  signOutButton: {
    padding: 10,
  },
});
