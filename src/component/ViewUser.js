import { Link } from "react-router-dom";
import EditUser from './EditUser'


const ViewComponent = ({ items, handleDelete }) => {
    if (items === undefined || items.length === 0) {
        return (
            <>
                <h1>No Data Available</h1>
            </>
        )
    }
    return (
        <ul>
            {items.map((item, index) =>
                <li key={index}>
                    {item.name}<br />
                    {item.email}<br />
                    {item.phone}<br />
                    {item.country}<br />
                    <Link to={`/edituser/${index}`}>
                        <button type="button" onClick={() => { <EditUser user={items} /> }}>Edit</button>
                    </Link>
                    <Link to="/deleteuser"><
                        button type="button" onClick={() => { handleDelete(index) }}>Delete</button> <br /><br />
                    </Link>
                </li>
            )
            }
        </ul>
    )
}

export default ViewComponent;