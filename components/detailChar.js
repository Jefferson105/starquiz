import fetch from "isomorphic-unfetch";

export default class DetailChar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            foto: props.info.photo
        }

        this.close = this.close.bind(this);
    }

    componentWillReceiveProps(next) {
        if(next.info.name != this.props.info.name && !this.state.show) 
            this.setState({ show: true });
    }

    componentWillMount() {
        this.setState({ show: true });
    }

    close() {
        this.setState({ show: false });
    }

    render() {
        const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, photo} = this.props.info;
        const { show } = this.state;
        return(
            <section className={`detail ${show ? "fadeIn" : "fadeOut"}`}>
                <div className="detail-content">
                    <img onClick={this.close} className="detail-content-close" src="/static/img/close-button.svg" />
                    <h2 className="detail-title">Details</h2>
                    
                    <div className="detail-info">
                        <figure className="detail-photo">
                            <img className="detail-photo-img" src={photo} />
                        </figure>                
                        <div className="detail-text">
                            <p><b>Birth Year:</b> {birth_year}</p>
                            <p><b>Eye Color:</b> {eye_color}</p>
                            <p><b>Hair color:</b> {hair_color}</p>
                            <p><b>Gender:</b> {gender}</p>
                            <p><b>Height:</b> {height}</p>
                            <p><b>Mass:</b> {mass}</p>
                            <p><b>Skin color:</b> {skin_color}</p>
                            <p><b>Films</b>: {films}</p>
                            {
                                homeworld ? 
                                    <p><b>Homeworld:</b> {homeworld}</p> : ""
                            }
                            {
                                species ?
                                    <p><b>Specie:</b> {species}</p> : ""
                            }
                            {
                                vehicles ?
                                    <p><b>Vehicles:</b> {vehicles}</p> : ""
                            }
                            {
                                starships ? 
                                    <p><b>Starships:</b> {starships}</p> : ""
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}