
export interface FieldLabel {
    label: string;
    required: boolean;
    htmlFor?: string;
}

interface InputField {
    id: string,
    name: string,
    type: string,
};

export type TextField = InputField & {
    placeholder: string;
    errored: boolean;
    errorMessage?: string;
}

export type PhoneField = TextField & { mask: string, maskPlaceholder: string };

type City = {
    name: string;
}

export interface SelectField {
    id: string;
    name: string;
    options: City[];
}

export type CheckboxField = InputField & { checkboxLabel: string, onData: (checked: CheckedType) => void };

export type FieldContainer = FieldLabel & { children: JSX.Element, infoText?: string};

export interface FormData {
    name: string,
    lastname: string,
    city: string,
    password: string,
    phoneNumber?: string,
    email?: string,
};

export type CheckedType = "on" | "off";