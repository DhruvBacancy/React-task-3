import { useEffect, useReducer } from "react";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser"

const userData = [];

export default function ParentControl({handleadd}) {
    const initalValue = {
        users: [],
        name: "",
        email: "",
        country: "",
        phone: 0,
        isEdit: false,
        tempId: 0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "users":
                {
                    return { ...state, users: [...state.users, action.payload] }
                }
            case "name":
                return { ...state, name: action.payload }
            case "email":
                return { ...state, email: action.payload }
            case "phone":
                return { ...state, phone: action.payload }
            case "country":
                return { ...state, country: action.payload }
            case "click_edit":
                return {
                    ...state,
                    users: action.payload,
                    name: action.payload,
                    email: action.payload,
                    country: action.payload,
                    isEdit: true,
                }
            case "click_cancel":
                return { ...state, name: "", email: "", isEdit: false, tmpId: "" }
            default:
                throw new Error("Unknown action type:")
        }
    }


    const [{ users, name, email, phone, country, isEdit }, dispatch] = useReducer(reducer, initalValue);

    return (
        <>
            Name:
            <input type="text" onChange={(e) => dispatch({ type: "name", payload: e.target.value })} value={name} /><br />
            Email:
            <input type="email" onChange={(e) => dispatch({ type: "email", payload: e.target.value })} value={email} /><br />
            Phone Number:
            <input type="tel" onChange={(e) => dispatch({ type: "phone", payload: e.target.value })} value={phone} /><br />
            Country:
            <input type="text" onChange={(e) => dispatch({ type: "country", payload: e.target.value })} value={country} /><br />
            <button type="button" onClick={() => {
                userData.push({ "name": name, "email": email, "phone": phone, "country": country, "tempId": users.length + 1 });
                dispatch({
                    type: "users",
                    payload: { name, email, phone, country, tempId: users.length + 1 }
                })
                handleadd();
            }}>Add User</button >

        </>
    )

}
export { userData };





















        // const [name, setName] = useState("");
        // const [email, setEmail] = useState("");
        // const [number, setNumber] = useState(0);
        // const [country, setCountry] = useState("");
        // const [userData, setUserData] = useState([])
        // const UserData = () => {
            //     setUserData([...userData, { "Name": name }])
        // }
        // const handleEdit = () => {
        //     <>
        //         Name:
        //         <input type="text" onChange={(e) => dispatch({ type: "name", payload: e.target.value })} value={name} /><br />
        //         Email:
        //         <input type="email" onChange={(e) => dispatch({ type: "email", payload: e.target.value })} value={email} /><br />
        //         Phone Number:
        //         <input type="tel" onChange={(e) => dispatch({ type: "phone", payload: e.target.value })} value={phone} /><br />
        //         Country:
        //         <input type="text" onChange={(e) => dispatch({ type: "country", payload: e.target.value })} value={country} /><br />
        //         <button type="button" onClick={() => {
        //             dispatch({
        //                 type: "users",
        //                 payload: { name, email, phone, country, tempId: users.length + 1 }
        //             })
        //         }}>Add User</button>
        //     </>
        // }