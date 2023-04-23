import { useState, useReducer, ReducerAction, ReducerState } from "react";
import {
    CheckedType,
    FormData as FormDataType,
    FormValidatorAction,
    FormValidatorActionKind,
    FormValidatorState,
} from "../../types";
import { CheckboxField } from "./CheckboxField";
import { FieldContainer } from "./FieldContainer";
import { PhoneField } from "./PhoneField";
import { TextField } from "./TextField";
import { SelectctFieldContainer } from "./SelectFieldContainer";
import validator from "./validationFunctions";

export const StatusForm = () => {
    const [modificationDate, setModificationDate] = useState("");
    const [checked, setChecked] = useState<CheckedType>("off");

    const formValidatorReducer = (
        state: FormValidatorState,
        action: FormValidatorAction
    ) => {
        const { type, payload } = action;

        switch (type) {
            case FormValidatorActionKind.setNameError:
                return {
                    ...state,
                    name: {
                        errored: true,
                        errorMessage: payload ?? "",
                    },
                };
            case FormValidatorActionKind.removeNameError:
                return {
                    ...state,
                    name: {
                        errored: false,
                        errorMessage: payload ?? "",
                    },
                };
            default:
                return state;
        }
    };

    const [formState, dispatch] = useReducer(formValidatorReducer, {
        name: { errored: false, errorMessage: "" },
    });

    console.log(formState);

    const validateName = (name: string): boolean => {
        if (validator.isEmpty(name)) {
            console.log("name is empy");
            dispatch({
                type: FormValidatorActionKind.setNameError,
                payload: "Заполните Имя",
            });
            return false;
        } else if (!validator.isCyrillic(name)) {
            console.log("name should be written in cyrillic");
            dispatch({
                type: FormValidatorActionKind.setNameError,
                payload: "Используйте только кириллицу",
            });
            return false;
        } else if (!validator.isMoreThanNChars(1, name)) {
            console.log("name should be more than 1 characters");
            dispatch({
                type: FormValidatorActionKind.setNameError,
                payload: "Имя должно содержать не менее 2 символов",
            });
            return false;
        }
        dispatch({
            type: FormValidatorActionKind.removeNameError,
            payload: null,
        });
        return true;
    };

    const validateForm = (formData: FormDataType): boolean => {
        let validated = true;

        if (!validateName(formData.name)) {
            validated = false;
        }

        return validated;
    };

    const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
        const formData = new FormData(e.currentTarget);
        const dataToSend: FormDataType = {
            name: formData.get("name")?.toString().trim() ?? "",
            lastname: formData.get("lastname")?.toString().trim() ?? "",
            city: formData.get("city")?.toString().trim() ?? "",
            password: formData.get("password")?.toString().trim() ?? "",
            phoneNumber: formData.get("phone")?.toString().trim() ?? "",
            email: formData.get("email")?.toString().trim() ?? "",
        };

        if (validateForm(dataToSend)) {
            console.log(dataToSend);
        } else {
            console.log("not validated");
        }

        setModificationDate(
            new Date().toLocaleString("ru", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            })
        );
    };

    const handleChecked = (checked: CheckedType): void => {
        setChecked(checked);
    };

    return (
        <form
            className="status-form"
            onSubmit={(e) => {
                e.preventDefault();
                handleForm(e);
            }}
        >
            <FieldContainer
                label="Имя"
                required
                htmlFor="name"
                infoText="Должен содержать не менее 2 символов и только кириллица."
            >
                <TextField
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Введите Имя"
                    errored={formState.name.errored}
                    errorMessage={formState.name.errorMessage}
                />
            </FieldContainer>
            <FieldContainer
                label="Фамилия"
                required
                infoText="Должен содержать не менее 2 символов и только кириллица."
            >
                <TextField
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Введите Фамилию"
                    errored={false}
                />
            </FieldContainer>
            <FieldContainer label="Ваш город" required>
                <SelectctFieldContainer />
            </FieldContainer>
            <div className="status-form_hr"></div>
            <FieldContainer
                label="Пароль"
                required
                infoText="Должен содержать не менее 6 символов и только латинские буквы."
            >
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Введите Пароль"
                    errored={false}
                />
            </FieldContainer>
            <FieldContainer
                label="Пароль еще раз"
                required
                infoText="Проверка на совпадение с паролем."
            >
                <TextField
                    id="password-re"
                    type="password"
                    name="password-re"
                    placeholder="Повторите Пароль"
                    errored={false}
                />
            </FieldContainer>
            <div className="status-form_hr"></div>
            <FieldContainer
                label="Номер телефона"
                required={false}
                infoText="Маска с международным форматом “+ 7 (999) 999-99-99”."
            >
                <PhoneField
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+7 (***) ***-**-**"
                    mask="+7 (999) 999-99-99"
                    maskPlaceholder="*"
                    errored={false}
                />
            </FieldContainer>
            <FieldContainer
                label="Элкетронная почта"
                required={checked === "on" ? true : false}
                infoText="Проверка на валидность email."
            >
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Введите электронную почту"
                    errored={false}
                />
            </FieldContainer>
            <FieldContainer label="Я согласен" required={false}>
                <CheckboxField
                    id="checkbox"
                    name="checkbox"
                    type="checkbox"
                    checkboxLabel="получать актуальную информацию по email"
                    onData={handleChecked}
                />
            </FieldContainer>
            <div className="button-container">
                <button type="submit" className="button-container_button">
                    Изменить
                </button>
                <div className="button-container_info">
                    {modificationDate
                        ? "последние изменения " + modificationDate
                        : ""}
                </div>
            </div>
        </form>
    );
};
