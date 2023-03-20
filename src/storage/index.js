//store data
export const storeData = (key, value) => {

    //defensive check
    if (typeof value !== 'object' || value === null) {
        return;
    }

    localStorage.setItem(key, JSON.stringify(value));
}

//get dat
export const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}