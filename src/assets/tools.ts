export const formatMoney = (amount: number, decimalCount = 2, decimal = ".", thousands = " ", postfix = "руб.") => {
  decimalCount = Math.abs(decimalCount);
  decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

  const negativeSign = amount < 0 ? "-" : "";

  amount = parseInt(Math.abs(amount || 0).toFixed(decimalCount));
  let i = amount.toString();
  let j = (i.length > 3) ? i.length % 3 : 0;

  let formattedPrice = negativeSign +
    (j ? i.substring(0, j) + thousands : '') +
    i.substring(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
    (decimalCount ? decimal + Math.abs(amount - parseInt(i)).toFixed(decimalCount).slice(2) : "");

  return ( postfix.length ? `${formattedPrice} ${postfix}` : formattedPrice );
};

export const fetchData = async (url: string, opts?: object) => {
  try {
    const response = await fetch(url, opts);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();    
  } catch (e) {
    return (e instanceof Error ? e.toString() : "Invalid request");
  }
}

export const setStoreValue = (key: string, value: any) => {
  localStorage[key] = JSON.stringify(value);
}

export const getStoreValue = (key: string) => {
  return localStorage[key] && JSON.parse(localStorage[key]);
}

export const moneyRound = (value: number) => {
  return (Math.round(value * 100) / 100);
}