const splitValue = () => {
    const value = __dirname;
    const filepath = value.split('\\middleware');
    return filepath;
}

module.exports = {splitValue}