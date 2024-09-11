import React from "react"
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function CustomCenterAppBar() {
  return (
    <AppBar
      title="Titulo"
      subtitle="Lorem Ipsum"
      color="green"
      tintColor="white"
      centerTitle={true}
      leading={props =>
        <IconButton icon={
          props => <Icon name="menu"{...props} />
        } {...props} />
      }
    />
  );
}