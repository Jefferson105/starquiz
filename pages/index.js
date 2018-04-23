import "./scss/style.scss";
import Menu from "../components/menu";

export default class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <section className="home">
                <Menu />
                <header className="home-header">
                    <img className="home-mainImg" src="/static/img/dart_white.svg" />
                    <h1 className="home-title">StarQuiz!</h1>
                    <p className="home-txt">Play now and test your knowledge in Star Wars</p>
                    <a href="/game" className="home-start">Start</a>
                    
                    <div className="home-goHow">
                        <p className="home-goHow-txt">How to play.</p>
                        <img className="home-goHow-down" src="/static/img/down-arrow.svg" />
                    </div>
                </header>
                <section className="home-how">
                    <div className="container">
                        <h2 className="home-how-title">How to play</h2>
                        <div>
                            <p>The objective of this game is to hit the maximum number of personangens of the Star Wars saga. There will be several cards with the character's photo and you should write the name of this character.</p>
                            <p>On each card there will be two buttons <img src="/static/img/pencil.svg" /> <img src="/static/img/info.svg" />, the first is to appear the field to enter the name of the character and the second to see details of the character.</p>
                            <p>You will have a maximum of two minutes to try to hit as many characters as possible. The counter will be at the top right of your screen along with the score.</p>
                            <p>For each successful character without looking at the details you will gain 10 points, if you look at the details and hit you you will receive 5 points. Errors will not affect the score. If you hit the name of the character the card will turn green otherwise it will turn red.</p>
                            <p>At the end of the two minutes you will be able to send your score and will be in the ranking.</p>
                        </div>
                        <footer className="footer">Made by &copy; Jefferson Barbosa</footer>
                    </div>
                </section>
                <div className="home-overlay"></div>
                <video className="home-clip" loop autoPlay={true} muted poster="/static/img/bg/sw2.jpg" src="/static/videos/clip.mp4"></video>
            </section>
        );
    }
}