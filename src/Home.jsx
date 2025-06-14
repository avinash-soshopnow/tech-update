
import { Link } from "react-router-dom";
import './Home.css';
function Home() {
    
    return(
        <div className="home">
            <div className="signUpLink">
                <Link to="/signUp">SignUp</Link>
            </div>
            <div className="homeText">
                <h1>Home Page</h1>
            </div>
        </div>
    );
}

export default Home;