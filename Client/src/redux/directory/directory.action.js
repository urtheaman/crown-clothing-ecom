import directoryActionTypes from "./directory.action-types";

export const onFetchDirectoryStart = () => ({
    type: directoryActionTypes.FETCH_DIR_DATA_START
})

export const onFetchDirectorySuccess = directory => ({
    type: directoryActionTypes.FETCH_DIR_DATA_SUCCESS,
    payload: directory
})

export const onFetchDirectoryFailure = errorMessage => ({
    type: directoryActionTypes.FETCH_DIR_DATA_FAILURE,
    payload: errorMessage
})