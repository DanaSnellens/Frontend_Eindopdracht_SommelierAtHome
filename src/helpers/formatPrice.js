function formatPrice(number) {
    if (number == null || isNaN(number)) {
        return 'Price is not available';
    }
    return `€ ${number.toFixed(2)}`
}

export default formatPrice;

