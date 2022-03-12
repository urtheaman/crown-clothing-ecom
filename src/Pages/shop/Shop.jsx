import React from "react";
import "./Shop.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "./collection-preview/collection-preview.comp";
import { selectShopItems } from "../../redux/shop/shop-selector";

const Shop = ({ collections }) => {
  return (
    <div className="shop">
      <h2>Collections</h2>
      {Object.values(collections).map(({ id, ...otherProperties }) => {
        return (
          <CollectionPreview key={id} preview={true} {...otherProperties} />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(Shop);
