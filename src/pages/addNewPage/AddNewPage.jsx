import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";

function AddNewPage(){

    const { type } = useParams();
    const navigate = useNavigate();
    const { user, isAuth, username } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const hasPermission = () => {
        switch (type) {
            case 'clients':
                return true;
            case 'wines':
            case 'recipes':
            case 'sommeliers':
            case 'advices':
                if (isAuth) {
                    return user.roles.includes('ADMIN');
                }
            case 'requests':
                if (isAuth) {
                    return user.roles.includes('CLIENT');
                }
                return false;
            default:
                return false;
        }
    };
/*
    useEffect(() => {
        if (!hasPermission()) {
            setError(true);
            setTimeout(() => navigate('/signin'), 3000);
            return;
        }
        async function fetchData () {
            setLoading(true);
            setError(false);

            try {
                const config = {};
                if()
                const response = await axios.get(`http://localhost:8080/${type}/addnew`);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        void fetchData();
    }*/
    return (
        <>

            <div className="inner-content-container__text-restriction">
                <h1>Add new {type}</h1>
                <p>Hier komt in input form voor {type}</p>


            </div>
        </>
    )
}
export default AddNewPage;