import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User} from 'firebase/auth'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/firebase'

interface AuthProviderProps{
    children:React.ReactNode
}

interface IAuth {
    user: User | null
    signUp: (email: string, password: string) => Promise<void>
    signIn: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
    getUser: () => User | null
    error: string | null
    loading: boolean
  }
const AuthContext = createContext<IAuth>({
    user: null,
    signUp: async () => {},
    signIn: async () => {},
    logout: async () => {},
    getUser: () => null,
    error: null,
    loading: false,
  })

export const AuthProvider = ({children}: AuthProviderProps) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User | null >(null)
    const [error, setError] = useState<string | null>(null)
    const [initialLoading, setInitialLoading] = useState(true)
    useEffect(() =>
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("user logged in");
            setUser(user)
            setLoading(false)
            } else {
                // console.log("user not logged in");
            setUser(null)
            navigate('/login', {replace: true })
            }
            setInitialLoading(false)
        }),[auth])

    const signUp = async (email: string, password: string) => {
        setLoading(true)
        await createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            setUser(userCredentials.user)
            navigate('/', {replace: true })
            setLoading(false)
        }).catch((error) => {
            console.log("error during singup was", error.message);
        }).finally(()=>setLoading(false))
    }

    const signIn = async (email: string, password: string) => {
        setLoading(true)
        await signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
            setUser(userCredentials.user)
            navigate("/")
            setLoading(false)
        }).catch((error) => {
            setError(error)
            console.log("error during singup was", error.message);
        }).finally(()=>setLoading(false))
    }

    const logout = async () => {
        setLoading(true)
        signOut(auth).then(()=>{
            setUser(null)
            navigate('/login', {replace: true })
        }).catch((err)=>{
            setError(err)
            console.log("error during logging out was", err.message);
        }).finally(()=>setLoading(false))
    }

    const getUser = () => {
        return user
    }
    const memoedValue = useMemo(()=>({
        user, signUp, signIn, loading, logout, error, getUser
    }), [user, loading])

    return (
        <AuthContext.Provider value={memoedValue}>
        {!initialLoading && children}
      </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext)
}