import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"
import { RestaurantStack } from "./RestaurantStack";
import { FavoritesScreen } from "../screens/FavoritesScreen"
import { RankingScreen } from "../screens/RankingScreen"
import { SearchScreen } from "../screens/SearchScreen"
import { AccountScreen } from "../screens/AccountScreen"
import { screen } from "../utils/index"


const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#008000", 
                tabBarInactiveTintColor: "#646464", 
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
            })}
        >
            <Tab.Screen name={screen.restaurant.tab} component={RestaurantStack}  options={{ title: "Restaurantes" }} />
            <Tab.Screen name={screen.favorites.tab} component={FavoritesScreen}  options={{ title: "Favoritos" }} />
            <Tab.Screen name={screen.ranking.tab} component={RankingScreen}  options={{ title: "Ranking" }} />
            <Tab.Screen name={screen.search.tab} component={SearchScreen}  options={{ title: "Buscar" }} />
            <Tab.Screen name={screen.account.tab} component={AccountScreen}  options={{ title: "Mi Cuenta" }} />
        </Tab.Navigator>
    )
}

function screenOptions(route, color, size) {
    let iconName;

    if (route.name === screen.restaurant.tab) {
        iconName = "silverware";
    }
    if (route.name === screen.favorites.tab) {
        iconName = "heart-outline";
    }
    if (route.name === screen.ranking.tab) {
        iconName = "star-outline";
    }
    if (route.name === screen.search.tab) {
        iconName = "magnify";
    }
    if (route.name === screen.account.tab) {
        iconName = "account-circle-outline";
    }

    return <Icon type="material-community" name={iconName} color={color} size={size} />;
}
