// setting "proxy": "http://localhost:8000" in the package.json file 
// avoids typing the whole url and only type the endpoints

// fetching requests from the backend
const login = (user) => {
    return fetch('/user/login', {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if (res.status !== 401) {
            return res.json().then(data => data)
        }
        else {
            return { isAuthenticated: false, user: {username: '', role: ''} }
        }
    })
}

const register = (user) => {
    return fetch('/user/register', {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => data)
}

const logout = () => {
    return fetch('/user/logout')
    .then(res => res.json())
    .then(data => data)
}

const isAuthenticated = () => {
    return fetch('/user/authenticated')
        .then(res => {
        if (res.status !== 401) {
            return res.json().then(data => data)
        }
        else {
            return {isAuthenticated: false, user: {username: '', role: ''}}
        }
    })
}

export default {
    login,
    register,
    logout,
    isAuthenticated
}

