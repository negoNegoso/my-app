import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar, Banner, Button, FAB } from "@react-native-material/core";
import CustomBannerJS from './components/banner/CustomBanner';
import CustomBannerIcon from './components/banner/CustomBannerIcon';
import CustomButton from './components/button/CustomButton';
import CustomChip from './components/chip/CustomChip';
import CustomFab from './components/fab/CustomFab';
import CustomFabState from './components/fab/CustomFabState';
import Cat from './components/cat/Cat';
//import CustomAppBar from './components/appbar/CustomAppBar';
//import CustomBasicAppBar from './components/AppBar/CustomBasicAppBar';
//import CustomAvatarAppBar from './components/AppBar/CustomAvatarAppBar';
//import CustomBottomAppBar from './components/AppBar/CustomBottomAppBar';
//import CustomTintAppBar from './components/AppBar/CustomTintAppBar';
//import CustomCenterAppBar from './components/AppBar/CustomCenterAppBar';

export default function App() {
  return (
    <View >
      <AppBar title="Main" />

      {/*
     <CustomAppBar />
      <CustomBasicAppBar/>
      <CustomAvatarAppBar/>
      <CustomTintAppBar/>
      <CustomBottomAppBar/>
      <CustomCenterAppBar/>
      <CustomAvatar/>
      <CustomSizeAvatar/> 
      <CustomBannerJS></CustomBannerJS>
      <CustomBannerIcon></CustomBannerIcon>
      <CustomButton></CustomButton>
      <CustomChip></CustomChip>
      <CustomFab></CustomFab>
      <CustomFabState></CustomFabState>
      */}
      
      <Cat name="Bichano" />
      <Cat name="Miau miau" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
