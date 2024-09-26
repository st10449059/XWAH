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
        <Text style={styles.title}>Landscaping</Text>
        <Text style={styles.description}>
        Landscaping is the art and practice of designing and modifying outdoor spaces to enhance their aesthetic appeal and functionality. This can involve the arrangement of plants, trees, pathways, water features, and structures. A landscaping class typically covers a range of topics to equip students with the knowledge and skills necessary for effective landscape design and maintenance. A landscaping class provides essential skills in both design and implementation, allowing participants to create beautiful, functional outdoor spaces while considering environmental impact and sustainability. It's an excellent course for anyone interested in pursuing a career in landscaping or simply wanting to enhance their own outdoor areas.
        </Text>
        <Text style={styles.sectionTitle}>Course Content:</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Introduction to Landscaping:</Text>
          <Text style={styles.bullet}>• Overview of landscape design principles and history</Text>
          <Text style={styles.bullet}>• Understanding the role of a landscape designer</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2. Site Analysis:</Text>
          <Text style={styles.bullet}>• Assessing site conditions (topography, soil, climate)</Text>
          <Text style={styles.bullet}>• Identifying existing vegetation and infrastructure</Text>
          <Text style={styles.bullet}>• Understanding drainage and environmental considerations</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Design Principles:</Text>
          <Text style={styles.bullet}>• Elements of design (line, form, color, texture)</Text>
          <Text style={styles.bullet}>• Basic design concepts (balance, unity, rhythm, proportion)</Text>
          <Text style={styles.bullet}>• Creating functional outdoor spaces (patios, gardens, pathways)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Project Management:</Text>
          <Text style={styles.bullet}>• Planning and executing a landscape design project</Text>
          <Text style={styles.bullet}>• Budgeting and estimating costs</Text>
          <Text style={styles.bullet}>• Working with clients and understanding their needs</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5. Landscape Maintenance:</Text>
          <Text style={styles.bullet}>• Seasonal maintenance tasks (pruning, mulching, fertilizing)</Text>
          <Text style={styles.bullet}>• Pest management and disease control</Text>
          <Text style={styles.bullet}>• Sustainable practices (organic gardening, native plants)</Text>
        </View>
        <Text style={styles.sectionTitle}>Practical Experience:</Text>
        <Text style={styles.bullet}>• Hands-on projects, such as creating design plans or installing landscapes.</Text>
        <Text style={styles.bullet}>• Field trips to local gardens or landscaping companies.</Text>
        <Text style={styles.bullet}>• Group critiques of design projects to foster feedback and improvement.</Text>
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
