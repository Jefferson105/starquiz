export default class CardChar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showInput: false,
            name: null,
            finished: false,
            correct: false,
            points: 10
        }

        // Datails to get in api
        this.films = [];
        this.species = [];
        this.vehicles = [];
        this.starships = [];
        this.homeworld = [];

        // class methods
        this.showInput = this.showInput.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.confirmName = this.confirmName.bind(this);
        this.getName = this.getName.bind(this);
    }

    // Change state to finish when receive props
    componentWillReceiveProps() {
        if(this.props.finished)
            this.setState({ finished: this.props.finished });
    }

    // Show input when click on button with the pencil image
    showInput() {
        this.setState({ showInput: !this.state.showInput });
    }

    // Show detail modal when click on button with the info image
    showDetail() {
        const { onGetDetail, info } = this.props;

        this.state.points = 5;

        // Call prop function to open modal with details
        onGetDetail({ ...info });
    }

    // submit the name the user entered
    confirmName() {
        const { name, points } = this.state;
        
        // Compare name entered with the character name in lowercase
        if(name.toLowerCase() == this.props.info.name.toLowerCase()) {
            this.props.onPontuation(points);
            this.setState({ finished: true, correct: true });
        }else 
            this.setState({ finished: true, correct: false });
    }

    // Get name entered while user types
    getName(e) {
        // If press enter confirm name
        if(e.keyCode == 13)
            this.confirmName();

        // Save name entered in state 
        this.state.name = e.target.value;
    }

    render() {
        const { showInput, finished, correct, name } = this.state;
        return(
            <li className={`game-content-list-item ${finished ? correct ? "correct" : "wrong" : ""}`}>
                <figure className="game-content-list-item-pic"> 
                    <img className="game-content-list-item-pic-img" src={this.props.info.photo} />
                </figure>

                <React.Fragment>
                {
                    (finished) ? 
                        <p>{name}</p> :
                        <footer className="game-content-list-item-footer">
                            <div className={`game-content-list-item-footer-container ${showInput ? "show-input" : ""}`}>
                                <div className="game-content-list-item-controllers">
                                    <button onClick={this.showInput} title="Who am I?" className="game-content-list-item-button game-content-list-item-button-show"><img src="/static/img/pencil.svg" /></button>
                                    <button onClick={this.showDetail} title="Character Details" className="game-content-list-item-button game-content-list-item-button-response"><img src="/static/img/info.svg" /></button>
                                </div>
                                <div className={`game-content-list-item-name`}>
                                    <figure onClick={() => this.setState({ showInput: false })} title="Back" className="game-content-list-item-name-back">
                                        <img className="game-content-list-item-name-back-img" src="/static/img/slide-left.svg" />
                                    </figure>
                                    <input onKeyUp={this.getName} type="text" className="game-content-list-item-name-input" />
                                    <button title="Send Response" onClick={this.confirmName} className="game-content-list-item-name-send"><img src="/static/img/send.svg" /></button>
                                </div>
                            </div>
                        </footer>
                }
                </React.Fragment>
            </li>
        );
    }
}