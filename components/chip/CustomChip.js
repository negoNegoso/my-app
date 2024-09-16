import React from "react"
import { Stack, Chip,Banner,HStack,Avatar,Button } from "@react-native-material/core";
import { SafeAreaView } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function CustomChip() {
  return (
    <SafeAreaView>
      <Banner
        text="Um chip é um pequeno bloco de informações,
         normalmente usado para representar uma categoria."
        buttons={
          <HStack spacing={2}>
            <HStack fill center spacing={4}>
            <Chip label="Filled" />
            <Chip variant="outlined" label="Outlined" />
            <Chip
              label="Filled"
              color="primary"
              leading={props => <Icon name="home" {...props} />}
            />
            <Chip
              variant="outlined"
              label="Outlined"
              color="primary"
              leading={props => <Icon name="menu" {...props} />}
            />
            </HStack>
          </HStack>
        }
      />
    </SafeAreaView>
  );
}