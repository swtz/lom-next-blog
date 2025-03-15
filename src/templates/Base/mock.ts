import { BaseProps } from '.';
import { data } from '../../api/dados.json';

export default {
  setting: data.setting,
  children: 'Hello, world!',
} as BaseProps;
