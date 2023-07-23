const TEMPLATE_STRING = '0123456789abcdefghijklmnopqrstuvwxyz';

export const getUniqId = (length = 5) => {
    let result = '';

    for (let i = length; i > 0; i--) {
        result += TEMPLATE_STRING[Math.floor(Math.random() * TEMPLATE_STRING.length)];
    }

    return result;
};
