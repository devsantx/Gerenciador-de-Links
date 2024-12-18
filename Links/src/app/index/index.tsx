import { useState, useCallback } from "react"
import {
    View,
    Text,
    Modal,
    Image,
    Alert,
    Linking,
    FlatList,
    TouchableOpacity,
} from "react-native"
import { styles } from "./styles"

import { MaterialIcons} from "@expo/vector-icons"
import { colors } from "@/styles/color"

import { Link } from "@/components/link"
import { Option } from "@/components/option"
import { Categories } from "@/components/category/categories"
import { categories } from "@/utils/categories"
import { linkStorage, LinkStorage } from "@/storage/link-storage"

import { router, useFocusEffect } from "expo-router"

export default function Index() {
    const [showModal, setShowModal] = useState(false);
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage);
    const [links, setLinks] = useState<LinkStorage[]>([]);
    const [category, setCategory] = useState(categories[0].name);

    async function getLinks(){
        try {
            const response = await linkStorage.get();

            const filtred = response.filter((link) => link.category === category);


            setLinks(filtred);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível listar os links.");
        }
    }

    function handleDetails(selected: LinkStorage){
        setShowModal(true);
        setLink(selected);
    }


    async function linkRemove() {
        try {
            await linkStorage.remove(link.id);
            getLinks();
            setShowModal(false);
        } catch (error) {
        Alert.alert("Erro", "Não foi possível remover o link.");
        console.log(error);
        }
    }

     function handleRemove() {
         Alert.alert("Remover", "Tem certeza que deseja remover esse link?", [
            { text: "Nao", style: "cancel" },
            { text: "Sim", onPress: linkRemove},
        ])

    }

    async function handleOpen(){
        try {
        await Linking.openURL(link.url);
        setShowModal(false);
        } catch (error) {
            Alert.alert("Erro", "Nao foi possível abrir o link.");
            console.log(error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            getLinks();
        }, [category])
    );

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("@/assets/logo.png")} />

                <TouchableOpacity onPress={() => router.navigate("/add")}>
                <MaterialIcons name="add" size={36} color={colors.blue[300]}/>
                </TouchableOpacity>
            </View>

            <Categories onChange={setCategory} selected={category}/>

            <FlatList
            data={links}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
            <Link
                name={item.name}
                url={item.url}
                onDetails={() => handleDetails(item)}
            />}

            style={styles.links}
            contentContainerStyle={styles.linksContent}
            showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={showModal} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles. modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{link.category}</Text>
                            <TouchableOpacity>
                            <MaterialIcons name="close" size={24} color={colors.gray[400]} onPress={() => setShowModal(false)}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>{link.name}</Text>
                        <Text style={styles.modalUrl}>https://{link.url}.com.br</Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secundary" onPress={handleRemove}/>
                            <Option name="Editar" icon="edit" variant="secundary"/>
                            <Option name="Abrir" icon="open-in-new" variant="primary" onPress={handleOpen}/>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    )
}
