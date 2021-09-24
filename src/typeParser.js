function parseTypes(types) {
    let typeStr = '';

    types.forEach(obj => {
        typeStr += obj.type.name + ', ';
    });

    typeStr = typeStr.replace(new RegExp(', $'), '');
    return typeStr;
}

module.exports = {parseTypes};