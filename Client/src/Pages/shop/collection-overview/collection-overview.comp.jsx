import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../../redux/shop/shop-selector";
import CollectionPreview from "../collection-preview/collection-preview.comp";
import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      <h2>Collections</h2>
      {collections &&
        Object.values(collections).map(({ id, ...otherProperties }) => {
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

export default connect(mapStateToProps)(CollectionOverview);
