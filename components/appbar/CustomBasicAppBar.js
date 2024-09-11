import React from "react"
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function CustomAppBar() {
  return (
    <AppBar
      title="Titulo da tela"
      leading={props =>
        <IconButton icon={
          props => <Icon name="menu"{...props} />
        } {...props} />
      }
    />
  );
}