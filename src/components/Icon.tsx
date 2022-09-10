import { Ionicons } from '@expo/vector-icons';
import { Icon as BaseIcon, IIconProps } from 'native-base';

export default function Icon(props: IIconProps) {
  return (
    <BaseIcon
      as={Ionicons}
      {...props}
    />
  );
}
