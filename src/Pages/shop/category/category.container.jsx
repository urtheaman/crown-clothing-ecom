import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../../components/withSpinner/withSpinner.hoc";
import { selectIsFetching } from "../../../redux/shop/shop-selector";
import Category from "./category.comp";

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: selectIsFetching,
  });

const CategoryContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Category);
export default CategoryContainer;
// order of hoc inside compose is rtl.
// we're using container pattern cuz we want to keep logic in separate files.
