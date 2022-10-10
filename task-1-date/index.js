const addZero = (numberStr) => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr)

const getDateFormat = (date, separetor = '.') => {
    const dateItem = date.getDate();
    const monthItem = date.getMonth();
    const yearItem = date.getFullYear();
    const arrDate = [dateItem, monthItem, yearItem].map((item) => addZero(item));
    return arrDate.join(separetor);
} 


console.log(getDateFormat(new Date(2005, 03, 15)));