import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/color";

import { router } from "expo-router";
import { Categories } from "@/components/category/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

   async function handleAdd() {
        try{
           if(!category) {
               return Alert.alert("Categoria", "Selecione uma categoria para o link.");
           }
           if(!name.trim()) {
               return Alert.alert("Nome do link", "Preencha um nome para o link.");
           }
           if(!url.trim()) {
               return Alert.alert("URL", "Preencha a URL do link.");
           }

           await linkStorage.save({
            id: new Date().getTime().toString(),
            category,
            name,
            url
           });

           Alert.alert("Sucesso", "Link salvo com sucesso.", [
            { text: "Ok", onPress: () => router.back()}
           ]);

        }catch(error) {
            Alert.alert("Erro", "Não foi possível salvar o link.");
            console.log(error);
        }
    }

    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
                <MaterialIcons name="arrow-back" size={36} color={colors.gray[200]}/>
            </TouchableOpacity>

            <Text style={styles.title}>Novo</Text>
        </View>

        <Text style={styles.label}>Selecione uma categoria:</Text>
        <Categories onChange={setCategory} selected={category}/>

        <View style={styles.form}>
            <Input
                placeholder="Nome do link"
                onChangeText={setName}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Input
                placeholder="URL"
                onChangeText={setUrl}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Button title="Adicionar" onPress={handleAdd}/>
        </View>

    </View>
    )
}
