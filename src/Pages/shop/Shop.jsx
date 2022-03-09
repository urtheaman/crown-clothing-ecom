import React from "react";
import CollectionData from "../../collection.data.json";
import CollectionPreview from "../../components/collection-preview/collection-preview.comp";
import './Shop.scss'

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: CollectionData,
    };
  }

  render() {
    return (
      <div className="shop">
          <h2>Collections</h2>
        {this.state.collection
          .map(({id, ...otherProperties}) => {
              return <CollectionPreview key={id} {...otherProperties}/>
          })}
      </div>
    );
  }
}

export default Shop;
