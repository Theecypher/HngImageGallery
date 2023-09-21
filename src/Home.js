import { Link } from "react-router-dom";
import './styles/Home.css'

const Home = () => {
    return ( 
        <div className="home">
        <div className="home__content">
            <h3>Welcome to</h3>
            <h1>TastyPlace Gallery</h1>
            <p>Welcome to TastyPlace Gallery, check out all mouth watering dishes of all time! Get prepare to droll!</p>
            <Link to="/signup">Sign Up</Link>
        </div>
        </div>
     );
}
 
export default Home;