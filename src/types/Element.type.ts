import { Control } from 'react-hook-form';

export interface InputType {
  label: string;
  name: string;
  type: string;
  required: boolean;
  errmsg: string | undefined;
  control: Control<Record<string, any>>;
}

export interface SelectType {
  label: string;
  name: string;
  required: boolean;
  errmsg: string | undefined;
  items: Record<string, string | number>[];
  control: Control<Record<string, any>>;
}
