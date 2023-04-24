import validator from "./validationFunctions";

type ValidatorReturnType = [isValidated: boolean, message: string];

const validateName = (name: string): ValidatorReturnType => {
    if (validator.isEmpty(name)) {
        return [false, "Заполните поле"];
    } else if (!validator.isCyrillic(name)) {
        return [false, "Используйте только кириллицу"];
    } else if (!validator.isMoreThanNChars(1, name)) {
        return [false, "Поле должно содержать не менее 2 символов"];
    }
    return [true, ""];
};

const validateLastName = (lastname: string): ValidatorReturnType => {
    return validateName(lastname);
};

const validateCity = (city: string): ValidatorReturnType => {
    if (validator.isEmpty(city)) {
        return [false, "Заполните поле"];
    } else return [true, ""];
};

const validatePassword = (pass: string): ValidatorReturnType => {
    if (validator.isEmpty(pass)) {
        return [false, "Укажите пароль"];
    } else if (!validator.isLatin(pass)) {
        return [false, "Используйте только латиниские буквы"];
    } else if (!validator.isMoreThanNChars(5, pass)) {
        return [false, "Поле должно содержать не менее 6 символов"];
    }
    return [true, ""];
};

const revalidatePassword = (
    passre: string,
    pass: string
): ValidatorReturnType => {
    if (validator.isEmpty(passre)) {
        return [false, "Заполните это поле"];
    } else if (pass === passre) {
        return [true, ""];
    } else return [false, "Пароли не совпадают"];
};

const validatePhone = (phone: string): ValidatorReturnType => {
    if (validator.isEmpty(phone)) {
        return [true, ""];
    } else if (phone.includes("*")) {
        return [false, "Введите корректный номер"];
    } else return [true, ""];
};

const validateEmail = (
    email: string,
    required: boolean
): ValidatorReturnType => {
    if (required && validator.isEmpty(email)) {
        return [false, "Заполните email"];
    } else if (validator.isEmpty(email)) {
        return [true, ""];
    } else if (!validator.isEmail(email)) {
        return [false, "Введите корректный email"];
    } else return [true, ""];
};

export default {
    validateName,
    validateLastName,
    validateCity,
    validatePassword,
    revalidatePassword,
    validatePhone,
    validateEmail,
};
