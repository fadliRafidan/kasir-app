import { View, Text } from 'react-native'
import React from 'react';
import DollarIcon from '../../../../assets/dolar-outline.svg';

export default function CardTotalOmset() {
    return (
        <View className="flex-row mt-4">
            <View className="flex-1 flex-col justify-between px-5 py-5 bg-white shadow-xl shadow-kasir rounded-lg">
                <View className="flex-row justify-between">
                    <View className="flex-col">
                        <Text className="text-black text-[16px] font-semibold">Total omset bulan agustus</Text>
                        <Text className="text-black text-[16px] font-semibold mt-1">Rp. 325,000,000</Text>
                    </View>
                    <View className="flex justify-center items-center bg-[#F0F3FE] h-14 w-14 rounded-full">
                        <DollarIcon height={30} width={30} />
                    </View>
                </View>
                <View className="flex-row gap-x-1">
                    <Text className="text-[#21B58B] text-[16px] font-medium">+2,4%</Text>
                    <Text className="text-black text-[16px] font-normal">Bulan ini</Text>
                </View>
            </View>
        </View>
    )
}