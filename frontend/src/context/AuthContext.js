import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('https://rshishir.pythonanywhere.com/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })
        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate(-1)
        } else {
            alert('Something went wrong!')
        }
    }

    useEffect(()=>{
        setActive()
    },[user])

    let registerUser = async (e) => {
        e.preventDefault()
        let form_data = new FormData();
        form_data.append('first_name', e.target.first_name.value);
        form_data.append('last_name', e.target.last_name.value);
        form_data.append('username', e.target.username.value);
        form_data.append('email', e.target.email.value);
        form_data.append('password', e.target.password.value);
        form_data.append('phone', e.target.phone.value);
        form_data.append('address', e.target.address.value);
        form_data.append('dob', e.target.dob.value);
        form_data.append('profilepic', e.target.profilepic.files[0]);
        form_data.append('gender', e.target.gender.value);
        form_data.append('type', 'Patient');

        axios.post('https://rshishir.pythonanywhere.com/api/patient/add/', form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                // console.log(res.data);
                navigate('/login')
            })
            .catch(err => console.log(err))

    }

    const setActive = async()=>{
        let response = await fetch('https://rshishir.pythonanywhere.com/api/user/partial/' + user.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify({ 'active': true })
        })
    }


    let logoutUser = async () => {
        let response = await fetch('https://rshishir.pythonanywhere.com/api/user/partial/' + user.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: JSON.stringify({ 'active': false })
        })
        if (response.status === 200) {
            setAuthTokens(null)
            setUser(null)
            localStorage.removeItem('authTokens')
            navigate('/login')
        }
    }


    let updateToken = async () => {

        let response = await fetch('https://rshishir.pythonanywhere.com/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh': authTokens?.refresh })
        })

        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }

        if (loading) {
            setLoading(false)
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        registerUser: registerUser,
        logoutUser: logoutUser,
    }


    useEffect(() => {

        if (loading) {
            updateToken()
        }

        let fourMinutes = 1000 * 30 * 7

        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}