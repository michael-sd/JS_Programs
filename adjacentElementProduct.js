function adjacentElementsProduct(inputArray) {
    var max = 0;
    for (var i = 0; i < inputArray.length; i++) {
        for (var j = i + 1; j < inputArray.length; j++) {
            product = inputArray[i] * inputArray[j]
            if (product > max && inputArray.indexOf(inputArray, product) !=-1) {
                max = product;
            }
        }
    }
    return product;
}
