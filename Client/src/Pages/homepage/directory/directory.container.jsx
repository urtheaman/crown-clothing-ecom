import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../../components/withSpinner/withSpinner.hoc";
import { selectIsDirFetching } from "../../../redux/directory/directory-selector";
import Directory from "./directory.comp";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsDirFetching,
});

const DirectoryContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Directory);

export default DirectoryContainer;
