import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/color";

type Props = {
    name: string;
    url: string;
    onDetails: () => void;
}

export function Link({ name, url, onDetails}:Props) {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text style={styles.url} numberOfLines={1}>{url}</Text>
            </View>

            <TouchableOpacity onPress={onDetails}>
                <MaterialIcons name="more-vert" size={25} color={colors.gray[400]} onPress={onDetails}/>
            </TouchableOpacity>
        </View>
    )
}
