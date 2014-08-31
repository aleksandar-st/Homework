//This function displays all the properties of the "document" object in alphabetical order
function displayProperties() {
    var properties = [];
    for (var prop in document) {
        properties.push(prop);
    }

    properties.sort();

    console.log(properties.join("\n"));    
};

displayProperties();



