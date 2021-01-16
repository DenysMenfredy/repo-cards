
function dateParse(date) {
    date = new Date(date);
    return date.toLocaleDateString();
}

module.exports = dateParse;
