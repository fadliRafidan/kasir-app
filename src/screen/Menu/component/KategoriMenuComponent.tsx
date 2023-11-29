
import * as React from 'react';
import { Image, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { KasirBlue, KasirGray } from '../../../constans/colors';

const LunchRoute = () => (
    <ScrollView>
        <View style={{ backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 15, marginBottom: 20 }}>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/burger.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Burger</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/jackfruit.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Naked Jackfruit Burrito Bowl</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.37,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/pizza.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Double Chicken & Cheese Fiesta - Pizza</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.32,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/milk.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Pretzel Chicken Noodle Soup</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/tea.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Café Kumbuk Big Vegan Brekkie</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
        </View>
    </ScrollView>
);
const BreakfastRoute = () => (
    <ScrollView>
        <View style={{ backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 15, marginBottom: 20 }}>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/burger.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Burger</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/jackfruit.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Naked Jackfruit Burrito Bowl</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.37,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/pizza.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Double Chicken & Cheese Fiesta - Pizza</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.32,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/milk.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Pretzel Chicken Noodle Soup</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/tea.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Café Kumbuk Big Vegan Brekkie</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
        </View>
    </ScrollView>
);
const DessertRoute = () => (
    <ScrollView>
        <View style={{ backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 15, marginBottom: 20 }}>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/burger.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Burger</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/jackfruit.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Naked Jackfruit Burrito Bowl</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.37,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/pizza.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Double Chicken & Cheese Fiesta - Pizza</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.32,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/milk.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Pretzel Chicken Noodle Soup</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/tea.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Café Kumbuk Big Vegan Brekkie</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
        </View>
    </ScrollView>
);
const DrinksRoute = () => (
    <ScrollView>
        <View style={{ backgroundColor: '#fff', flexDirection: 'column', marginHorizontal: 15, marginBottom: 20 }}>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/burger.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Burger</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/jackfruit.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Naked Jackfruit Burrito Bowl</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.37,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/pizza.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Double Chicken & Cheese Fiesta - Pizza</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.32,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/milk.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Pretzel Chicken Noodle Soup</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
            <View className="flex-row justify-start items-center bg-white shadow-xl shadow-kasir rounded-lg overflow-hidden mt-5">
                <Image
                    source={require('../../../../assets/tea.png')}
                    width={100}
                    height={100}
                />
                <View className="ml-3">
                    <Text className="text-black text-[15px] font-semibold w-[230px]">Café Kumbuk Big Vegan Brekkie</Text>
                    <Text className='text-kasir-blue text-base mt-1'>Rp.12,000</Text>
                </View>
            </View>
        </View>
    </ScrollView>
);

const renderScene = SceneMap({
    lunch: LunchRoute,
    breakfasrt: BreakfastRoute,
    dessert: DessertRoute,
    drinks: DrinksRoute,
});

export default function KategoriMenuComponent() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'lunch', title: 'Lunch' },
        { key: 'breakfasrt', title: 'Breakfast' },
        { key: 'dessert', title: 'Dessert' },
        { key: 'drinks', title: 'Drinks' },
    ]);

    return (
        <View className="flex-col flex-1">
            <View className="flex-row justify-between items-center mt-2 mx-5">
                <Text className="text-black text-lg font-semibold">Kategori</Text>
                <Text className="text-kasir-blue font-medium mr-3">Lihat Semua</Text>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => <TabBar {...props} style={{ backgroundColor: 'white' }} renderLabel={({ route }) => (
                    <Text style={{ color: KasirGray, fontSize: 16, fontWeight: '400' }}>
                        {route.title}
                    </Text>
                )}
                    indicatorStyle={{ backgroundColor: KasirBlue }}
                />}
            />
        </View>
    );
}
