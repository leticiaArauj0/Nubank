import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { HelpLLLV } from './screens/Help/HelpLLLV'
import { HomeLLLV } from './screens/Home/HomeLLLV'
import { MoneyLLLV } from './screens/Money/MoneyLLLV'
import { StoreLLLV } from './screens/Store/StoreLLLV'
import { TabBarLLLV } from './components/TabBar/TabBarLLLV'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export function Tabs() {
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: "#ffffff"
                }
            }}

            tabBar={(props) => <TabBarLLLV {...props} />}
        >
            <Tab.Screen name="Home" component={HomeLLLV} options={{tabBarIcon: 'compare-arrows'}} />
            <Tab.Screen name="Money" component={MoneyLLLV} options={{tabBarIcon: 'attach-money'}} />
            <Tab.Screen name="Store" component={StoreLLLV} options={{tabBarIcon: 'storefront'}} />
        </Tab.Navigator>
    )
}

export function Routes() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeScreen' component={Tabs} />
            <Stack.Screen name='Help' component={HelpLLLV} />
        </Stack.Navigator>
    )
}
