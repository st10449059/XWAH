import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
        <Text style={styles.title}>Life Skills</Text>
        <Text style={styles.description}>
        Life skills are essential abilities that help individuals navigate daily challenges and interactions effectively. The classes aim to empower individuals with the tools they need to lead fulfilling and independent lives.
        </Text>
        <Text style={styles.sectionTitle}>Course Content:</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Decision-Making and Problem-Solving:</Text>
          <Text style={styles.bullet}>• Strategies for making informed decisions and tackling everyday problems.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2. Time Management:</Text>
          <Text style={styles.bullet}>• Prioritizing tasks, setting goals, and organizing schedules.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Financial Literacy:</Text>
          <Text style={styles.bullet}>• Budgeting, saving, managing expenses, and understanding basic financial concepts.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Health and Wellness:</Text>
          <Text style={styles.bullet}>• Nutrition, exercise, mental health awareness, and stress management.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5. Career Skills:</Text>
          <Text style={styles.bullet}>• Job searching, resume writing, interview techniques, and workplace etiquette.</Text>
        </View>
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
