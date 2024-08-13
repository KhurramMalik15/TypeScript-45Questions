// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function make_Car(manufacturer, model, color) {
    var options = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        options[_i - 3] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model, color: color };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car = value;
    });
    return car;
}
console.log(make_Car("Volkswagen", "Jetta", "Red", ["year", 2022]));
console.log(make_Car("Honda", "Civic", "White", ["year", 2024]));
