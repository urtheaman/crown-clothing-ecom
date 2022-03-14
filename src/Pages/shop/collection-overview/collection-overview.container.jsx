import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../../../components/withSpinner/withSpinner.hoc";
import { selectIsFetching } from "../../../redux/shop/shop-selector";
import collectionOverview from "./collection-overview.comp";

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: selectIsFetching,
  });

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(collectionOverview);
export default CollectionOverviewContainer;
