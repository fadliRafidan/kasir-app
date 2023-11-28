// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';
import Logout from '../../../assets/logout.svg'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

const ProfileSidebarDrawer = (props: any) => {
    const BASE_PATH =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
    const proileImage = 'react_logo.png';

    return (
        <SafeAreaView style={{ flex: 1, marginTop:10 }}>
            <View className="items-center justify-start flex-row">
                <Image
                    source={{ uri: BASE_PATH + proileImage }}
                    style={styles.sideMenuProfileIcon}
                />
                <Text className="text-kasir-blue text-[16px] font-medium ml-2">Admin</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View className='p-4 mb-4 border-t-2 border-kasir-blue flex-row items-center gap-2 mx-2'>
                <Logout height={30} width={30}/>
                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        fontSize: 15,
                        textAlign: 'left',
                        color: 'grey',
                        fontWeight: '500',
                        marginLeft:50
                    }}>
                    Logout
                </Text>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 70,
        height: 70,
        borderRadius: 100 / 2,
        marginLeft:10
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
    },

});

export default ProfileSidebarDrawer;
