import { View, Text } from 'react-native';
import React from 'react';
import TotaltransaksiIcon from '../../../../assets/total-transaksi.svg';
import CustomerIcon from '../../../../assets/customer-icon.svg';
import ProdukIcon from '../../../../assets/produk.svg';
import JasaIcon from '../../../../assets/jasa.svg';
import { KasirBlue } from '../../../constans/colors';

export default function CardTotalTop() {
    return (
        <View className="flex-col bg-white shadow-2xl shadow-[#bbb6b6] rounded-lg">
            <View className="flex-row h-36">
                <View className="flex-1 justify-center items-center">
                    <View className="flex justify-center items-center bg-[#F0F3FE] rounded-full h-14 w-14">
                        <CustomerIcon stroke={KasirBlue} height={30} width={30} />
                    </View>
                    <Text className="text-black text-lg font-bold">679</Text>
                    <Text className="text-gray-300">Total Pelanggan</Text>
                </View>
                <View className="border-l-[1px] mt-2 border-[#F2F2F2]" />
                <View className="flex-1 justify-center items-center">
                    <View className="flex justify-center items-center bg-[#FDF0E6] rounded-full h-14 w-14">
                        <TotaltransaksiIcon height={30} width={30} />
                    </View>
                    <Text className="text-black text-lg font-bold">1132</Text>
                    <Text className="text-gray-300">Total Transaksi</Text>
                </View>
            </View>
            <View className="border-t-[1px] border-[#F2F2F2] mx-2 " />
            <View className="flex-row h-36">
                <View className="flex-1 justify-center items-center ">
                    <View className="flex justify-center items-center bg-[#FBE6E6] rounded-full h-14 w-14">
                        <ProdukIcon height={30} width={30} />
                    </View>
                    <Text className="text-black text-lg font-bold">1826</Text>
                    <Text className="text-gray-300">Total Produk Terjual</Text>
                </View>
                <View className="border-l-[1px] mb-2 border-[#F2F2F2]" />
                <View className="flex-1 justify-center items-center">
                    <View className="flex justify-center items-center bg-[#F0F3FE] rounded-full h-14 w-14">
                        <JasaIcon height={30} width={30} />
                    </View>
                    <Text className="text-black text-lg font-bold">2347</Text>
                    <Text className="text-gray-300">Total Jasa Terjual</Text>
                </View>
            </View>
        </View>
    );
}
