import Ionicons from '@expo/vector-icons/Ionicons';
import { type ComponentProps } from 'react';

type Props = {
  name: ComponentProps<typeof Ionicons>['name'];
  color: string;
};

export function TabBarIcon({ name, color }: Props) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...{ name, color }} />;
}