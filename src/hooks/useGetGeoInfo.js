import { useEffect, useReducer } from 'react';
import { defaultErrorMessage } from '../constants';
import axios from 'axios';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const request = () => ({ type: REQUEST });
const success = (data) => ({ type: SUCCESS, payload: data });
const failure = (errorMessage = defaultErrorMessage) => ({ type: FAILURE, payload: errorMessage });

const initialState = {
    isLoading: false,
    data: {},
    errorMessage: null,
};

function reducer(state, { type, payload }) {
    switch (type) {
        case REQUEST:
            return { ...state, isLoading: true, errorMessage: null };
        case SUCCESS:
            return { ...state, isLoading: false, data: payload };
        case FAILURE:
            return { ...state, isLoading: false, errorMessage: payload };
        default:
            return state;
    }
}

function useGetGeoInfo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(request());
            try {
                const response = await axios.get('https://ipapi.co/json/');
                dispatch(success(response.data));
            } catch (error) {
                dispatch(failure(error.response.data));
            }
        };
        fetchData();
    }, []);

    return state;
}

export default useGetGeoInfo;