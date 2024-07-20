import './HomePage.module.css';
import wineglass from '../../assets/wineglass-background.jpg'

function HomePage() {
    return (
        <>
            <header className="header outer-content-container">
                <div className="inner-content-container">
                    <img src={wineglass} alt="Background image of wineglass"/>
                </div>
                <h1>WE ❤️ WINE</h1>
            </header>

            <section>
                <p>Bij Somm@Home kan je terecht voor professioneel wijnadvies voor elke gelegenheid. Al onze wijnen zijn geselecteerd door onze ervaren sommeliers. Heeft u een etentje bij u thuis en wilt u persoonlijk wijnadvies bij de gerechten? Ook dat behoort tot de mogelijkheden, onze sommeliers maken hemelse wijn-spijs combinaties en bezorgen de wijn eventueel bij u thuis.</p>

            </section>
        </>
    );
}

export default HomePage;