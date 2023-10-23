import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";
import { AddRestaurants } from "../screens/Restaurants/AddRestaurants";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.restaurant.restaurants}
                component={RestaurantsScreen}
                options={{ title: "Restaurantes" }}
            />
            <Stack.Screen
                name={screen.restaurant.addRestaurant}
                component={AddRestaurants}
                options={{ title: "Nuevo restaurante" }}
            />

        </Stack.Navigator>
    );
}