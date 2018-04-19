import "./scss/style.scss";
import Link from 'next/link';

export default class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <section className="home">
                <img className="home-mainImg" src="/static/img/dart_white.svg" />
                <h1 className="home-title">StarQuiz!</h1>
                <p className="home-txt">Play now and test your knowledge in Star Wars</p>
                <a href="/game" className="home-start">Start!</a>
            </section>
        );
    }
}