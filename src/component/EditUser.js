import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditComponent = ({ user, handleEdit }) => {
    const param = useParams();
    const [update, setUpdate] = useState({
        "id": user[param.id]?.tempId,
        "name": user[param.id]?.name,
        "email": user[param.id]?.email,
        "phone": user[param.id]?.phone,
        "country": user[param.id]?.country
    })

    const handleChange = (name, value) => {
        setUpdate({ ...update, [name]: value })
    }

    return (
        <>
            Name:
            <input type="text" name="name" onChange={(e) => handleChange(e.target.name, e.target.value)} value={update.name} /><br />
            Email:
            <input type="email" name='email' onChange={(e) => handleChange(e.target.name, e.target.value)} value={update.email} /><br />
            Phone Number:
            <input type="tel" name="phone" onChange={(e) => handleChange(e.target.name, e.target.value)} value={update.phone} /><br />
            Country :
            <input type="text" name="country" onChange={(e) => handleChange(e.target.name, e.target.value)} value={update.country} /><br />
            <Link to="/viewuser">
                <button type="button" onClick={() => handleEdit(update.id, update)}>Update</button>
            </Link>
            <Link to="/viewuser">
                <button type="button" onClick={() => { }}>Back</button>
            </Link>
        </>
    )

}

export default EditComponent;