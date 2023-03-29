import axios from 'axios';

export const getLongLat = async (postCode) => {
    const key = `17a3e02a9cc47ed1eac90bc2f9c0012a`;
    const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${postCode},GB&appid=${key}`;

    try {
        const { data } = await axios.get(url);
        return { lat: data.lat, lon: data.lon };
    } catch (e) {
        return;
    }

}

export const calcLonLatDiff = (lat_1, lon_1, lat_2, lon_2) => {
    const R = 6371; // km
    const dLat = toRad(lat_2 - lat_1);
    const dLon = toRad(lon_2 - lon_1);
    const lat1 = toRad(lat_1);
    const lat2 = toRad(lat_2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
}

// Converts numeric degrees to radians
export const toRad = (value) => {
    return value * Math.PI / 180;
}