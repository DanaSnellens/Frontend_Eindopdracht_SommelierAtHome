import './LogoHeader.css'


import logo from "../../assets/Logo.png";


function LogoHeader() {
    return (
        <div className="outer-content-container">
            <div className="logo-header">
            <span className="image-wrapper">
                <img src={logo} alt="Company logo"/>
            </span>

            </div>
        </div>

    )
}
export default LogoHeader;

