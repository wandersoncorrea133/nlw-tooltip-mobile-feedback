import React from "react";
import { View } from "react-native";
import { Copyrigth } from "../Copyright";

import { styles } from "./styles";

export function Options() {
  return (
    <View style={styles.container}>
      <Copyrigth />
    </View>
  );
}
