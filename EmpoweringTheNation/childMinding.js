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
        <Text style={styles.title}>Child Mindding </Text>
        <Text style={styles.description}>
        Child minding, also known as childcare or babysitting, refers to the supervision and care of children in a variety of settings, typically in a home environment. It encompasses a range of responsibilities aimed at ensuring the safety, well-being, and development of children.Child minding is a vital service that supports children's development and provides peace of mind to parents. A comprehensive child minding class prepares individuals with the knowledge and skills needed to care for children effectively, ensuring a safe and nurturing environment. Here's a detailed description along with potential topics that might be covered in a child minding class.
        </Text>
        <Text style={styles.sectionTitle}>Course Content:</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Child Development</Text>
          <Text style={styles.bullet}>•Stages of physical, cognitive, emotional, and social development.</Text>
          <Text style={styles.bullet}>• Understanding developmental milestones.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2. Child Safety</Text>
          <Text style={styles.bullet}>• First aid and CPR for children.</Text>
          <Text style={styles.bullet}>• Emergency procedures and creating safe environments.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Health and Nutrition</Text>
          <Text style={styles.bullet}>• Basics of child nutrition.</Text>
          <Text style={styles.bullet}>• Preparing healthy meals and snacks.</Text>

        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Behavior Management</Text>
          <Text style={styles.bullet}>• Techniques for positive discipline and behavior modifications.</Text>
          <Text style={styles.bullet}>• Understanding child behavior and emotional responses.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5. Activity Planning</Text>
          <Text style={styles.bullet}>• Designing age-appropriate activities and games.</Text>
          <Text style={styles.bullet}>• Incorporating educational elements into play.</Text>
        </View>
    
        <Text style={styles.sectionTitle}>Practical Experience:</Text>
        <Text style={styles.bullet}>• Hands-On Training: Practicing care techniques, first aid, and emergency response scenarios.</Text>
        <Text style={styles.bullet}>• Role-Playing: Simulating real-life child minding situations to develop problem-solving skills.</Text>
        <Text style={styles.bullet}>• Observation: Shadowing experienced child minders to learn effective strategies.</Text>
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
