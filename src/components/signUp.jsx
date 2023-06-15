import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import '../App.css'

const Signup = () => {
    let [name, setname] = useState('')
    let [mobile_number, setmobile_number] = useState('')
    let [email, setemail] = useState('')
    let [password, setpassword] = useState('')
    let [confirm_password, setconfirm_password] = useState('')

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault();
        let data = { name, email, password, mobile_number, confirm_password }
        if (name && email && mobile_number && (password == confirm_password)) {
            axios.post('http://localhost:4001/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                })
        } else {
            alert(`Password didn't Match`)
        }
    }

    return (
        <div className="login m-auto">
            <div className="card">
                <div className="heading">
                <img src="images\Babai Hotel LOGO.png" alt="" width={'100px'} className="logoimg mb-0 mt-2" />
                <h1 className="p-0 m-0">Sign Up</h1>
                </div>
                <form action="" className="w-75 m-auto p-2"
                    onSubmit={handleSubmit}>
                    <div className="name m-3 form-floating">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="form-control"
                            id="floatingInput"
                            required
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                        />
                        <label
                            for="floatingInput"
                            className="form-label">Enter your name here</label>
                    </div>
                    <div className="mobile_number m-3 form-floating">
                        <input
                            type="tel"
                            name="mobile_number"
                            placeholder="Enter you mobile number"
                            className="form-control"
                            id="floatingInput"
                            required
                            minLength="10" maxLength="10"
                            value={mobile_number}
                            onChange={(e) => setmobile_number(e.target.value)} />
                        <label htmlFor="floatingInput">Mobile Number</label>
                    </div>
                    <div className="email m-3 form-floating">
                        <input
                            type="email"
                            name="email"
                            placeholder="abc@yahoo.com"
                            className="form-control"
                            id="floatingInput"
                            required
                            value={email} onChange={(e) => setemail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="password m-3 form-floating">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            id="floatingInput"
                            required
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <div className="confirm_password m-3 form-floating">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="form-control"
                            id="form-control"
                            required
                            value={confirm_password}
                            onChange={(e) => setconfirm_password(e.target.value)} />
                        <label htmlFor="floatingInput">Confirm Password</label>
                    </div>
                    <div className="buttons d-flex form-floating">
                        <div className="signup_button my-3 ms-3 me-1">
                            <button className="btn btn-success">Sign Up</button>
                        </div>
                        <div className="login_button d-flex">
                            <p className="my-4 mx-0 ms-1 fs-5 text-dark">Already have an account?</p>
                            <div>
                                <Link
                                    to="/"
                                    className="btn btn-outline-warning text-dark px-4 my-3 ms-2"
                                >
                                    Login</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div >

        </div >
    );
}

export default Signup;