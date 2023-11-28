import { View, Text } from 'react-native'
import React from 'react'

export default function CardPerformancePenjualan() {
    return (
        <View className="flex-row mt-8">
            <View className="flex-1 flex-col gap-y-3 justify-between px-5 py-2 bg-white shadow-xl shadow-kasir rounded-lg">
                <View>
                    <Text className="text-black text-[16px] font-semibold">Performa Penjualan</Text>
                    <Text className="text-[#949AA3] text-[14px] font-normal">Tahun Sekarang</Text>
                </View>
                <View className="flex-row justify-between">
                    <View>
                        <Text className="text-black text-[16px] font-semibold">Rp. 34,030,550</Text>
                        <Text className="text-[#949AA3] text-[14px] font-normal">Agustus</Text>
                    </View>
                    <Text className="text-[#21B58B] text-[16px] font-medium">+59,48%</Text>
                </View>
                <View>
                    <Text className="text-black text-[16px] font-semibold">Rp. 84,030,550</Text>
                    <Text className="text-[#949AA3] text-[14px] font-normal">Juli</Text>
                </View>
                <View>
                    <Text className="text-black text-[16px] font-semibold">Rp. 34,030,550</Text>
                    <Text className="text-[#949AA3] text-[14px] font-normal">Rata Rata Transaksi</Text>
                </View>
                <View>
                    <Text className="text-black text-[16px] font-semibold">Rp. 34,030,550</Text>
                    <Text className="text-[#949AA3] text-[14px] font-normal">Omset Tahun Ini</Text>
                </View>
            </View>
        </View>
    )
}