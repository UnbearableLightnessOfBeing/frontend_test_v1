import { useReducer } from "react";
import {
    FormData as FormDataType,
    FormValidatorAction,
    FormValidatorActionKind,
    FormValidatorFieldName,
    FormValidatorState,
} from "../../types";
import fieldValidator from "./FieldValidators";

export const useFormValidator = (
    form: FormDataType,
    isEmailRequired: boolean
): [FormValidatorState, () => boolean] => {
    const formValidatorReducer = (
        state: FormValidatorState,
        action: FormValidatorAction
    ) => {
        const { type, payload } = action;

        switch (type) {
            case FormValidatorActionKind.setError:
                return {
                    ...state,
                    [payload.fieldName]: {
                        errored: true,
                        errorMessage: payload.message ?? "",
                    },
                };
            case FormValidatorActionKind.removeError:
                return {
                    ...state,
                    [payload.fieldName]: {
                        errored: false,
                        errorMessage: payload.message ?? "",
                    },
                };
            default:
                return state;
        }
    };

    const [formValidatorState, dispatch] = useReducer(formValidatorReducer, {
        name: { errored: false, errorMessage: "" },
        lastname: { errored: false, errorMessage: "" },
        city: { errored: false, errorMessage: "" },
        password: { errored: false, errorMessage: "" },
        passwordRe: { errored: false, errorMessage: "" },
        phone: { errored: false, errorMessage: "" },
        email: { errored: false, errorMessage: "" },
    });

    const validateField = (
        value: string,
        fieldName: FormValidatorFieldName
    ): boolean => {
        let [isValidated, message] = [false, ""];
        if (fieldName === "name") {
            [isValidated, message] = fieldValidator.validateName(value);
        } else if (fieldName === "lastname") {
            [isValidated, message] = fieldValidator.validateLastName(value);
        } else if (fieldName === "city") {
            [isValidated, message] = fieldValidator.validateCity(value);
        } else if (fieldName === "password") {
            [isValidated, message] = fieldValidator.validatePassword(value);
        } else if (fieldName === "passwordRe") {
            [isValidated, message] = fieldValidator.revalidatePassword(
                value,
                form.password
            );
        } else if (fieldName === "phone") {
            [isValidated, message] = fieldValidator.validatePhone(value);
        } else {
            [isValidated, message] = fieldValidator.validateEmail(
                value,
                isEmailRequired
            );
        }

        if (isValidated) {
            dispatch({
                type: FormValidatorActionKind.removeError,
                payload: {
                    fieldName: fieldName,
                },
            });
        } else {
            dispatch({
                type: FormValidatorActionKind.setError,
                payload: {
                    fieldName: fieldName,
                    message: message,
                },
            });
        }

        return isValidated;
    };

    const validateForm = (): boolean => {
        let validated = true;
        if (!validateField(form.name, "name")) {
            validated = false;
        }
        if (!validateField(form.lastname, "lastname")) {
            validated = false;
        }
        if (!validateField(form.city, "city")) {
            validated = false;
        }
        if (!validateField(form.password, "password")) {
            validated = false;
        }
        if (!validateField(form.passwordRe, "passwordRe")) {
            validated = false;
        }
        if (!validateField(form.phone, "phone")) {
            validated = false;
        }
        if (!validateField(form.email, "email")) {
            validated = false;
        }
        return validated;
    };

    return [formValidatorState, validateForm];
};
