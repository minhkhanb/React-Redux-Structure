import React from 'react';

class Keys extends React.Component {
    render() {
        return(
            <div className="keys">
                <div>{this.props.componentData.id}</div>
                <div>{this.props.componentData.component}</div>
            </div>
        );
    }
}

export default Keys;