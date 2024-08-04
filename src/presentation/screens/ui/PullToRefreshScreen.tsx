
import { RefreshControl, Text, View } from "react-native"
import { Title } from "../../components/ui/Titulo"
import { CustomView } from "../../components/ui/CustomView"
import { ScrollView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useContext, useState } from "react"
import { globalStyles } from "../../../config/theme/theme"
import { ThemeContext } from "../../context/ThemeContext"

export const PullToRefreshScreen = () => {

    const [isRefreshing, setisRefreshing] = useState(false)

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setisRefreshing(true);

        setTimeout(() => {
            setisRefreshing(false);
        }, 1500);
    }

    const { colors } = useContext(ThemeContext);

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    onRefresh={onRefresh}
                    colors={[colors.primary, 'red', 'orange', 'green']}
                    tintColor={colors.primary}
                    progressBackgroundColor={colors.cardBackground}

                />
            }
            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        >
            <CustomView margin>
                <Title text="Pull to Refresh" />
            </CustomView>
        </ScrollView>
    )
}
