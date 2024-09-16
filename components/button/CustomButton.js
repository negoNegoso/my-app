import React from "react"
import { HStack, Banner, Button, Avatar,Stack } from "@react-native-material/core";
import { SafeAreaView } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function CustomButton() {
  return (
    <SafeAreaView>
      <Banner
        text="Os botões permitem que os usuários realizem ações e escolhas com um único toque."
        buttons={
          <HStack spacing={2}>
            <Avatar
              color="primary"
              icon={props => <Icon name="wifi-off" />}
            />
            <HStack fill center spacing={2}>
              <Button title="Contained" />
              <Button variant="outlined" title="Outlined" />
              <Button variant="text" title="Text" />
            </HStack>
          </HStack>
        }
      />
    </SafeAreaView>
  );
}