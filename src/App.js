import React, { Component } from 'react';
import Counter from './components/Counter';
import { connect } from 'react-redux';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #1C2331;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Title = styled.h1`
    text-align: center;
    color: white;
`;
const Icon = styled.img`
    width: 100px;
    height: auto;
`;
class App extends Component {
    render() { 
        return ( 
            <Wrapper>
                <Icon src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' /> 
                <Title>You're good to go!</Title>
                <Counter />
            </Wrapper>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({type: 'ADD'}),
        subtract: () => dispatch({type: 'SUBTRACT'}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);