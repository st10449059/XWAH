import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesPage from './course'; 
import ContactPage from './contact'; 
import CartScreen from './cart';

const venues = [
  {
    name: 'Precious Radebe',
    email: 'EmpoweringTheNation@gmail.com',
    phone: '+27 (82) 653 5454',
    address: 'Our Lady of Lebanon Catholic Church - 8 Blougom Cres, Liefde en Vrede, Johannesburg South, 2190',
  },
  {
    name: 'Precious Radebe',
    email: 'EmpoweringTheNation@gmail.com',
    phone: '+27 (82) 653 5454',
    address: 'UJ (Auckland Park Campus) - Corner kingsway and University Road, Auckland Park, Johannesburg 2029',
  },
  {
    name: 'Precious Radebe',
    email: 'EmpoweringTheNation@gmail.com',
    phone: '+27 (82) 653 5454',
    address: 'Jan Smuts Scouts Hall - Beech Ave, Mararis Steyn Park, Edenvale, 1609',
  },
];

const VenueItem = ({ name, email, phone, address }) => {
  const handleEmailPress = () => {
    Alert.alert(
      'Contact Email',
      `The email address for ${name} is: ${email}`,
      [{ text: 'OK' }]
    );
  };

  const handlePhonePress = () => {
    Alert.alert(
      'Contact Phone',
      `The phone number for ${name} is: ${phone}`,
      [{ text: 'OK' }]
    );
  };

  const handleDirectionsPress = () => {
    const encodedAddress = encodeURIComponent(address);
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`);
  };

  return (
    <View style={styles.venueItem}>
      <Text style={styles.venueName}>{name}</Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.contactInfo}>View Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePhonePress}>
        <Text style={styles.contactInfo}>View Phone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.directionsButton} onPress={handleDirectionsPress}>
        <Text style={styles.directionsButtonText}>Get Directions</Text>
      </TouchableOpacity>
    </View>
  );
};

const ContactScreen = () => (
  <View style={styles.container}>
    {venues.map((venue, index) => (
      <VenueItem key={index} {...venue} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  venueItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  venueName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 4,
  },
  directionsButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 8,
  },
  directionsButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ContactScreen;
