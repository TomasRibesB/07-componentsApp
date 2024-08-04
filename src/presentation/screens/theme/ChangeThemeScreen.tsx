import { Text, View } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Titulo'
import { Button } from '../../components/ui/Button'

export const ChangeThemeScreen = () => {
    return (
      <CustomView margin>
        <Title text="Cambiar tema" safe />
        <Button text="Light" />
        <View style={{height: 10}} />
        <Button text="Dark" />
      </CustomView>
    )
  }