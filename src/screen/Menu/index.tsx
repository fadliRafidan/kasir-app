import React from 'react'
import { View } from 'react-native'
import KategoriMenuComponent from './component/KategoriMenuComponent'
import SearchAndFilterComponent from './component/SearchAndFilterComponent'

export default function Menu() {
  return (
    <View className="flex-1 bg-white">
      <View className="mx-5">
        <SearchAndFilterComponent />
      </View>
        <KategoriMenuComponent />
    </View>
  )
}