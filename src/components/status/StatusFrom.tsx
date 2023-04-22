import { useState } from "react";
import { CheckedType, FormData as FormDataType } from "../../types";
import { CheckboxField } from "./CheckboxField";
import { FieldContainer } from "./FieldContainer";
import { PhoneField } from "./PhoneField";
import { SelectField } from "./SelectField";
import { TextField } from "./TextField";

export const StatusForm = () => {
    const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
        const formData = new FormData(e.currentTarget);
        const dataToSend: FormDataType = {
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            city: formData.get("city"),
            password: formData.get("password"),
            phoneNumber: formData.get("phone"),
        };

        console.log(dataToSend);
        console.log(JSON.stringify(dataToSend));
    };

    const [checked, setChecked] = useState<CheckedType>("off");

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
                    errored={false}
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
                <SelectField
                    name="city"
                    id="city"
                    options={[{ name: "aboba" }, { name: "zeliboba" }]}
                />
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
                <div className="button-container_info">some info</div>
            </div>
        </form>
    );
};
