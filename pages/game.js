String.prototype.replaceSpecialChars = function() {
    var str = this.toString();
    str = str.replace(/[ÀÁÃÄÂ]/g,"A");
    str = str.replace(/[àáãâä]/g,"a");
    str = str.replace(/[ÈÉÊË]/g,"E");
    str = str.replace(/[èéêë]/g,"e");
    str = str.replace(/[ÌÍÎÏ]/g,"I");
    str = str.replace(/[ìíîï]/g,"i");
    str = str.replace(/[ÒÓÔÕÖ]/g,"O");
    str = str.replace(/[òóôõö]/g,"o");
    str = str.replace(/[ÙÚÛŨÜ]/g,"U");
    str = str.replace(/[ùúûũü]/g,"u");
    str = str.replace(/[Ç]/g,"C");
    str = str.replace(/[ç]/g,"c");

    return str;
};

String.prototype.charCodePlus = function() {
    var str = this.toString().split("");
    return str.map((l) => String.fromCharCode(l.charCodeAt(0) + 1)).join("");
}

Array.prototype.shuffle = function() {
    for(let i = this.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }

    return this;
}

import "./scss/style.scss";
import fetch from "isomorphic-unfetch";
import CountDown from "../components/countDown";
import AllCards from "../components/allCards";
import DetailChar from "../components/detailChar";
import FinishGame from "../components/finishGame";
import Menu from "../components/menu";

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        // Map image character
        var results = props.data ? props.data.results : [];
        if(results.length) 
            results = results.map((r) => ({ ...r, photo:  `/static/img/chars/${r.name.split(" ")[0].replaceSpecialChars().charCodePlus()}.jpeg` }));

        this.state = {
            characters: results,
            info: null,
            points: 0,
            finish: false,
            started: false,
            loading: true
        };
        this.getDetail = this.getDetail.bind(this);
        this.addPoint = this.addPoint.bind(this); 
        this.finishTime = this.finishTime.bind(this);
    }

    async componentWillMount() {
        const { path } = this.props;
        var res = await fetch(path + "/api/allChars");
        var characters = await res.json();
        
        characters = characters.map((d) => ({ ...d, photo:  `/static/img/chars/${d.name == "Darth Maul" ? d.name.split(" ")[1].replaceSpecialChars().charCodePlus() : d.name.split(" ")[0].replaceSpecialChars().charCodePlus()}.jpeg` }));

        this.setState({ characters, started: true, loading: false });
    }

    // Change state to modal detail modal
    getDetail(info) {
        this.setState({ info: info });
    }

    // Add point to player
    addPoint(point) {
        const { points } = this.state;
        this.setState({ points: points + point });
    }

    // Change state when countdown finish
    finishTime() {
        this.setState({ finish: true });
    }

    render() {
        const { characters, info, points, finish, started, loading } = this.state;
        return(
            <section className="game">
                <Menu />

                <header className="game-header">
                    <h1 className="game-header-title">Star<br />Quiz</h1>
                    <p className="game-header-points">{points}</p>
                    {
                        started ?
                            <CountDown finish={this.finishTime} time={120} /> : ""
                    }
                    <p id="text" className="game-header-txt">Do you really know about Star Wars? Test it now!</p>
                </header>

                {
                    finish ? 
                        <AllCards finish={true} characters={characters} onPontuation={this.addPoint} onGetDetail={this.getDetail} /> :
                        <AllCards characters={characters} onPontuation={this.addPoint} onGetDetail={this.getDetail} />
                }

                { info ? <DetailChar info={info} /> : "" }
                
                { finish ? <FinishGame points={points} /> : "" }
                
                <div className={`loading ${loading ? "fadeIn" : "fadeOut"}`}>
                    <div className="loading-content">
                        {
                            (loading) ? 
                                <h2 className="loading-title">Preparing the game. Wait...</h2> :
                                <h2 className="loading-title">Start</h2>
                        }
                        <img className="loading-img" src="/static/img/star-wars.svg" />
                    </div>
                </div>

                <footer className="footer">Made by &copy; Jefferson Barbosa</footer>

                <div className="game-bg"></div>
            </section>
        );
    }
}

Game.getInitialProps = async function({ req }) {
    var host = req.headers.host;
    var protocol = req.headers.referer.indexOf("https") > -1 ? "https://" : "http://";
    var path = protocol + host;

    return { path }; 
}