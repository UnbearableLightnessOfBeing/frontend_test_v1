type RegExpFunction = (str: string) => boolean;

const createPattern = (pattern: RegExp): RegExpFunction => {
    return (str: string): boolean => {
        if (str.match(pattern)) {
            return true;
        } else return false;
    };
};

const isCyrillic = createPattern(/^[а-яА-ЯёЁ]+$/g);
const isLatin = createPattern(/^[a-zA-Z]+$/g);
const isEmail = createPattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

const isEmpty = (str: string): boolean => {
    return str.length ? false : true;
};

const isMoreThanNChars = (charNumber: number, str: string): boolean => {
    return str.length > charNumber ? true : false;
};

export default {
    isEmpty,
    isCyrillic,
    isLatin,
    isMoreThanNChars,
    isEmail,
};
