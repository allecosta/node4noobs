const getCurrentDate = () => new Date().toISOString();
//console.log(getCurrentDate());

const formatCurrency = (amount, currency = 'BRL') => {
    return new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: currency
    }).format(amount);
};

module.exports = { getCurrentDate, formatCurrency };