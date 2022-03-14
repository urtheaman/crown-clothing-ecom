import directoryActionTypes from "./directory.action-types";

export const setDirectoryData = directory => ({
    type: directoryActionTypes.SET_DIRECTORY_DATA,
    payload: directory
})