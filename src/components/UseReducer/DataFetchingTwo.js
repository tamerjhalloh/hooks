import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

 const initialState = {
    loadinf : true,
    error : '',
    post : {}
};

const reducer = (state, action) => {
    switch(action.type)
    {
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                error : '',
                post : action.payload
            };
        case 'FETCH_FAILED':
                return {
                    loading : false,
                    error : 'Something went wrong!',
                    post : {}
                };
        default: 
            return state;
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                dispatch({type : 'FETCH_SUCCESS', payload : res.data});
            }).catch(err => {
                dispatch({type : 'FETCH_FAILED'});
            });
        // return () => {
        //     //cleanup
        // }
    }, []);

    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo
