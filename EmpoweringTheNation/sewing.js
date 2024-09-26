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
        <Text style={styles.title}>Sewing</Text>
        <Text style={styles.description}>
        Sewing is the craft of stitching fabrics together to create or repair items like clothing, accessories, and home decor. A sewing class typically covers a variety of skills, techniques, and tools to help students become proficient in the art of sewing. A sewing class provides a foundational understanding of both the technical and creative aspects of sewing. Participants gain confidence in their skills, allowing them to create their own garments and items while enjoying a fulfilling, hands-on craft.
        </Text>
        <Text style={styles.sectionTitle}>Course Content:</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Introduction to Sewing:</Text>
          <Text style={styles.bullet}>• Overview of sewing history and techniques</Text>
          <Text style={styles.bullet}>• Understanding the basic principles of sewing</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2. Sewing Tools and Equipment:</Text>
          <Text style={styles.bullet}>• Introduction to essential tools (sewing machine, needles, thread, scissors, pins)</Text>
          <Text style={styles.bullet}>• How to operate and maintain a sewing machine</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Fabric Knowledge:</Text>
          <Text style={styles.bullet}>• Types of fabrics and their characteristics</Text>
          <Text style={styles.bullet}>• Choosing the right fabric for different projects</Text>
          <Text style={styles.bullet}>• Understanding fabric grain, texture, and stretch</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Basic Sewing Techniques:</Text>
          <Text style={styles.bullet}>• Hand sewing vs. machine sewing</Text>
          <Text style={styles.bullet}>• Basic stitches (running stitch, backstitch, zigzag)</Text>
          <Text style={styles.bullet}>• How to read and follow a sewing pattern</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5. Cutting and Measuring:</Text>
          <Text style={styles.bullet}>• Measuring techniques for accurate fitting</Text>
          <Text style={styles.bullet}>• Importance of seam allowances</Text>
          <Text style={styles.bullet}>• How to properly cut fabric and lay out patterns</Text>
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
