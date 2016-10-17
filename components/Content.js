import React from 'react';

class Content extends React.Component {

    componentWillMount () {
        console.log('Component WILL MOUNT')
    }

    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h2>{this.props.contentProp}</h2>
                <p>The content text!!!</p>
                <p>{this.props.myNumber}</p>
                <div className="input-form">
                    <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}/>
                    <h3>{this.props.myDataProp}</h3>
                </div>
                <div className="updateParentformChild">
                    <button onClick={this.props.parentUpdateStateProp}>CLICK</button>
                    <h3>{this.props.parentData}</h3>
                </div>
            </div>
        );
    }
}

export default Content;