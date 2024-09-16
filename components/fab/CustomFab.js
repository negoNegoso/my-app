import React from "react"
import {Stack, FAB,Banner,HStack} from "@react-native-material/core";
import { SafeAreaView } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function CustomFab() {
  return (
    <SafeAreaView>
      <Banner
        text="Um botão de ação flutuante (FAB) representa a ação principal de uma tela."
        buttons={
          <HStack spacing={2}>
            <FAB icon={props => <Icon name="plus" {...props} />} />
            <FAB
              icon={props => <Icon name="plus" {...props} />}
              color="primary"
              loading
            />
            <FAB
              variant="extended"
              icon={props => <Icon name="navigation" {...props} />}
              label="navigate"
              color="primary"
            />
          </HStack>
        }
      />
    </SafeAreaView>
  );
}