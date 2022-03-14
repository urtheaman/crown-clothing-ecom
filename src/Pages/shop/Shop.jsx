import React from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchShopDataAsync } from "../../redux/shop/shop.action";
import CategoryContainer from "./category/category.container";
import CollectionOverviewContainer from "./collection-overview/collection-overview.container";

class Shop extends React.Component {
  componentDidMount() {
    const { fetchShopDataAsync } = this.props;
    fetchShopDataAsync();
  }
  // instead of calling the dispatch function with data object when we call it with a function
  // then middlewares(redux-thunk) gets this function and executes this function and
  // this function gets access to dispatch as an argument inside then
  // this function executes the dispatch action function with the data object received inside this async function

  render() {
    return (
      <Routes>
        <Route index element={<CollectionOverviewContainer />} />
        <Route path=":categoryId" element={<CategoryContainer />} />
      </Routes>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchShopDataAsync: () => dispatch(fetchShopDataAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
