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
        <Text style={styles.title}>Garden maintenace</Text>
        <Text style={styles.description}>
        Garden maintenance involves the practices and techniques used to care for and enhance outdoor spaces, ensuring they remain healthy, aesthetically pleasing, and functional. A garden maintenance class provides essential skills for anyone interested in caring for gardens, whether for personal enjoyment or professional landscaping. Participants learn not only the practical aspects but also the environmental considerations that come with gardening
        </Text>
        <Text style={styles.sectionTitle}>Course Content:</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Soil Health:</Text>
          <Text style={styles.bullet}>• Understanding soil types and structure</Text>
          <Text style={styles.bullet}>• Soil testing and amendments</Text>
          <Text style={styles.bullet}>• Composting techniques</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2. Plant Care:</Text>
          <Text style={styles.bullet}>• Identifying plant species and their needs</Text>
          <Text style={styles.bullet}>• Pruning and deadheading techniques</Text>
          <Text style={styles.bullet}>• Fertilization and pest management</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Garden Tools and Equipment:</Text>
          <Text style={styles.bullet}>• Overview of essential tools (pruners, shovels, hoes)</Text>
          <Text style={styles.bullet}>• Proper tool maintenance and safety</Text>
          <Text style={styles.bullet}>• Equipment for larger spaces (lawnmowers, tillers)</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Weed Control:</Text>
          <Text style={styles.bullet}>• Identifying common weeds</Text>
          <Text style={styles.bullet}>• Manual and chemical control methods</Text>
          <Text style={styles.bullet}>• Mulching techniques to suppress weeds</Text>
        </View>
        <Text style={styles.sectionTitle}>Practical Experience:</Text>
        <Text style={styles.bullet}>• Hands-on activities like planting, pruning, and composting.</Text>
        <Text style={styles.bullet}>• Field trips to local gardens or nurseries.</Text>
        <Text style={styles.bullet}>• Developing a maintenance schedule for a garden.</Text>
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
