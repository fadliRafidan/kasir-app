import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerIcon from '../../assets/customer-icon.svg';
import HomeIcon from '../../assets/home-icon.svg';
import MenuIcon from '../../assets/menu-icon.svg';
import ProdukIcon from '../../assets/produk-icon.svg';
import KeranjangIcon from '../../assets/keranjang-icon.svg';
import HomeScreen from '../screen/Home';
import MenuScreen from '../screen/Menu';
import CustomerScreen from '../screen/Customer';
import KeranjangScreen from '../screen/Keranjang';
import ProdukScreen from '../screen/Produk';
import PromoScreen from '../screen/Promo';
import PesananScreen from '../screen/Pesanan';
import PengaturanScreen from '../screen/Pengaturan';
import { KasirBlue, KasirGray } from '../constans/colors';
import { View } from 'react-native';
import ProfileSidebarDrawer from '../components/drawer/ProfileSidebarDrawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false, tabBarStyle: { height: 70, gap: 10, paddingTop: 10, position: 'relative' } }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon stroke={focused ? KasirBlue : KasirGray} height={30} width={30} strokeWidth={2} />
                    ),
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500' },
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    tabBarActiveTintColor: KasirBlue,
                }}
            />
            <Tab.Screen
                name="MenuScreen"
                component={MenuScreen}
                options={{
                    tabBarLabel: 'Menu',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ focused }) => (
                        <MenuIcon stroke={focused ? KasirBlue : KasirGray} height={30} width={30} strokeWidth={2} />
                    ),
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500' },
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    tabBarActiveTintColor: KasirBlue,
                }}
            />
            <Tab.Screen
                name="KeranjangScreen"
                component={KeranjangScreen}
                options={{
                    tabBarLabel: 'Keranjang',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ focused }) => (
                        <View className={`h-14 w-14 bg-kasir-blue rounded-full flex justify-center items-center mb-8 ${focused ? 'shadow-lg shadow-kasir-blue' : 'shadow-none'}`}>
                            <KeranjangIcon stroke={'#FFF'} height={30} width={30} strokeWidth={2} />
                        </View>
                    ),
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500' },
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    tabBarActiveTintColor: KasirBlue,
                }}
            />
            <Tab.Screen
                name="ProdukScreen"
                component={ProdukScreen}
                options={{
                    tabBarLabel: 'Produk',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ focused }) => (
                        <ProdukIcon stroke={focused ? KasirBlue : KasirGray} height={30} width={30} strokeWidth={2} />
                    ),
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500' },
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    tabBarActiveTintColor: KasirBlue,
                }}
            />
            <Tab.Screen
                name="CustomerScreen"
                component={CustomerScreen}
                options={{
                    tabBarLabel: 'Customer',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    tabBarIcon: ({ focused }) => (
                        <CustomerIcon stroke={focused ? KasirBlue : KasirGray} height={30} width={30} strokeWidth={2} />
                    ),
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500' },
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    tabBarActiveTintColor: KasirBlue,
                }}
            />
        </Tab.Navigator>
    );
};

const HomeScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
        </Stack.Navigator>
    );
};

const PromoScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="PromoPage"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PromoScreen" component={PromoScreen} />
        </Stack.Navigator>
    );
};
const PesananScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="PesananPage"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PesananScreen" component={PesananScreen} />
        </Stack.Navigator>
    );
};
const PengaturanScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="PengaturanPage"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="PengaturanScreen" component={PengaturanScreen} />
        </Stack.Navigator>
    );
};


const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#000',
                }}
                drawerContent={props => <ProfileSidebarDrawer {...props} />}
            >
                <Drawer.Screen
                    name="HomeScreenStack"
                    options={{
                        drawerLabel: 'Dashboard',
                        title: '',
                        drawerIcon: ({ focused }) => (
                            <MenuIcon stroke={focused ? "#FFF" : KasirGray} height={30} width={30} strokeWidth={2} />
                        )
                    }}
                    component={HomeScreenStack}
                />
                <Drawer.Screen
                    name="PromoScreenStack"
                    options={{
                        drawerLabel: 'Promo',
                        title: 'Promo',
                    }}
                    component={PromoScreenStack}
                />
                <Drawer.Screen
                    name="RPesananScreenStack"
                    options={{
                        drawerLabel: 'R.Pesanan',
                        title: 'R.Pesanan',
                    }}
                    component={PesananScreenStack}
                />
                <Drawer.Screen
                    name="PengaturanScreenStack"
                    options={{
                        drawerLabel: 'Pengaturan',
                        title: 'Pengaturan',
                    }}
                    component={PengaturanScreenStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
