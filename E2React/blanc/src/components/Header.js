import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';

class Compclass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            xText: 'Kintamojo tekstas'
            , xData: ''
        }
        this.fClick = this.fClick.bind(this)
    }
    // xText = 'Kintamojo tekstas'
    render() {
        return (
            <header className="App-header">{this.props.xInfo}
                <h2 onClick={this.fClick}>
                    {this.state.xText}</h2>
            </header>
        )
    }
    fClick() {
        // this.xText = "Pakeistas kintamojo tekstas"
        this.setState({ xText: "Pakeistas kintamojo tekstas" })
        console.log('Pelė ant kintamojo teksto')
    }
}
export default Compclass;