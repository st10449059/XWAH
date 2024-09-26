import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesPage from './course'; 
import ContactPage from './contact'; 
import CartScreen from './cart';




const items = [
  { id: 1, name: 'Child minding', price: 750 },
  { id: 2, name: 'Cooking', price: 750 },
  { id: 3, name: 'Garden maintenance', price: 750 },
  { id: 5, name: 'First Aid', price: 1500 },
  { id: 6, name: 'Sewing', price: 1500 },
  { id: 7, name: 'Landscaping', price: 1500 },
  { id: 8, name: 'Life Skills', price: 1500 },
];

const cart = () => {
  const [cart, setCart] = useState(items.map(item => ({ ...item, quantity: 0 })));
  const navigation = useNavigation();

  const addToCart = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const getDiscount = () => {
    const totalItems = getTotalItems();
    if (totalItems >= 4) return 0.15;
    if (totalItems >= 3) return 0.10;
    if (totalItems >= 2) return 0.05;
    return 0;
  };

  const getTotalPrice = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = getDiscount();
    return subtotal * (1 - discount);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('course')}>
          <Text style={styles.navText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('contact')}>
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.navText, styles.activeNavText]}>Cart</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {cart.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => addToCart(item.id)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total Items: {getTotalItems()}</Text>
        <Text style={styles.summaryText}>Discount: {(getDiscount() * 100).toFixed(0)}%</Text>
        <Text style={styles.summaryText}>Total Price: R{getTotalPrice().toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#007bff',
  },
  navText: {
    color: '#ffffff',
    fontSize: 16,
  },
  activeNavText: {
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ffffff',
  },
  itemName: {
    flex: 2,
    fontSize: 16,
  },
  itemPrice: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    width: 30,
    alignItems: 'center',
  },
  quantityButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  summaryContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CartScreen;
