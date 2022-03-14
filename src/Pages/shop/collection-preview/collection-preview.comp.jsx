import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.comp";
import { Link } from "react-router-dom";
import NotFound from "../../404/NotFound";
import { Fragment } from "react";

const CollectionPreview = ({
  preview = false,
  title,
  items,
  routeName,
  classProp = "",
}) => {
  const collectionItems = preview
    ? items.filter((data, index) => index < 4)
    : items;

  return (
    <Fragment>
      {items ? (
        <div className="collection-preview">
          <Link to={`/shop/${routeName}`}>
            <h3 className={`title ${classProp}`}>{title?.toUpperCase()}</h3>
          </Link>
          <div className="preview">
            {collectionItems.map((item) => {
              return <CollectionItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </Fragment>
  );
};

export default CollectionPreview;
