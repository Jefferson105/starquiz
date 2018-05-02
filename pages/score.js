import "./scss/style.scss";
import fetch from "isomorphic-unfetch";
import Link from 'next/link';
import Menu from "../components/menu";

const Score = ({ list = [] }) => 
    <section className="score">
        <Menu />
        <header className="score-header">
            <h1 className="home-title">StarQuiz!</h1>
            <h2 id="subTitle" className="score-header-subTitle">Score</h2>
        </header>
        <ul className="score-list">
            {
                (list.length) ?
                    list.map(({ user, email, pontuation }, i) => 
                        <li key={i} className="score-list-item">
                            <p><b>Name:</b> {user}</p>
                            <p><b>Pontuation:</b> {pontuation}</p>
                        </li>
                    ) : ""
            }
        </ul>

        <footer className="footer">Made by &copy; Jefferson Barbosa</footer>
        <div className="game-bg"></div>
    </section>


Score.getInitialProps = async function({ req }) {
    var host = req.headers.host;
    var protocol = req.headers.referer.indexOf("https") > -1 ? "https://" : "http://";
    var path = protocol + host;

    const res = await fetch(path + "/api/list");
    const { list } = await res.json();

    return { list }; 
}

export default Score;