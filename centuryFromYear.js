function centuryFromYear(year) {
    var century = Math.floor(year / 100);
    return (year % 100 === 0) ? century : ++century;
}
