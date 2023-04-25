import { useState, useEffect, useRef, useContext } from "react";
import { CheckedType, FormData as FormDataType } from "../../types";
import { CheckboxField } from "./CheckboxField";
import { FieldContainer } from "./FieldContainer";
import { PhoneField } from "./PhoneField";
import { TextField } from "./TextField";
import { SelectctFieldContainer } from "./SelectFieldContainer";
import { useFormValidator } from "./useFormValidator";
import StatusFormContext from "./StatusFormContext";
import LoacalStatusContext from "./LocalStatusContext";

export const StatusForm = () => {
    const [statusFormContext, setStatusFormContext] =
        useContext(StatusFormContext);

    const [localStatusContext, setLocalStatusContext] =
        useContext(LoacalStatusContext);

    const [checked, setChecked] = useState<CheckedType>("off");
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        lastname: "",
        city: "",
        password: "",
        passwordRe: "",
        phone: "",
        email: "",
    });

    const [formValidatorState, validateForm] = useFormValidator(
        formData,
        checked === "on" ? true : false
    );

    const isFormTheSame = (f1: FormDataType, f2: FormDataType): boolean => {
        if (
            f1.name === f2.name &&
            f1.lastname === f2.lastname &&
            f1.city === f2.city &&
            f1.password === f2.password &&
            f1.phone === f2.phone &&
            f1.email === f2.email
        ) {
            return true;
        } else return false;
    };

    const commitStatusChanges = (): void => {
        // setModificationDate(getFormatedDate(new Date()));
        setLocalStatusContext(
            Object.assign(localStatusContext, {
                date: getFormatedDate(new Date()),
            })
        );
        setStatusFormContext(formData);
        localStorage.setItem("statusFormData", JSON.stringify(formData));
        console.log(formData);
    };

    const [formError, setFormError] = useState(false);

    const initialRender = useRef(true);

    useEffect(() => {
        if (!initialRender.current) {
            const validated = validateForm();
            if (validated) {
                if (
                    statusFormContext &&
                    isFormTheSame(formData, statusFormContext)
                ) {
                    setFormError(true);
                } else {
                    setFormError(false);
                    commitStatusChanges();
                }
            }
        } else {
            initialRender.current = false;
        }
    }, [formData]);

    const getFormatedDate = (date: Date): string => {
        return date.toLocaleString("ru", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });
    };

    const getFormData = (targetForm: FormData): FormDataType => {
        return {
            name: targetForm.get("name")?.toString().trim() ?? "",
            lastname: targetForm.get("lastname")?.toString().trim() ?? "",
            city: targetForm.get("city")?.toString().trim() ?? "",
            password: targetForm.get("password")?.toString().trim() ?? "",
            passwordRe: targetForm.get("passwordRe")?.toString().trim() ?? "",
            phone: targetForm.get("phone")?.toString().trim() ?? "",
            email: targetForm.get("email")?.toString().trim() ?? "",
        };
    };

    const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
        const currentForm = new FormData(e.currentTarget);
        const dataToSend = getFormData(currentForm);

        setFormData(dataToSend);
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
                    value={statusFormContext?.name}
                    errored={formValidatorState.name.errored}
                    errorMessage={formValidatorState.name.errorMessage}
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
                    value={statusFormContext?.lastname}
                    errored={formValidatorState.lastname.errored}
                    errorMessage={formValidatorState.lastname.errorMessage}
                />
            </FieldContainer>
            <FieldContainer label="Ваш город" required>
                <SelectctFieldContainer
                    errored={formValidatorState.city.errored}
                    errorMessage={formValidatorState.city.errorMessage}
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
                    errored={formValidatorState.password.errored}
                    errorMessage={formValidatorState.password.errorMessage}
                />
            </FieldContainer>
            <FieldContainer
                label="Пароль еще раз"
                required
                infoText="Проверка на совпадение с паролем."
            >
                <TextField
                    id="passwordRe"
                    type="password"
                    name="passwordRe"
                    placeholder="Повторите Пароль"
                    errored={formValidatorState.passwordRe.errored}
                    errorMessage={formValidatorState.passwordRe.errorMessage}
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
                    value={statusFormContext?.phone}
                    errored={formValidatorState.phone.errored}
                    errorMessage={formValidatorState.phone.errorMessage}
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
                    value={statusFormContext?.email}
                    errored={formValidatorState.email.errored}
                    errorMessage={formValidatorState.email.errorMessage}
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
                    {localStatusContext.date
                        ? "последние изменения " + localStatusContext.date
                        : ""}
                </div>
            </div>
            <h1
                className={
                    "status-form_error " +
                    (formError ? "status-form_error__active" : "")
                }
            >
                Внесите изменения, чтобы изменить Ваш статус.
            </h1>
        </form>
    );
};
