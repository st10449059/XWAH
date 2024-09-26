import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesPage from './course'; 
import ContactPage from './contact'; 
import CartScreen from './cart';

const courses = [
  { id: 1, title: ' Child minding', summary: 'Purpose: To provide basic child and baby care', price: 750 },
  { id: 2, title: 'Cooking', summary: ' Purpose: To prepare and cook nutritious family meals', price: 750 },
  { id: 3, title: 'Garden maintenace', summary: 'Purpose: To provide basic knowledge of watering, pruning and planting in a domestic garden.', price: 750 },
  { id: 4, title: 'First Aid', summary: ' Purpose: To provide first aid awareness and basic life support.', price: 1500 },
  { id: 5, title: 'Sewing', summary: ' Purpose: To provide alterations and new garment tailoring services.', price: 1500 },
  { id: 6, title: 'Landscaping', summary: 'Purpose: To provide landscaping services for new and established gardens.', price: 1500 },
  { id: 7, title: 'Life Skills', summary: 'Purpose: To provide skills to navigate basic life necessities.', price: 1500 },
  
];

const CourseItem = ({ title, summary, price }) => (
  <View style={styles.courseItem}>
    <Text style={styles.courseTitle}>{title}</Text>
    <Text style={styles.courseSummary}>{summary}</Text>
    <Text style={styles.coursePrice}>R{price.toFixed(2)}</Text>
    <TouchableOpacity style={styles.button} onPress={() => alert(`View more about ${title}`)}>
      <Text style={styles.buttonText}>View More</Text>
    </TouchableOpacity>
  </View>
);

const CoursesScreen = () => (
  <ScrollView style={styles.container}>
    {courses.map(course => (
      <CourseItem key={course.id} title={course.title} summary={course.summary} price={course.price} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  courseItem: {
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
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseSummary: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CoursesScreen;

