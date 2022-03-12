import { connect } from "react-redux";
import { selectDirectorySections } from "../../../redux/directory/directory-selector";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.comp";
import "./directory.styles.scss";

const Directory = ({ directorySections }) => {
  return (
    <div className="directory-menu">
      {directorySections.map(({ id, ...otherProperties }) => (
        <MenuItem key={id} {...otherProperties} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
