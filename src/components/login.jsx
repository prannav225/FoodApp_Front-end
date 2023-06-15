import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';
const Login = () => {

    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')

    let navigate = useNavigate();

    let handleSubmit = (e) => {
        e.preventDefault();
        let data = { email, password }
        axios.post('http://localhost:4001/login', data)
            .then((res) => {
                if (res.data.message === 'Login Successfull') {
                    alert(res.data.message)
                    navigate('/home')
                } else {
                    alert(res.data.message);
                }
            })
    }

    return (
        <div className="login m-auto">
            <div className="card">
                <div className="heading">
                    <img src="images\Babai Hotel LOGO.png" alt="" width={'100px'} className="logoimg mb-0 mt-2" />
                    <h1 className="mt-0 pt-0">Login</h1>
                </div>
                <form onSubmit={handleSubmit} className="w-75 m-auto" >
                    <div className="form-floating">
                        <input type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Email Id"
                            value={email}
                            onChange={(e) => setemail(e.target.value)} />
                        <label
                            className="form-label"
                            for="floatingInput">
                            Email address
                        </label>
                    </div>
                    <div id="emailHelp"
                        className="form-text mb-0 text-light">
                        We'll never share your email with anyone else.
                        <p className="privacy text-warning mt-0">
                            Actually we share it for money
                            <p className="text-danger">
                                just kidding..<span className="fs-6">😉</span></p> </p>
                    </div>
                    <div className="mb-3 form-floating">
                        <input
                            type="password"
                            id="floatingInput"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)} />
                        <label
                            className="form-label"
                            for="floatingInput">Password</label>
                    </div>
                    <div className="options d-flex">
                        <div className="submitbtn">
                            <button
                                type="submit"
                                className="btn btn-warning px-4 py-2 ">Login</button>
                        </div>
                        <div className="signup d-flex">
                            <p className="m-2 text-secondary">Are you a new user?</p>
                            <Link
                                type="submit"
                                className="btn btn-outline-success mb-2"
                                to="/signup">Signup</Link>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;