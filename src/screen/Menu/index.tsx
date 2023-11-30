import React, { useState } from 'react'
import { View } from 'react-native'
import KategoriMenuComponent from './component/KategoriMenuComponent'
import SearchAndFilterComponent from './component/SearchAndFilterComponent'
import BottomModalComponent from './component/BottomModalComponent'

export default function Menu() {
  const [modal, setModal] = useState(false);
  const handlePress = () => {
    setModal(!modal);
  };

  return (
    <View className="flex-1 bg-white">
      <View className="mx-5">
        <SearchAndFilterComponent />
        <BottomModalComponent modal={modal} handlePress={handlePress} />
      </View>
      <KategoriMenuComponent handlePress={handlePress} />
    </View>
  )
}