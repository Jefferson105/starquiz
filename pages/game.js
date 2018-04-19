import "./scss/style.scss";
import fetch from "isomorphic-unfetch";
import CountDown from "../components/countDown";
import CardChar from "../components/cardChar";
import DetailChar from "../components/detailChar";

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: props.data.results,
            slide: 0,
            info: null
        };

        this.getPagination = this.getPagination.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
        this.getDetail = this.getDetail.bind(this);
        this.addPoint = this.addPoint.bind(this); 

        this.getPagination(props.data.next);
    }

    async getPagination(url) {
        try {
            var res = await fetch(url);
            var { next, results } = await res.json();
            
            if(next)
                this.getPagination(next);
            
            this.setState({ characters: [...this.state.characters, ...results] });
        }catch(err) {
            console.error(err);
        }
    }

    slideRight() {
        this.state.slide++;
        document.getElementById("list-chars").style.transform = `translateX(-${this.state.slide * 100}%)`;
    }

    slideLeft() {
        this.state.slide--;
        document.getElementById("list-chars").style.transform = `translateX(-${this.state.slide * 100}%)`;
    }

    getDetail(info) {
        this.setState({ info: info });
    }

    addPoint(point) {

    }

    render() {
        const { characters, info } = this.state;
        return(
            <section className="game">
                <h1><img src="/static/img/dart_white.svg" /> StarQuiz</h1>
                <p></p>
                <CountDown time={120} />

                <nav className="game-content container">
                    <button onClick={this.slideLeft} className="game-content-button"><img src="/static/img/slide-left.svg" /></button>
                    <div className="game-content-container">
                        <ul id="list-chars" className="game-content-list">
                            {
                                characters.length ? 
                                    characters.map((character,i) => <CardChar onGetDetail={this.getDetail} info={character} key={i} />) : ""
                            }
                        </ul>
                    </div>
                    <button onClick={this.slideRight} className="game-content-button"><img src="/static/img/slide-right.svg" /></button>
                </nav>
                
                { info ? <DetailChar info={info} /> : "" }
            </section>
        );
    }
}

Game.getInitialProps = async function() {
    const res = await fetch(`https://swapi.co/api/people/`);
    const data = await res.json();

    return { data }; 
}