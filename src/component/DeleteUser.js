import { Link } from "react-router-dom";

const DeleteComponent = ({ user, id }) => {
    return(
        <>
        <h2>Deleted User!!!!</h2>
        <Link to="/viewuser"><button type="button">Back to View Users</button></Link>
        </>
    )
}
export default DeleteComponent;