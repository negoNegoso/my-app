import { Text, SafeAreaView, StyleSheet } from 'react-native';
import CustomAppBar from './CustomAppBar';
import CustomBasicAppBar from './CustomBasicAppBar';
import CustomAvatarAppBar from './CustomAvatarAppBar';
import CustomBottomAppBar from './CustomBottomAppBar';
import CustomTintAppBar from './CustomTintAppBar';
import CustomCenterAppBar from './CustomCenterAppBar';


export default function PageAppBar() {
   return (
    <SafeAreaView style={styles.container}>
      <CustomAppBar/>
      <CustomBasicAppBar/>
      <CustomAvatarAppBar/>
      <CustomTintAppBar/>
      <CustomBottomAppBar/>
      <CustomCenterAppBar/>
    </SafeAreaView>
  );
}