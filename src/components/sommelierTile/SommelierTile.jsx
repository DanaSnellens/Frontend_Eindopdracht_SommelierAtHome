import {Link} from "react-router-dom";
import './SommelierTile.css';


function SommelierTile({username, profilePictureUrl, firstName, lastName, certificates, specialities, experience}) {
    return (
        <article className="sommelier-tile">
            <span className="avatar-image-wrapper">
                <img className="sommelier-avatar" alt= "Photo of sommelier" src={profilePictureUrl}/>
            </span>
            <h2 className="sommelier-name"><Link to={`/sommeliers/${username}`}>{firstName} {lastName}</Link></h2>
            <h4>{certificates}</h4>
            <h5><em>{specialities}</em></h5>
            <p>{experience}</p>
        </article>
    );
}

export default SommelierTile;