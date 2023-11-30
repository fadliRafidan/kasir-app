import React, { useEffect, useState } from 'react';
import { Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import KeranjangIcon from '../../../../assets/keranjang-icon.svg';
import { KasirBlue } from '../../../constans/colors';

const dataVariant = [
    {
        id: 1,
        nama: 'Small',
        harga: '12.000',
        hargaDiskon: '10.000',
        selected: false,
        count: 0,
    },
    {
        id: 2,
        nama: 'Medium',
        harga: '17.000',
        hargaDiskon: '15.000',
        selected: false,
        count: 0,
    },
    {
        id: 3,
        nama: 'Large',
        harga: '22.000',
        hargaDiskon: '20.000',
        selected: false,
        count: 0,
    },
];

interface ModalInterface {
    modal: boolean;
    handlePress: (action: any) => void;
}

const BottomModalComponent = (modal: ModalInterface) => {
    const [modalVisible, setModalVisible] = useState(modal.modal);
    const [selectedData, setSelectedData] = useState(dataVariant);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        if (modal) {
            setModalVisible(modal.modal);
        }
    }, [modal]);


    const handleSelect = (id: number) => {
        setSelectedData((prev: any) => {
            return prev.map((item: any) => {
                if (item.id === id) {
                    return {
                        ...item,
                        selected: item.selected ? false : true,
                    };
                }
                else {
                    return {
                        ...item,
                    };
                }
            });
        });
    };

    const handleAsc = (id: number) => {
        setSelectedData((prev: any) => {
            return prev.map((item: any) => {
                if (item.id === id) {
                    // eslint-disable-next-line no-return-assign
                    return {
                        ...item,
                        count: item.count += 1,
                    };
                }
                else {
                    return {
                        ...item,
                    };
                }
            });
        });
    };

    const handleDsc = (id: number) => {
        setSelectedData((prev: any) => {
            return prev.map((item: any) => {
                if (item.id === id) {
                    // eslint-disable-next-line no-return-assign
                    return {
                        ...item,
                        count: item.count -= 1,
                    };
                }
                else {
                    return {
                        ...item,
                    };
                }
            });
        });
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    modal.handlePress(false);
                }}
                onDismiss={() => {
                    modal.handlePress(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View className="flex-row justify-start w-full items-start ">
                            <Image
                                source={require('../../../../assets/burger.png')}
                                className="rounded-3xl w-24 h-24 bg-cover flex-[0.5]"
                            />
                            <View className="ml-3 gap-y-1 flex-1">
                                <Text className="text-black text-[15px] font-semibold">Burger</Text>
                                <Text className="text-kasir-blue text-base">Rp.12,000</Text>
                                <View className="flex-row justify-between">
                                    <Text className="text-kasir-gray text-sm">SKU.12345678</Text>
                                    <Text className="text-kasir-gray text-sm">stock : 420</Text>
                                </View>
                            </View>
                            <TouchableOpacity className="flex-2" onPress={() => { modal.handlePress(false); }}>
                                <Icon name="x" color={'#000'} size={30} />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row justify-between my-4 bg-[#F0F3FE] rounded-lg w-full px-3 py-1 items-center">
                            <View className="flex-row items-center">
                                <Icon name="info" color={KasirBlue} size={20} />
                                <Text className="text-kasir-blue text-sm ml-2">Produk ini memiliki diskon</Text>
                            </View>
                            <Switch
                                trackColor={{ false: '#767577', true: KasirBlue }}
                                thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <View className="flex-row w-full">
                            <View className="w-full border-t-[1px] border-t-[#EEF0F3]" />
                        </View>
                        <View className="flex-row justify-start w-full my-3">
                            <Text className="text-black text-base font-medium">Pilih</Text>
                        </View>
                        {selectedData?.map((row, index) => (
                            <View key={index} className="flex-row justify-between mb-3 gap-2">
                                <TouchableOpacity onPress={() => handleSelect(row.id)}
                                    className={`${row.selected ? 'bg-[#D8E1FD] border-kasir-blue' : 'bg-[#F2F2F2] border-[#F2F2F2]'}  w-[60%] gap-x-2 p-1 flex-row justify-start border-[1.5px] rounded-2xl items-center`}>
                                    <View>
                                        <View className={'flex justify-center items-center bg-kasir-blue rounded-full p-[1px]'}>
                                            <View className={`h-5 w-5 ${row.selected ? 'bg-kasir-blue' : 'bg-white'} rounded-full border-2 border-white`} />
                                        </View>
                                    </View>
                                    <View>
                                        <Text className="text-black text-base">{row.nama}</Text>
                                        <View className="flex-row gap-1">
                                            <Text className={`${isEnabled ? 'text-[#949AA3]' : 'text-black'} text-base font-medium`}>Rp.{row.harga}</Text>
                                            {isEnabled && (
                                                <Text className="text-black text-base font-medium">Rp.{row.hargaDiskon}</Text>
                                            )}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View className="bg-[#F2F2F2] w-[40%] gap-x-2 p-2 flex-row justify-between  rounded-[50px] items-center">
                                    <TouchableOpacity disabled={!row.selected || row.count <= 0} onPress={() => handleDsc(row.id)} className={'flex justify-center items-center bg-[#CACCD1] rounded-full p-[1px]'}>
                                        <Icon name="minus" size={22} color={row.selected ? '#000' : '#5F6775'} />
                                    </TouchableOpacity>
                                    <Text className={`text-xl font-medium ${row.selected ? 'text-black' : 'text-[#949AA3]'}`}>{row.count?.toString()}</Text>
                                    <TouchableOpacity disabled={!row.selected} onPress={() => handleAsc(row.id)} className={`flex justify-center items-center ${row.selected ? 'bg-kasir-blue' : 'bg-[#CACCD1]'} rounded-full p-[1px]`}>
                                        <Icon name="plus" size={22} color={row.selected ? '#fff' : '#5F6775'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                        <View className="flex-row w-full">
                            <View className="w-full border-t-[1px] border-t-[#EEF0F3]" />
                        </View>
                        <TouchableOpacity className="flex-row w-full my-4 p-3 gap-x-2 bg-kasir-blue rounded-3xl justify-center items-center">
                            <KeranjangIcon stroke={'#FFF'} height={30} width={30} strokeWidth={2} />
                            <Text className="text-base font-medium text-white">Tambah ke keranjang</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // flex: 0.7,
        width: '100%',
        height: 'auto'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        height: 40,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default BottomModalComponent;
