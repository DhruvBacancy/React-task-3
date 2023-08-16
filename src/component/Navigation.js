import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <ul >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/adduser">Add User</Link>
            </li>
            <li>
                <Link to="/viewuser">View User</Link>
            </li>

        </ul >
    )
}
export default Navigation;
