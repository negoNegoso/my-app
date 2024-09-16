import React, { useState } from "react";
import {Stack, FAB,Banner,VStack ,Switch} from "@react-native-material/core";
import { SafeAreaView } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function CustomFabState() {
  const [loading, setLoading] = useState(true);
  return (
    <SafeAreaView>
      <Banner 
        text="Um botão de ação flutuante (FAB) representa a ação principal de uma tela e alteração de state"
        buttons={
        <Stack fill center spacing={2}>

        <VStack >
            <Switch value={loading} onValueChange={setLoading} />
              <FAB
                icon={props => <Icon name="plus" {...props} />}
                color="primary"
                loading={loading}
              />
              <FAB
                variant="extended"
                icon={props => <Icon name="plus" {...props} />}
                label="Button"
                color="primary"
                loading={loading}
              />
              <FAB
                variant="extended"
                icon={props => <Icon name="plus" {...props} />}
                label="Button"
                color="primary"
                loading={loading}
                loadingIndicatorPosition="overlay"
              />
              <FAB
                icon={props => <Icon name="plus" {...props} />}
                size="mini"
                color="primary"
                loading={loading}
              />
          </VStack>
          </Stack>
        }
      />
    </SafeAreaView>
  );
}