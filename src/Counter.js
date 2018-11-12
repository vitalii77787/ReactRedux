import React from 'react';
import {connect} from 'react-redux';
function Counter(props){
    console.log('render', props);
    return (
        <div>
            <h1>I am a counter!</h1>
            <p>Count: {props.count}</p>
            <button onClick={props.onIncrementClick}>Increment</button>
        </div>
    )
}
function mapStateProps(state){
    console.log('mapStateProps', state);
    return {
        count:state.count
    }
}
function mapDispatchToProps(dispatch){
    return {
        onIncrementClick:()=>{
            console.log('clickin');
            const action={
                type:'INCREMENT'
            };
            dispatch(action);
        }
    }
}
export default connect(mapStateProps, mapDispatchToProps) (Counter);