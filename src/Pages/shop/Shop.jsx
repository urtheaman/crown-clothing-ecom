import React from "react";
import { connect } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import withSpinner from "../../components/withSpinner/withSpinner.hoc";
import { getDataFromFirestore } from "../../firebase/get-data.firestore";
import { setShopData } from "../../redux/shop/shop.action";
import Category from "./category/category.comp";
import CollectionOverview from "./collection-overview/collection-overview.comp";

const CollectionOverviewSpinner = withSpinner(CollectionOverview);
const CategorySpinner = withSpinner(Category);

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    const { setShopData } = this.props;
    getDataFromFirestore("shop", "mt8a9SB0Xv8fIyqk7eSE").then((data) => {
      console.log(data);
      setShopData(data);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={<CollectionOverviewSpinner isLoading={isLoading} />}
          />
          <Route
            path=":categoryId"
            element={<CategorySpinner isLoading={isLoading} />}
          />
        </Route>
      </Routes>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => ({
  setShopData: (data) => dispatchEvent(setShopData(data)),
});

export default connect(null, mapDispatchToProps)(Shop);
