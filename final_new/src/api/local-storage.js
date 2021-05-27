export const setToken = token => {
    localStorage.setItem('token', token);
}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const setToArray = array => {
    localStorage.setItem('id', JSON.stringify(array))
}
