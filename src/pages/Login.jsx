import { Input } from "../components/UI/Input/Input"
import { Button } from "../components/UI/Button/Button"
import { useContext } from "react"
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        navigate('/posts');
    }
    return (
        <div>
            <h1>Страница для входа в систему</h1>
            <form onSubmit={login}>
                <Input type="text" placeholder={"Введите логин"}/>
                <Input type="password" placeholder={"Введите пароль"}/>
                <Button>Войти в систему</Button>
            </form>
        </div>
    )
}