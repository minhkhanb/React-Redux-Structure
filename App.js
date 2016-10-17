import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import TableRow from './components/TableRow';
import Keys from './components/Keys';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            db: [],
            dnumber: 0,
            data: [
                {
                    id: 1,
                    name: 'An',
                    age: 12
                },
                {
                    id: 2,
                    name: 'Anh',
                    age: 13
                },
                {
                    id: 3,
                    name: 'Ban',
                    age: 19
                },
            ],
            header: 'Header from props...',
            content: 'Content from props...',
            inputValue: 'Initial data...',
            eventData: 'Initial data...',
            updateParent: 'Initial data...',
            tRef: '',
            dataKey: [
                {
                    id: 1,
                    component:'First...'
                },
                {
                    id: 2,
                    component:'Second...'
                },
                {
                    id: 3,
                    component:'Third...'
                }
            ]
        }

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        this.setNewNumber = this.setNewNumber.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateStateEvent = this.updateStateEvent.bind(this);
        this.updateStateParentfromChild = this.updateStateParentfromChild.bind(this);
        this.updateInputRef = this.updateInputRef.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    setStateHandler () {
        var item = 'setState...';
        var myArray = this.state.db;
        myArray.push(item);
        this.setState({
            db: myArray
        });
    }

    forceUpdateHandler () {
        this.forceUpdate();
    }

    findDomNodeHandler () {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    setNewNumber () {
        this.setState({
             dnumber: this.state.dnumber + 1
        });
    }

    updateState (e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    updateStateEvent () {
        this.setState({
            eventData:'Data updated...'
        });
    }

    updateStateParentfromChild () {
        this.setState({
            updateParent:'Data updated from the child component...'
        });
    }

    updateInputRef (e) {
        this.setState({
            tRef: e.target.value
        });
    }

    clearInput () {
        this.setState({
            tRef:''
        });
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
        return (
            <div>
                <Header headerProp={this.state.header}/>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>
                <button onClick={this.setNewNumber}>INCREAMENT</button>
                <Content myNumber={this.state.dnumber} contentProp={this.state.content} myDataProp={this.state.inputValue} updateStateProp={this.updateState} parentData={this.state.updateParent} parentUpdateStateProp={this.updateStateParentfromChild}/>
                <p>{this.props.headerProp}</p>
                <p>{this.props.contentProp}</p>
                <div className="validatingProps">
                    <h3>Array: {this.props.propArray}</h3>
                    <h3>Bool: {this.props.propBool ? 'True...' : 'False...'}</h3>
                    <h3>Func: {this.props.propFunc(3)}</h3>
                    <h3>Number: {this.props.propNumber}</h3>
                    <h3>String: {this.props.propString}</h3>
                    <h3>Object: {this.props.propObject.objectName1}</h3>
                    <h3>Object: {this.props.propObject.objectName2}</h3>
                    <h3>Object: {this.props.propObject.objectName3}</h3>
                </div>
                <div className="setState">
                    <button onClick={this.setStateHandler}>SET STATE</button>
                    <h4>State Array: {this.state.db}</h4>
                </div>
                <div className="forceUpdate">
                    <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
                    <h4>Random number: {Math.floor((Math.random()*10) + 1)}</h4>
                </div>
                <div className="findDOMNode">
                    <button onClick={this.findDomNodeHandler}>FIND DOM NODE</button>
                    <div id="myDiv">
                        <span>NODE</span>
                    </div>
                </div>
                <div className="input-form">
                    <input type="text" value={this.state.inputValue} onChange={this.updateState}/>
                    <h4>{this.state.inputValue}</h4>
                </div>
                <div className="events">
                    <button onClick={this.updateStateEvent}>CLICK</button>
                    <h4>{this.state.eventData}</h4>
                </div>
                <div className="refs">
                    <input type="text" value={this.state.tRef} onChange={this.updateInputRef} ref="myInput"/>
                    <button onClick={this.clearInput}>CLEAR</button>
                    <h4>{this.state.tRef}</h4>
                </div>
                <div className="keys">
                    <div>
                        {this.state.dataKey.map(( dynamicComponent, i) => <Keys key={i} componentData={dynamicComponent}/>)}
                    </div>
                </div>
                <div className="router">
                    <ul>
                        <Link to="home">
                            Home
                        </Link>
                        <Link to="about">
                            About
                        </Link>
                        <Link to="contact">
                            Contact
                        </Link>
                    </ul>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
}

App.defaultProps = {
    headerProp: 'Header from props...',
    contentProp: 'Content from props...',
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function (e) {
        return e;
    },
    propString: 'String value...',

    propObject: {
        objectName1: 'objectValue1',
        objectName2: 'objectValue2',
        objectName3: 'objectValue3'
    }
}

export default App;