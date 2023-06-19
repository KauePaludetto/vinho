import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useRoute  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import Catalogo from './components/Catalogo';
import Detalhes from './components/Detalhes';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
	return (
		<Tab.Navigator screenOptions={{
			headerStyle:{
				backgroundColor: '#400303'
			  },
			  headerTitleStyle: {
				color: '#fff',
				fontWeight: 'bold'
			  },
			  headerTitleAlign: 'center',
	  
			  tabBarStyle: {
				backgroundColor: "#fff"
			  },
			  tabBarLabelStyle:{
				fontSize: 14,
				fontWeight: "bold"
			  },
			  tabBarActiveTintColor: '#fff',
			  tabBarInactiveTintColor: "#ab887c",
			  tabBarActiveBackgroundColor: "#400303",
		}}>

			<Tab.Screen name="Catálogo" 
			component={ Catalogo } 
			options={{
				tabBarIcon: ({ color }) => (
				  <FontAwesome5 name="wine-bottle"  color={ color } size={ 20 }/>
				),
			  }}
			/>
		</Tab.Navigator>
	);
}



export default function App() {  
	return (    
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Tabs"        
        	screenOptions={{
				headerShown: false
			}}
      	>
				<Stack.Screen name="Tabs" component={MyTabs} />
				<Stack.Screen name="Detalhes" component={ Detalhes } />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
