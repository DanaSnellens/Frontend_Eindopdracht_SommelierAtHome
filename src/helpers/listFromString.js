function listFromString(inputString) {
    const items = inputString.split(',').map(item => item.trim());
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}
export default listFromString;