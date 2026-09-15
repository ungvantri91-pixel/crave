import Form from "./sections/Form";
import Panel from "./sections/Panel";
import './css/index.css';

function Login() {
    return(
        <div className="login">
            <Form />
            <Panel />
        </div>
    )
}

export default Login;