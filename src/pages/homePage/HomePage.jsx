import './Home.css';
import wineglass from '../../assets/wineglass-background.jpg'

function Home() {
    return (
        <>
            <header>
                <div>
                    <img src={wineglass} alt="Background image of wineglass"/>
                </div>
                <h1>WE ❤️ WINE</h1>
            </header>

            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem blanditiis earum eligendi esse excepturi, explicabo facere fugiat illo, illum incidunt, inventore ipsa minima nisi odio optio pariatur perferendis quidem sapiente sint tempora tempore tenetur voluptas. Animi aut debitis ducimus incidunt laudantium ratione, soluta. Architecto dolor iusto similique tenetur ullam!</p>

            </section>
        </>
    );
}

export default Home;