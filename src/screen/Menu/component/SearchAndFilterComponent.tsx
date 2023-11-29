import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import SwitchIcon from '../../../../assets/switch-horizontal.svg'

export default function SearchAndFilterComponent() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: string) => setSearchQuery(query);
    return (
        <View className="flex-row items-center gap-2 w-full">
            <SwitchIcon height={30} width={30} />
            <Searchbar
                placeholder="Cari"
                onChangeText={onChangeSearch}
                value={searchQuery}
                className="bg-white border-kasir-gray border-[1px] -py-3 rounded-3xl flex-1"
            />
        </View>
    )
}