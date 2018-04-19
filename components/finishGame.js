export default class FinishGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { points } = this.props;
        return(
            <section className="finish">
                <div className="finish-content">
                    <h2 className="finish-content-point">{points}</h2>
                    <form className="finish-content-form">
                        <input type="text" />
                        <input type="email" />
                    </form>
                </div>
            </section>
        );
    }
}