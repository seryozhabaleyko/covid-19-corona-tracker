import { useEffect, useReducer } from 'react';
import { defaultErrorMessage } from '../constants';
import Api from '../utils/api';

const DATA_FETCH_REQUEST = 'DATA_FETCH_REQUEST';
const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';

const SET_FILTER_BY_NAME = 'SET_FILTER_BY_NAME';
const SET_SORT = 'SET_SORT';

const initialState = {
    isLoading: false,
    data: [],
    countries: [],
    errorMessage: null,
};

function apiReducer(state, { type, payload }) {
    switch (type) {
        case DATA_FETCH_REQUEST:
            return { ...state, isLoading: true, errorMessage: null };
        case DATA_FETCH_SUCCESS:
            return { ...state, isLoading: false, data: payload, countries: payload };
        case DATA_FETCH_FAILURE:
            return { ...state, isLoading: false, errorMessage: payload };

        case SET_FILTER_BY_NAME: {
            const filtering = state.data.filter((item) => item.country.toLowerCase().includes(payload.toLowerCase()));
            return { ...state, countries: filtering };
        }

        case SET_SORT: {
            const { countries } = state;
            const sorting = payload !== 'default'
                ? countries.sort((a, b) => b[payload] - a[payload])
                : countries.sort((a, b) => a.country < b.country ? -1 : 1);
            return { ...state, countries: sorting };
        }

        default:
            return state;
    }
}

const fetchDataRequest = () => ({ type: DATA_FETCH_REQUEST });
const fetchDataSuccess = (data) => ({ type: DATA_FETCH_SUCCESS, payload: data });
const fetchDataFailure = (errorMessage = defaultErrorMessage) => ({ type: DATA_FETCH_FAILURE, payload: errorMessage });
const filterByNameSuccess = (country) => ({ type: SET_FILTER_BY_NAME, payload: country });
const sortSuccess = (value) => ({ type: SET_SORT, payload: value });

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

    const setFilterByName = (country) => dispatch(filterByNameSuccess(country));
    ;

    const setSort = (value) => dispatch(sortSuccess(value));

    return [{ ...data }, setFilterByName, setSort];
}

export default useFetch;