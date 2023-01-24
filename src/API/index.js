import AppUrl from './AppUrl'

export const BASEURL = AppUrl.ROOT

export const register = data => {
    console.log(data);
    return fetch(AppUrl.REGISTERURL, {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: data,
    }).then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
}

export const login = data => {
    console.log('login,,,', data, AppUrl.LOGINURL);
    return fetch(AppUrl.LOGINURL, {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: data,
    })
        .then(response => response.json())
        .then(response => response)
        .catch(e => console.log(e));
}
export const getData = (param,data) => {
    return fetch(AppUrl.GETDATA+param+data, {
        method: 'GET',
        // headers:{"Content-Type": "application/json"}
    }).then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
}
export const addData = data => {
    console.log(data);
    return fetch(AppUrl.ADDDATA, {
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: data,
    }).then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
}

export const updateData = data => {
    console.log(data);
    return fetch(AppUrl.UPDATEDATA, {
        method: 'PATCH',
        headers:{"Content-Type": "application/json"},
        body: data,
    }).then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
}
export const deleteData = data => {
    console.log(data);
    return fetch(AppUrl.UPDATEDATA, {
        method: 'DELETE',
        headers:{"Content-Type": "application/json"},
        body: data,
    }).then(res => res.json())
        .then(res => res)
        .catch(e => console.log(e))
}