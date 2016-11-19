const app = "I don't do much.";

//to keep the time and date
componentWillMount: function(){
  this.setState({ startDateTime: new Date(Date.now())});
}

componentDidMount: function(){
  this.interval = setInterval(this.fetchWeather, 15000);
}

componentWillUnmount: function() {
  clearInterval(this.interval);
}
