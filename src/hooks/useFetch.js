import { useEffect, useReducer } from 'react';
import { defaultErrorMessage } from '../constants';
import Api from '../utils/api';

const DATA_FETCH_REQUEST = 'DATA_FETCH_REQUEST';
const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';

const initialState = {
    isLoading: false,
    data: [],
    errorMessage: null,
};

function apiReducer(state, { type, payload }) {
    switch (type) {
        case DATA_FETCH_REQUEST:
            return { ...state, isLoading: true, errorMessage: null };
        case DATA_FETCH_SUCCESS:
            return { ...state, isLoading: false, data: payload };
        case DATA_FETCH_FAILURE:
            return { ...state, isLoading: false, errorMessage: payload };
        default:
            return state;
    }
}

const fetchDataRequest = () => ({ type: DATA_FETCH_REQUEST });
const fetchDataSuccess = (data) => ({ type: DATA_FETCH_SUCCESS, payload: data });
const fetchDataFailure = (errorMessage = defaultErrorMessage) =>
    ({ type: DATA_FETCH_FAILURE, payload: errorMessage });

function useFetch(url) {
    const [data, dispatch] = useReducer(apiReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchDataRequest());

            try {
                const response = await Api(url);
                dispatch(fetchDataSuccess(response.data));
            } catch (error) {
                dispatch(fetchDataFailure(error.response.data));
            }
        };

        fetchData();
    }, [url]);

    return data;
}

export default useFetch;