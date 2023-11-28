import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import CustomerIcon from '../../assets/customer-icon.svg';
import HomeIcon from '../../assets/home-icon.svg';
import HamburgerIcon from '../../assets/icon-menu.svg';
import KeranjangIcon from '../../assets/keranjang-icon.svg';
import MenuIcon from '../../assets/menu-icon.svg';
import PengaturanIcon from '../../assets/pengaturan.svg';
import PesananIcon from '../../assets/pesanan.svg';
import ProdukIcon from '../../assets/produk-icon.svg';
import PromoIcon from '../../assets/promo.svg';
import ProfileSidebarDrawer from '../components/drawer/ProfileSidebarDrawer';
import { KasirBlue, KasirGray } from '../constans/colors';
import CustomerScreen from '../screen/Customer';
import HomeScreen from '../screen/Home';
import KeranjangScreen from '../screen/Keranjang';
import MenuScreen from '../screen/Menu';
import PengaturanScreen from '../screen/Pengaturan';
import PesananScreen from '../screen/Pesanan';
import ProdukScreen from '../screen/Produk';
import PromoScreen from '../screen/Promo';


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
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#000',
                    // eslint-disable-next-line react/no-unstable-nested-components
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.toggleDrawer()} className="ml-4">
                            <HamburgerIcon strokeWidth={10} stroke="#000" height={32} width={32} />
                        </TouchableOpacity>
                    ),
                    drawerActiveBackgroundColor: KasirBlue,
                    drawerActiveTintColor: '#FFFFFF',
                    drawerStyle: { paddingHorizontal: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }
                })}
                drawerContent={props => <ProfileSidebarDrawer {...props} />}
            >
                <Drawer.Screen
                    name="HomeScreenStack"
                    options={() => ({
                        drawerLabel: 'Dashboard',
                        title: '',
                        drawerIcon: ({ focused }) => (
                            <View className='ml-4'>
                                <MenuIcon stroke={focused ? "#FFF" : KasirGray} height={26} width={26} strokeWidth={2} />
                            </View>
                        ),
                    })}
                    component={HomeScreenStack}
                />
                <Drawer.Screen
                    name="PromoScreenStack"
                    options={{
                        drawerLabel: 'Promo',
                        title: 'Promo',
                        drawerIcon: ({ focused }) => (
                            <View className='ml-3'>
                                <PromoIcon stroke={focused ? "#FFF" : KasirGray} height={30} width={30} strokeWidth={2} />
                            </View>
                        ),
                    }}
                    component={PromoScreenStack}
                />
                <Drawer.Screen
                    name="RPesananScreenStack"
                    options={{
                        drawerLabel: 'R.Pesanan',
                        title: 'R.Pesanan',
                        drawerIcon: ({ focused }) => (
                            <View className='ml-4'>
                                <PesananIcon stroke={focused ? "#FFF" : KasirGray} height={26} width={26} strokeWidth={2} />
                            </View>
                        ),
                    }}
                    component={PesananScreenStack}
                />
                <Drawer.Screen
                    name="PengaturanScreenStack"
                    options={{
                        drawerLabel: 'Pengaturan',
                        title: 'Pengaturan',
                        drawerIcon: ({ focused }) => (
                            <View className='ml-4'>
                                <PengaturanIcon stroke={focused ? "#FFFFFF" : KasirGray} height={26} width={26} strokeWidth={2} />
                            </View>
                        ),
                    }}
                    component={PengaturanScreenStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
