const paddingZero = (num) => (String(num).length > 1) ? num : "0" + num;

const formatTime = (sec) => {
    var minutes = Math.floor(sec / 60);
    var seconds = Math.abs((minutes * 60) - sec);
    return paddingZero(minutes) + ":" + paddingZero(seconds);
}

export default class CountDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: props.time,
            timeFormated: formatTime(props.time)
        }
    }

    componentWillMount() {
        var currentTime = this.state.time;
        var timeInterval = setInterval(() => {
            currentTime -= 1; 
            this.setState({ time: currentTime, timeFormated: formatTime(currentTime) });
        
            if(!currentTime)
                clearInterval(timeInterval);
        }, 1000);
    }

    render() {
        const { timeFormated } = this.state;
        return(
            <div>
                <p>{timeFormated}</p>
            </div>
        )
    }
}