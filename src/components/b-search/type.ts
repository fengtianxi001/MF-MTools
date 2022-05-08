interface genConfigsType<Component, P extends { modelValue: any }> {
    name: string;
    label?: string;
    component: Component;
    formateKey?: Array<string>;
    defaultValue?: P['modelValue'];
    props?: Omit<P, 'modelValue'>;
  }
  
  export interface InputPropsType {
    modelValue: string;
    placeholder?: string;
  }
  export type InputConfigType = genConfigsType<'Input', InputPropsType>;
  
  export interface SelectPropsType {
    modelValue: string;
    placeholder?: string;
    loading?: boolean;
    options: Array<{
      label: string;
      value: string;
      [key: string]: any;
    }>;
  }
  export type SelectConfigType = genConfigsType<'Select', SelectPropsType>;
  
  export interface SelectInputPropsType {
    /** key为各组件的name */
    modelValue: {
      [key: string]: InputPropsType['modelValue'] | SelectPropsType['modelValue'];
    };
    input: Omit<InputPropsType, 'modelValue'> & {
      name: string;
    };
    select: Omit<SelectPropsType, 'modelValue'> & {
      name: string;
    };
  }
  export type SelectInputConfigType = genConfigsType<'SelectInput', SelectInputPropsType>;
  
  export interface SelectMultiplePropsType extends Omit<SelectPropsType, 'modelValue'> {
    modelValue: string[];
  }
  export type SelectMultipleConfigType = genConfigsType<'SelectMultiple', SelectMultiplePropsType>;
  
  export interface DatetimeRangePropsType {
    modelValue: Array<string>;
    placeholder?: string;
    startPlaceholder: string;
    endPlaceholder: string;
  }
  export type DatetimeRangeConfigType = genConfigsType<'DatetimeRange', DatetimeRangePropsType>;
  
  export interface PriceRangePropsType {
    modelValue: [number, number];
    placeholder: [string, string];
  }
  export type PriceRangeConfigType = genConfigsType<'PriceRange', PriceRangePropsType>;
  
  export type configType =
    | InputConfigType
    | SelectConfigType
    | SelectInputConfigType
    | SelectMultipleConfigType
    | DatetimeRangeConfigType
    | PriceRangeConfigType;