import { Icon } from '@components';
import { DrawerParamList } from '@navigation/types';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  onPress?: () => void;
};

export default function HeaderMenuButton({ onPress }: Props) {
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  return (
    <TouchableOpacity onPress={onPress || navigation.toggleDrawer}>
      <Icon
        accessibilityLabel="Toggle drawer"
        name="menu"
        size="lg"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 11
  }
});
