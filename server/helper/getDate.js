module.exports = function getDate() {
    const date = new Date().toJSON().slice(0, 10);
    return date
}