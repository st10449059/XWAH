import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesPage from './course'; 
import ContactPage from './contact'; 
import CartScreen from './cart';


const CourseDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
          <Text style={styles.navText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>First Aid</Text>
        <Text style={styles.description}>
        First aid is the initial assistance provided to someone experiencing a medical emergency. It aims to preserve life, prevent the condition from worsening, and promote recovery until professional medical help arrives. A first aid class equips participants with essential skills and knowledge to effectively respond to emergencies, fostering confidence and readiness to act in critical situations. It's a valuable course for anyone, regardless of their background or profession. 
        </Text>
        <Text style={styles.sectionTitle}>Course Content:</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Introduction to First Aid:</Text>
          <Text style={styles.bullet}>• Understanding the role of first aid and its importance</Text>
          <Text style={styles.bullet}>• Legal considerations and consent</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2.Basic Life Support (BLS):</Text>
          <Text style={styles.bullet}>• CPR (Cardiopulmonary Resuscitation) techniques for adults, children, and infants</Text>
          <Text style={styles.bullet}>• Use of an Automated External Defibrillator (AED)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Assessment of the Scene:</Text>
          <Text style={styles.bullet}>• Ensuring safety for yourself and the victim</Text>
          <Text style={styles.bullet}>• Performing a quick assessment of the situation</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Wound Care:</Text>
          <Text style={styles.bullet}>• Types of wounds (abrasions, lacerations, punctures)</Text>
          <Text style={styles.bullet}>• Cleaning, dressing, and infection prevention</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5. Burn Treatment:</Text>
          <Text style={styles.bullet}>• Identifying types and severity of burns</Text>
          <Text style={styles.bullet}>• Appropriate first aid for minor and major burns</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>6. Injury Management:</Text>
          <Text style={styles.bullet}>• Sprains, strains, fractures, and dislocations</Text>
          <Text style={styles.bullet}>• R.I.C.E. method (Rest, Ice, Compression, Elevation)</Text>
        </View>
        <Text style={styles.sectionTitle}>Practical Experience:</Text>
        <Text style={styles.bullet}>• Build a fully functional e-commerce mobile app</Text>
        <Text style={styles.bullet}>• Implement user authentication and authorization</Text>
        <Text style={styles.bullet}>• Integrate with backend APIs and handle data persistence</Text>
        <Text style={styles.bullet}>• Deploy your app to App Store and Google Play</Text>
      </ScrollView>
    </View>
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
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bullet: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default CourseDetailScreen;
