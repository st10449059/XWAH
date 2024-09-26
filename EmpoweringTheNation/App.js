/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoursesPage from './course'; 
import ContactPage from './contact'; 
import CartScreen from './cart';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="course" component={CoursesPage} />
        <Stack.Screen name="contact" component={ContactPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <Image
  source={require('./_images/EP.png')}
  style={styles.logo}
  resizeMode="contain"
/>

      <Text style={styles.description}>
      Empowering the Nation, founded in 2018, has made significant strides in enhancing the lives of domestic workers and gardeners in Johannesburg through comprehensive training programs. The organization offers a range of educational opportunities designed to equip participants with essential skills that can improve their employability and empower them in their personal and professional lives. Empowering the Nation has successfully trained hundreds of individuals, helping them transition to better job opportunities and improve their livelihoods. The organization not only prioritizes skill development but also promotes a sense of community and support among participants. Through workshops, networking events, and mentorship, trainees can connect with peers and industry professionals, further expanding their horizons.
      </Text>

      <View style={styles.coursesPreview}>
        <Text style={styles.courseTitle}> 6 week courses</Text>
        <Text style={styles.courseDescription}>
        The six-month Learnerships provide an in-depth curriculum covering various aspects of domestic work and gardening. Participants engage in practical training alongside theoretical lessons, which not only boosts their skill sets but also fosters confidence and independence. These learnerships are tailored to meet the specific needs of the job market, ensuring that graduates are well-prepared for employment in a competitive environment.
        </Text>

        <Text style={styles.courseTitle}>6 month courses</Text>
        <Text style={styles.courseDescription}>
        Empowering the Nation also offers six-week Short Skills Training Programmes. These condensed courses focus on specific skills that are in high demand, allowing participants to quickly gain knowledge that can be immediately applied in their work. Topics may include advanced cleaning techniques, sustainable gardening practices, and basic financial management, all aimed at enhancing the overall effectiveness and marketability of the trainees.
        </Text>
      </View>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Courses')}
        >
          <Text style={styles.navButtonText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.navButtonText}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  coursesPreview: {
    width: '100%',
    marginBottom: 30,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 14,
    marginBottom: 20,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  navButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default HomePage;
