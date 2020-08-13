import React, {createContext, useReducer} from 'react';

export const IndexContext = createContext();

const IndexContextProvider = (props) => {

    const [useIndex, setIndex] = useReducer(IndexReducer, 0);

    const newIndex = (i) => {
        setIndex({type:'newIndex', index:i})
    }

    return (
        <IndexContext.Provider value = { {useIndex, setIndex, newIndex} }>
            {props.children}
        </IndexContext.Provider>
    );
}

const IndexReducer = (state, action) => {
    switch(action.type) {
        case 'newIndex':
            return action.index
        default:
            return state
    }
}

export default IndexContextProvider;