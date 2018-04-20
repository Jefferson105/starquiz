import fetch from "isomorphic-unfetch";

export default class FinishGame extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            error: false,
            msg: null,
            name: null,
            email: null
        }

        if(localStorage.getItem("userInfo") != undefined) {
            var { email, user } = JSON.parse(localStorage.getItem("userInfo"));
            this.state.name = user;
            this.state.email = email;
        }

        this.savePontuation = this.savePontuation.bind(this);
    }

    // Function called when user click in save pontuation
    async savePontuation() {
        if(this.email.checkValidity() && this.user.checkValidity()) {
            try {
                // Url api to save data in database
                var url = location.href.replace("/game", "");

                // Stringify data posted by user
                var data = JSON.stringify({
                    user: this.user.value,
                    email: this.email.value,
                    pontuation: this.props.points
                });

                // Fetch options
                var options = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: data
                }

                // Save in local stora
                localStorage.setItem("userInfo", data);

                // Send data to api
                var res = await fetch(url + "/api/save", options);
                var { success, error } = await res.json();

                if(success) 
                    location = "/score";
                else
                    this.setState({ error: true, msg: "An error has ocurred. Try again." }); 
            }catch(err) {
                console.error(err);
                this.setState({ error: true, msg: "An error has ocurred. Try again." });    
            }
        }else {
            this.setState({ error: true, msg: "Fill the fields correctly" });
        }
    }

    render() {
        const { points } = this.props;
        const { error, msg, name, email } = this.state;
        return(
            <section className="finish">
                <div className="finish-content">
                    <h2 className="finish-title">Your pontuation</h2>
                    <p className="finish-point">{points}</p>

                    <form className="finish-form">
                        <p className="finish-form-content">
                            <label className="finish-form-label" htmlFor="name">Name: </label>
                            <input className="finish-form-input" defaultValue={name ? name : ""} required pattern="[A-Za-zÀ-ú ]+" ref={(user) => {
                                this.user = user;
                            }} id="name" type="text" autoFocus />
                        </p>
                        <p className="finish-form-content">
                            <label className="finish-form-label" htmlFor="email">Email: </label>
                            <input className="finish-form-input" defaultValue={email ? email : ""} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" ref={(email) => {
                                this.email = email;
                            }} id="email" type="email" />
                        </p>
                    </form>
                    {
                        (error) ?
                            <p className="finish-error">{msg}</p> : ""
                    }
                    <button className="finish-save" onClick={this.savePontuation}>Save</button>
                </div>
            </section>
        );
    }
}

//<img className="finish-close" src="/static/img/close-button.svg" />