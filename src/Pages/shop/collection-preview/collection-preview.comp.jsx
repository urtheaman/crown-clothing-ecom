import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.comp";
import { Link } from "react-router-dom";

const CollectionPreview = ({ preview = false, title, items, routeName }) => {
  const collectionItems = preview
    ? items.filter((data, index) => index < 4)
    : items;
  return (
    <div className="collection-preview">
      <Link to={`/shop/${routeName}`}>
        <h3 className="title">{title.toUpperCase()}</h3>
      </Link>
      <div className="preview">
        {collectionItems.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
