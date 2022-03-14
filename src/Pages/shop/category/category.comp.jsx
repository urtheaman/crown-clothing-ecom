import React from "react";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../../redux/shop/shop-selector";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionPreview from "../collection-preview/collection-preview.comp";

const Category = ({ collections }) => {
  const { categoryId } = useParams();
  console.log("params", categoryId);
  const category = collections[categoryId];

  return <CollectionPreview classProp="category" {...category} />;
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(Category);
