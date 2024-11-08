import {Link} from "react-router-dom";
import './SommelierTile.css';


function SommelierTile({id, avatar, name, certificates, specialities, experience}) {
    return (
        <article className="sommelier-tile">
            <span className="avatar-image-wrapper">
                <img className="sommelier-avatar" alt="Profielfoto sommelier" src={avatar}/>
            </span>
            <h2 className="sommelier-name"><Link to={`/sommeliers/${id}`}>{name}</Link></h2>
            <h4>{certificates}</h4>
            <h5><em>{specialities}</em></h5>
            <p>{experience}</p>
        </article>
    );
}

export default SommelierTile;