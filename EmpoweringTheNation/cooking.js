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
        <Text style={styles.title}>Cooking</Text>
        <Text style={styles.description}>
        Cooking is the process of preparing food by combining ingredients and applying heat through various methods. It transforms raw materials into flavorful and nutritious dishes, utilizing techniques that enhance taste, texture, and presentation. Cooking is both a science and an art, requiring knowledge of ingredients, techniques, and flavor combinations. It can be a practical skill, a creative outlet, and a means to explore cultural traditions. In conclusion cooking is a vital skill that promotes health, creativity, and cultural appreciation. A cooking class provides participants with the knowledge and hands-on experience to build confidence in the kitchen. Through learning and practice, individuals can enjoy the art of cooking while fostering a lifelong love for preparing and sharing food.
        </Text>
        <Text style={styles.sectionTitle}>Course Content:</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>1. Introduction to Cooking:</Text>
          <Text style={styles.bullet}>• Definition: Preparing food through techniques involving heat and ingredients.</Text>
          <Text style={styles.bullet}>• Purpose: To nourish the body, bring people together, and express creativity.</Text>

        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>2. Understanding Ingredients:</Text>
          <Text style={styles.bullet}>• Basic Food Groups: Grains, proteins, vegetables, fruits, and dairy.</Text>
          <Text style={styles.bullet}>• Seasonings and Flavorings: Herbs, spices, oils, and condiments.</Text>
          <Text style={styles.bullet}>• Fresh vs. Processed: Benefits of using fresh ingredients over packaged foods.</Text>

        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>3. Essential Cooking Techniques:</Text>
          <Text style={styles.bullet}>• Knife Skills: Proper handling, cutting techniques (chopping, dicing, mincing).</Text>
          <Text style={styles.bullet}>• Boiling: Cooking food in water or broth.</Text>
          <Text style={styles.bullet}>• Steaming: Cooking food using steam for better nutrient retention.</Text>
          <Text style={styles.bullet}>• Baking and Roasting: Cooking with dry heat in the oven.</Text>
          <Text style={styles.bullet}>• Grilling and Broiling: Cooking with direct heat for unique flavors.</Text>
          <Text style={styles.bullet}>• Sautéing: Cooking quickly in a small amount of fat.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>4. Kitchen Tools and Equipment:</Text>
          <Text style={styles.bullet}>•Essential Utensils: Knives, cutting boards, spatulas, and measuring cups.</Text>
          <Text style={styles.bullet}>• Cookware: Pots, pans, baking sheets, and specialty tools.</Text>
          <Text style={styles.bullet}>• Appliances: Ovens, stovetops, blenders, food processors, and slow cookers.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>5. Food Safety and Hygiene:</Text>
          <Text style={styles.bullet}>•Personal Hygiene: Importance of washing hands and using clean utensils.</Text>
          <Text style={styles.bullet}>• Cross-Contamination: Keeping raw and cooked foods separate.</Text>
          <Text style={styles.bullet}>• Proper Food Storage: Understanding refrigeration and expiration dates.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>6. Hands-On Cooking Activities:</Text>
          <Text style={styles.bullet}>•Simple Recipes: Starting with basic, age-appropriate dishes.</Text>
          <Text style={styles.bullet}>• Cooking Challenges: Encouraging creativity through themed cooking projects.</Text>
          <Text style={styles.bullet}>• Teamwork in the Kitchen: Working in groups to promote collaboration.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>7. Clean-Up and Organization:</Text>
          <Text style={styles.bullet}>• Importance of Cleanliness: Maintaining a tidy workspace.</Text>
          <Text style={styles.bullet}>• Proper Cleaning Techniques: Safely washing utensils and surfaces.</Text>
          <Text style={styles.bullet}>• Storing Leftovers: Best practices for food storage and minimizing waste.</Text>
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

