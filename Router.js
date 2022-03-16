/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Navigations Library
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Screens
import HomeScreen from './src/screens/home';
import ExpencesLog from './src/screens/expencesLog';

//icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ExpenseLog" component={ExpencesLog} />
    </Drawer.Navigator>
  );
}

const Router: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        {/* //Normal Tab Navigator */}
        {/* <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Root}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="ExpenseLog"
            component={ExpencesLog}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="beach"
                  color={color}
                  size={size}
                />
              ),
              tabBarBadge: 2,
            }}
          />
        </Tab.Navigator> */}
        {/* MaterialTab Navigator */}
        {/* <MaterialTab.Navigator
          initialRouteName="Home"
          activeColor="#F39E1E"
          inactiveColor="#6A6A6A"
          barStyle={{
            backgroundColor: '#F3F2F2',
            borderTopColor: 'red',
            borderTopWidth: 1,
          }}>
          <Tab.Screen name="Home" component={Root} />
          <Tab.Screen
            name="Home1"
            component={Root}
            options={{tabBarColor: 'red'}}
          />
          <Tab.Screen
            name="ExpenseLog"
            component={ExpencesLog}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              ),
              tabBarBadge: 2,
            }}
          />
        </MaterialTab.Navigator> */}

        {/* MaterialTopTab Navigator */}
        <MaterialTopTab.Navigator
          tabBarPosition={'bottom'}
          screenOptions={{
            tabBarLabelStyle: {fontSize: 12},
            tabBarItemStyle: {width: 100},
            tabBarStyle: {backgroundColor: 'powderblue'},
            tabBarIndicatorStyle: {top: 0, backgroundColor: 'red'},
          }}>
          {/* <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} /> */}
          <MaterialTopTab.Screen name="Home" component={Root} />
          <MaterialTopTab.Screen
            name="Home1"
            component={Root}
            options={{tabBarColor: 'red'}}
          />
          <MaterialTopTab.Screen
            name="ExpenseLog"
            component={ExpencesLog}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              ),
              // tabBarBadge: 2,
            }}
          />
        </MaterialTopTab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// import * as React from 'react';
// import {View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// function Feed({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Notifications" component={Notifications} />
//     </Drawer.Navigator>
//   );
// }

// function Router() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }

// const Router = () => {
//   return (
//     <View>
//       <Text>Hello</Text>
//     </View>
//   );
// };
export default Router;
