import React from 'react';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    const navigate = useNavigate()
    const styles = {
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#a78181',
            height: '60px',
            padding: '0 20px',
            fontSize: '18px',
        },
        logo: {
            fontSize: '24px',
            color: 'white'
        },
        navLinks: {
            display: 'flex',
            listStyle: 'none',
        },
        navItem: {
            margin: '0 10px',
        },
        navLink: {
            textDecoration: 'none',
            color: 'black',
        },
    };
    return <div>

        <nav style={styles.nav}>
            <h1 style={styles.logo}>WeCare</h1>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                    <span onClick={() => navigate("/coachprofile")} style={{ cursor: "pointer", color: "white" }}>
                        View Profile
                    </span>                </li>
                <li style={styles.navItem}>
                    <span onClick={() => navigate("/coachhome")} style={{ cursor: "pointer", color: "white" }}>
                        My Schedules
                    </span>                    </li>
                <li style={styles.navItem}>
                    <span style={{ cursor: "pointer", color: "white" }}>
                    Call Us : 1234567890
                    </span>                    </li>
                <li style={styles.navItem}>
                    <span onClick={() => navigate("/coachlogin")} style={{ cursor: "pointer", color: "white" }}>
                        Logout
                    </span>                    </li>
            </ul>
        </nav>





    </div>
}
export default NavBar;
