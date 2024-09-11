import React from "react"
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function CustomTintAppBar() {
  return (
    <AppBar
      title="Titulo da tela colorido"
      color="pink"
      tintColor="blue"
      leading={props =>
        <IconButton icon={
          props => <Icon name="menu"{...props} />
        } {...props} />
      }
    />
  );
}