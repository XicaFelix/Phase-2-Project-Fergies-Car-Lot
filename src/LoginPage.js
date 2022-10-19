import { useContext} from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "./Providers/LoginData";
import { Form, Button, Container } from "react-bootstrap";

function LoginPage(){
    const {user, setUser} = useContext(LoginContext);
    const history=useHistory();

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setUser({...user,
            [name]:value,
            loginState : true,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        history.push('/home/logged-in');
    }

    return (
            <Container fluid style={{backgroundColor: 'black', color: 'whitesmoke' }}>
                <div>
                <h1 style={{color: 'whitesmoke'}} >Welcome to Fergie's Car Dealership</h1>
                <h2 style={{color: 'whitesmoke'}}>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="username" value={user.username}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" name="password" value={user.password}/>
                </Form.Group>
                <Button variant='secondary' type="submit" style={{marginTop: 25, marginBottom: 400}}>Login</Button>
            </Form>
            </div>
            </Container>
    )
}

export default LoginPage;