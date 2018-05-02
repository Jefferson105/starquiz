import CardChar from "./cardChar";

export default class AllCards extends React.Component {
    constructor(props) {
        super(props);

        this.slide = {
            num: 0
        }

        this.slideRight = this.slideRight.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
    }

    slideRight() {
        var parentWidth = this.list1.parentElement.offsetWidth;
        var listWidth = this.list1.scrollWidth;
        var widthTranslated = parentWidth * this.slide.num + parentWidth;

        if(widthTranslated > listWidth)
            return;
        else 
            this.slide.num++;
    
        Array.from(document.getElementsByClassName("game-content-list")).forEach(element => {
            element.style.transform = `translateX(-${this.slide.num * 100}%)`;
        }); 
    }

    slideLeft() {
        if(this.slide.num > 0) {
            this.slide.num--;
            Array.from(document.getElementsByClassName("game-content-list")).forEach(element =>  {
                element.style.transform = `translateX(-${this.slide.num * 100}%)`;
            });
        }
    }

    render() {
        const { characters, onPontuation, onGetDetail, finish } = this.props;
        return(
            <nav className="game-content">
                <button onClick={this.slideLeft} className="game-content-button"><img src="/static/img/slide-left.svg" /></button>
                <div className="game-content-container">
                    <ul id="list-chars" className="game-content-list">
                        {
                            characters.length ? 
                                characters.map((character,i) => 
                                    (i % 2 == 0) ?        
                                        "" :             
                                        (finish) ?
                                            <CardChar finished={true} onPontuation={onPontuation} onGetDetail={onGetDetail} info={character} key={i} /> :
                                            <CardChar onPontuation={onPontuation} onGetDetail={onGetDetail} info={character} key={i} />) : "" 
                                    
                        }
                    </ul>
                    <ul id="list-chars-1" ref={(list1) => this.list1 = list1} className="game-content-list">
                        {
                            characters.length ? 
                                characters.map((character,i) => 
                                    (i % 2 == 1) ?        
                                        "" :             
                                        (finish) ?
                                            <CardChar finished={true} onPontuation={onPontuation} onGetDetail={onGetDetail} info={character} key={i} /> :
                                            <CardChar onPontuation={onPontuation} onGetDetail={onGetDetail} info={character} key={i} />) : "" 
                                    
                        }
                    </ul>
                </div>
                <button onClick={this.slideRight} className="game-content-button"><img src="/static/img/slide-right.svg" /></button>
            </nav>
        )
    }
}