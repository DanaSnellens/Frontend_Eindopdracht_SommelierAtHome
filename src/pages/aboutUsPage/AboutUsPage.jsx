import {Link} from "react-router-dom";

function AboutUsPage() {
    return(
        <>
            <section className="outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Over ons</h1>

                    <p>Onze passie voor wijn zit diepgeworteld. In 2011 kreeg dit vorm met de eerste wijnbar van Utrecht,
                        <Link to ={"https://www.wijnbarvinvin.nl"}><strong> Wijnbar VinVin</strong>.</Link> Hier serveren
                        wij al vele jaren met passie een selectie van de beste wijnen. Hierbij proberen we zo veel mogelijk
                        Europees en biologisch te importeren. Uiteraard hebben we ook bijzondere wijnen uit andere continenten op de kaart staan.</p>

                    <p>Sinds 2024 hebben wij in dezelfde straat ook
                        <Link to ={'https://www.wijnbarvinvin.nl/c/wijnwinkel-de-vinotheek#lb125074/wijn-en-theewinkel-de-vinotheek'}>
                             <strong> De Vinotheek </strong></Link> geopend, een wijnwinkel waar ook proeverijen en wijncursussen gegeven worden.</p>

                    <p>Met <strong>Somm@Home </strong> hopen we u verder te kunnen voorzien van kundig wijnadvies tijdens diners
                        bij u thuis.
                        Dit idee is ontstaan in de periode dat we op last van de overheid dicht moesten tijdens de coronaperiode. Mensen
                        konden hun kerstdiner recepten insturen en kregen daarbij een wijnadvies op maat. Vanwege de vele
                        positieve reacties, is dit nu omgezet naar een webapplicatie waar mensen aanvragen kunnen doen voor
                        gepersonaliseerd wijnadvies. Daarnaast is er een overzicht te vinden van onze wijnen en door ons
                        geselecteerde recepten. In de toekomst zullen de functionaliteiten van deze applicatie verder uitbreiden.
                        en zal deze ook fungeren als webshop. Ook zal er naast wijnadvies de mogelijkheid komen om advies op het
                        gebied van thee in te winnen, bij onze ervaren theesommelier.</p>

                    <p>Wij hopen u snel te mogen verwelkomen in een van onze zaken of bij u thuis!</p>
                </div>
            </section>
        </>
    )
}
export default AboutUsPage;