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