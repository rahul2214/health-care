import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const UserLogin = () => {
    let navigate = useNavigate();
    const [id, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from the URL when the component mounts
        axios.get('http://localhost:4500/users')
            .then((res) => {
                console.log(res.data); // Log the fetched data
                setUsers(res.data);
            })
            .catch((error) => {
                console.error(error);
                console.error(error);
                setMessage("Error fetching user data")
            });
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find(user => user.id === id);

        if (user && user.password === pwd) {
            navigate('/userhome/' + id);
        } else {
            setMessage("Credentials don't match");
        }
    }

    return (
        <>
            <nav style={{ backgroundColor: "#a78181", height: "60px", fontSize: "24px", color: "white", paddingLeft: "20px", paddingTop: "10px" }}>WeCare</nav>

            <div className="body-form">
                <div className="booking-card">
                    <form onSubmit={handleLogin} className='booking-form'>
                        <br /><h2 >Login As User</h2><br />
                        <div className="form-group">
                            <input type="text"
                                onChange={(event) => setName(event.target.value)}
                                placeholder="User Id"
                            /><br /><br />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                onChange={(event) => setPwd(event.target.value)}
                                placeholder="Password"
                            /><br /><br />
                        </div>
                        <div className="text-danger">{message}</div>
                        <button type="submit">Login</button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default UserLogin;
