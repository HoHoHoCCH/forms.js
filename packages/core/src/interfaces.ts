import { Form } from './form.js';
import { FieldType, HTMLElementEvent, Option, Schema } from './types.js';

export interface FormOptions {
  id: string;
  saveProgress?: boolean;
  useFormData?: boolean;
  submit?: (data: any) => void;
  schema: Schema;
  action?: string | null;
  method?: 'get' | 'post' | null;
  licenseKey?: string;
  className?: string;
}

export interface GroupOptions {
  id: string;
  label?: string;
  type: 'group';
  conditions?: (data: any) => boolean;
  prefixSchema?: boolean;
  className?: string;
  schema: Schema;
}

export interface ListFieldOptions {
  id: string;
  label?: string;
  type: 'list';
  conditions?: (data: any) => boolean;
  buildButtons?: boolean;
  className?: string;
  listRemoveClassName?: string;
  listAddClassName?: string;
  listRemoveTemplate?: string;
  listAddTemplate?: string;
  schema: Schema;
}

export interface TabsOptions {
  id: string;
  type: 'tabs';
  conditions?: (data: any) => boolean;
  className?: string;
  tabs: TabOptions[];
  strict?: boolean;
}

export interface TabOptions {
  id: string;
  label: string;
  conditions?: (data: any) => boolean;
  validation?: (fields: string[], form: Form) => true | string;
  disabled?: ((data: any) => boolean) | boolean;
  schema: Schema;
}

export interface RowOptions {
  id: string;
  label?: string;
  type: 'row';
  conditions?: (data: any) => boolean;
  className?: string;
  schema: Schema;
}

export interface ButtonOptions {
  id: string;
  template: string;
  buttonType: 'submit' | 'reset' | 'button';
  type: 'button';
  conditions?: (data: any) => boolean;
  click?: (event: HTMLElementEvent<HTMLButtonElement>, data: FormData) => void;
  className?: string;
}

export interface FieldOptions {
  id: string;
  name?: string;
  label?: string;
  type: FieldType;
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  debounce?: number;
  default?: unknown;
  className?: string;
}

export interface StaticFieldOptions {
  id: string;
  type: 'static';
  conditions?: (value: any, data: any) => boolean;
  template: string;
  className?: string;
}

export interface CheckboxFieldOptions {
  id: string;
  name?: string;
  label?: string;
  type: 'checkbox';
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  default?: boolean | null;
  className?: string;
  toggle?: boolean;
}

export interface DateFieldOptions {
  id: string;
  name?: string;
  label?: string;
  type: 'date' | 'week' | 'datetime' | 'time' | 'daterange';
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  className?: string;
  default?: string | Date | null;
  options?: object;
  enhance?: boolean;
}

export interface TextareaFieldOptions {
  id: string;
  name?: string;
  label?: string;
  type: 'textarea';
  rows?: number;
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  className?: string;
  default?: string | null;
}

export interface SelectFieldOptions {
  id: string;
  name?: string;
  label?: string;
  type: 'select';
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  optionsList?: Option[];
  className?: string;
  default?: string | string[] | object | object[] | null;
  multiple?: boolean;
  options?: object;
  enhance?: boolean;
}

export interface FileFieldOptions {
  id: string;
  name?: string;
  label?: string;
  type: 'file';
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  className?: string;
  options?: object;
  debounce?: number;
  enhance?: boolean;
  multiple?: boolean;
  accept?: string;
}

export interface RitchtextFieldOptions {
  id: string;
  name?: string;
  label?: string;
  type: 'ritchtext';
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  className?: string;
  default?: string | null;
  options?: object;
}

export interface HiddenFieldOptions {
  id: string;
  name?: string;
  default?: unknown;
}

export interface NumberFieldOptions {
  id: string;
  name?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  type: 'number' | 'range';
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  default?: number | null;
  className?: string;
}

export interface RadioFieldOptions {
  id: string;
  name?: string;
  label?: string;
  type: 'radio';
  schema: RadioFieldItemOptions[];
  required?: ((value: any, data: any) => boolean) | boolean;
  change?: (value: any) => void;
  validation?: (value: any, data: any, required: boolean) => true | string;
  conditions?: (value: any, data: any) => boolean;
  disabled?: ((value: any, data: any) => boolean) | boolean;
  default?: string | null;
  className?: string;
}

export interface RadioFieldItemOptions {
  id: string;
  label: string;
  value: string;
}

export interface Field {
  options: FieldOptions;
  inputElement?: HTMLElement;
  containerElement?: HTMLElement;
  labelElement?: HTMLElement;
  validationElement?: HTMLElement;
  _id: string;
  _parent: HTMLElement;
  _form: Form;
}