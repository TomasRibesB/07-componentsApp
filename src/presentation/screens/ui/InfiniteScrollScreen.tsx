
import { useContext, useState } from "react"
import { ActivityIndicator, Image, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { FadeInImage } from "../../components/ui/FadeInImage"
import { ThemeContext } from "../../context/ThemeContext"

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])
    const loadMore = () => {
        const newArray = Array.from({ length: 5 }, (_, i) => i + numbers.length)

        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 1500)
    }


    const { colors } = useContext(ThemeContext);

    return (
        <View style={{backgroundColor:'black'}}>
            <FlatList
                data={numbers}
                renderItem={
                    ({ item }) => (
                        <ListItem number={item} />
                    )
                }
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                keyExtractor={(item) => item.toString()}
                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        justifyContent: 'center',
                    }}>
                        <ActivityIndicator size={40} color={colors.primary} />
                    </View>
                )
                }
            >

            </FlatList>
        </View>
    )
}

interface ListItemsProps {
    number: number;
}

const ListItem = ({ number }: ListItemsProps) => {
    return (
        /*<Image
            source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
            style={{
                width: '100%',
                height: 400,
            }}
        />*/
        <FadeInImage 
        uri = {`https://picsum.photos/id/${number}/500/400`}
        style={{
            width: '100%',
            height: 400,
        }}
        />
    )
}