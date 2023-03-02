import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Compass, Search, Cart, Menu } from '../screens';
import Icons from '../themes/Icons';
import { ImageBackground, View, Dimensions } from 'react-native'
import Images from '../themes/Images';
import Colors from '../themes/Colors';

const { height, width } = Dimensions.get('window')
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80,
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ImageBackground source={focused ? Images.bg_focus : null}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 60,
                                width: width / 5,
                                borderBottomWidth: focused ? 2 : 0,
                                borderBottomColor: Colors.red
                            }}>
                            {Icons.Icons({ name: focused ? 'home_focus' : 'home', height: 20, width: 18 })}
                        </ImageBackground>
                    )
                }}
            />
            <Tab.Screen
                name="Compass"
                component={Compass}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ImageBackground source={focused ? Images.bg_focus : null}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 60,
                                width: width / 5,
                                borderBottomWidth: focused ? 2 : 0,
                                borderBottomColor: Colors.red
                            }}>
                            {Icons.Icons({ name: focused ? 'compass_focus' : 'compass', height: 20, width: 20 })}
                        </ImageBackground>
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ImageBackground source={focused ? Images.bg_focus : null}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 60,
                                width: width / 5,
                                borderBottomWidth: focused ? 2 : 0,
                                borderBottomColor: Colors.red
                            }}>
                            {Icons.Icons({ name: focused ? 'search_focus' : 'search', height: 18, width: 18 })}
                        </ImageBackground>
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ImageBackground source={focused ? Images.bg_focus : null}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 60,
                                width: width / 5,
                                borderBottomWidth: focused ? 2 : 0,
                                borderBottomColor: Colors.red
                            }}>
                            {Icons.Icons({ name: focused ? 'cart_focus' : 'cart', height: 21, width: 22 })}
                        </ImageBackground>
                    )
                }}
            />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ImageBackground source={focused ? Images.bg_focus : null}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 60,
                                width: width / 5,
                                borderBottomWidth: focused ? 2 : 0,
                                borderBottomColor: Colors.red
                            }}>
                            {Icons.Icons({ name: focused ? 'menu_focus' : 'menu', height: 13, width: 18 })}
                        </ImageBackground>
                    )
                }}
            />
        </Tab.Navigator>
    );
}