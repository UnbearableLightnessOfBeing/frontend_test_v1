export interface FieldLabel {
    label: string;
    required: boolean;
    htmlFor?: string;
}

interface InputField {
    id: string;
    name: string;
    type: string;
}

export type TextField = InputField & {
    placeholder: string;
    errored: boolean;
    errorMessage?: string;
};

export type PhoneField = TextField & { mask: string; maskPlaceholder: string };

export interface CityApiResponse {
    city: string;
    population: string;
}

export type City = {
    name: string;
};

export interface SelectField {
    id: string;
    name: string;
    options: City[];
    pending: boolean;
    errored: boolean;
    errorMessage?: string;
}

export type CheckboxField = InputField & {
    checkboxLabel: string;
    onData: (checked: CheckedType) => void;
};

export type FieldContainer = FieldLabel & {
    children: JSX.Element;
    infoText?: string;
};

export interface FormData {
    name: string;
    lastname: string;
    city: string;
    password: string;
    passwordRe: string;
    phone: string;
    email: string;
}

export type CheckedType = "on" | "off";

interface FormValidatorProp {
    errored: boolean;
    errorMessage: string;
}

export interface FormValidatorState {
    name: FormValidatorProp;
    lastname: FormValidatorProp;
    city: FormValidatorProp;
    password: FormValidatorProp;
    passwordRe: FormValidatorProp;
    phone: FormValidatorProp;
    email: FormValidatorProp;
}

export enum FormValidatorActionKind {
    setError = "setError",
    removeError = "removeError",
}

export type FormValidatorFieldName =
    | "name"
    | "lastname"
    | "city"
    | "password"
    | "passwordRe"
    | "phone"
    | "email";

export interface FormValidatorAction {
    type: FormValidatorActionKind;
    payload: {
        fieldName: FormValidatorFieldName;
        message?: string;
    };
}
