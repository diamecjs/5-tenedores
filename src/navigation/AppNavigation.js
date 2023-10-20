import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
import { RestaurantsScreen } from "../screens/RestaurantsScreen"
import { FavoritesScreen } from "../screens/FavoritesScreen"
import { RankingScreen } from "../screens/RankingScreen"
import { SearchScreen } from "../screens/SearchScreen"
import { AccountScreen } from "../screens/AccountScreen"


const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({ router }) => ({
            tabBarActiveTintColor: "#00a680",
            tabBarActiveTintColor: "#646464",
            tabBarIcon: ({ color, size }) => <Icon type="material-community" name="home-outline" color={color} size={size} />
        })}>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Ranking" component={RankingScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    )
}

function screenOptions(router, color, size){
    let iconName;

    if (router.name === "Restaurant"){
        iconName = "compass-outline";
    }
    if(router.name === "favorites"){
      iconName = "heart-outline";
    }
    if (router.name === "Ranking"){
        iconName ="star-outline";
    }
    if (router.name === "Search"){
        iconName=  "magnify";
    }
    if (router.name ==="Account"){
        iconName =   "home-outline";
    }
}