import React from 'react'
import { ScrollView, View } from 'react-native'
import CardTotalTop from './component/CardTotalTop'
import CardTotalOmset from './component/CardTotalOmset'
import CardPerformancePenjualan from './component/CardPerformancePenjualan'

export default function Home() {
  return (
    <ScrollView>
      <View className="flex-1 bg-white">
        <View className="m-5">
          <CardTotalTop />
          <CardTotalOmset />
          <CardPerformancePenjualan />
        </View>
      </View>
    </ScrollView>

  )
}