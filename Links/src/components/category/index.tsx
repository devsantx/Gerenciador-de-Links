import {Text, Pressable, PressableProps} from "react-native";
import {styles} from "./styles";
import { colors } from "@/styles/color";
import { MaterialIcons } from "@expo/vector-icons";

type CategoryProps = PressableProps & {
    name: string;
    isSelected: boolean;
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function Category({name, icon, isSelected ,...rest}: CategoryProps){ {
    const color = isSelected ? colors.blue[300] : colors.gray[400];
    return(
        <Pressable style={styles.container} {...rest}>
            <MaterialIcons name={icon} size={16} color={color}/>
            <Text style={[styles.name, {color}]}>{name}</Text>
        </Pressable>
    )
  }
}
