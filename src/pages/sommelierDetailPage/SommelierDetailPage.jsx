import './SommelierDetailPage.css';
import sommelier from '../../constants/sommeliers.json';

function SommelierDetailPage() {
    return (
        <section className="sommelier-detail-page outer-content-container">
            <div className="inner-content-container">
                <h2>{sommelier.name}</h2>

            </div>
        </section>
    )
}
export default SommelierDetailPage;