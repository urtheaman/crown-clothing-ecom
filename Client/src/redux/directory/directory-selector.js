import { createSelector } from "reselect";

export const selectDirectory = state => state.directory

export const selectDirectorySections = createSelector([selectDirectory], directory => {
    return directory.sections
})

export const selectIsDirFetching = createSelector(selectDirectory, directory => directory.isDirFetching)