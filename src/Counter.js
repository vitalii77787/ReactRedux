import React from 'react';
import {connect} from 'react-redux';
function Counter(props){
    console.log('render', props);
    return (
        <div>
            <h1>I am a counter!</h1>
            <p>Count: {props.count}</p>
        </div>
    )
}
function mapStateProps(state){
    console.log('mapStateProps', state);
    return {
        count:state.count
    }
}
export default connect(mapStateProps) (Counter);