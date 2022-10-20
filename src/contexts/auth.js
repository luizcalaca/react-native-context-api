import React, {createContext, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [user, setUser] = useState({})
    const navigation = useNavigation()

    function signIn(email, password) {
        if(email !== '' && password !== ''){
            setUser({
                email: email,
                password: password
            })
            navigation.navigate("Home")
            return
        }
        Alert.alert("Username or password are invalid")
    }
    return(
        <AuthContext.Provider value={{name: "Calaça", signIn, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider