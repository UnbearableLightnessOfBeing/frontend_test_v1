const isCyrillic = (str: string): boolean => {
    const regex = /^[а-яА-ЯёЁ]+$/g;

    if (regex.test(str)) {
        return true;
    } else return false;
};

const isEmpty = (str: string): boolean => {
    return str.length ? false : true;
};

const isMoreThanNChars = (charNumber: number, str: string): boolean => {
    return str.length > charNumber ? true : false;
};

export default {
    isEmpty,
    isCyrillic,
    isMoreThanNChars,
};
