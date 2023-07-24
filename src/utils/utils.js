const setToValue = (obj, value, path) => {
    let i;
    path = path.split('.');
    for (i = 0; i < path.length - 1; i++) {
        obj = obj[path[i]];
    }
    obj[path[i]] = value;
}

const writeObject = (object, value, path) => {
    path = path.split('.');
    return path.reduceRight((obj, next, idx, fullPath) => {
        if (idx + 1 === fullPath.length) {
            return { [next]: value }
        } else {
            return { [next]: obj }
        }
    }, object);
}

export { setToValue, writeObject }