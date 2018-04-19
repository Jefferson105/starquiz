export default class DetailChar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }

        this.close = this.close.bind(this);
    }

    componentWillReceiveProps(next) {
        if(next.info.name != this.props.info.name)
            this.setState({ show: true });
    }

    componentWillMount() {
        this.setState({ show: true });
    }

    close() {
        this.setState({ show: false });
    }

    render() {
        const {height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships} = this.props.info;
        const { show } = this.state;
        return(
            <section className={`detail ${show ? "fadeIn" : "fadeOut"}`}>
                <div className="detail-content">
                    <img onClick={this.close} className="detail-content-close" src="/static/img/close-button.svg" />
                    <img className="detail-content-image" src="data:image/jpeg;base64,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" />

                    <p>Birth Year: {birth_year}</p>
                    <p>Eye Color: {eye_color}</p>
                    <p>Hair color: {hair_color}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Mass: {mass}</p>
                    <p>Skin color: {skin_color}</p>
                </div>
            </section>
        );
    }
}