
import { MaterialIcons } from "@expo/vector-icons"


type Category = {
    id: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap
}


export const categories: Category[] = [
    {id: "1", name: "Estudo", icon: "menu-book"},
    {id: "2", name: "Projeto", icon: "folder"},
    {id: "3", name: "Site", icon: "language"},
    {id: "4", name: "Video", icon: "movie"},
    {id: "5", name: "Descontos", icon: "credit-card"},
    {id: "6", name: "Documentação", icon: "description"},
    {id: "7", name: "Artigo", icon: "newspaper"},
]
