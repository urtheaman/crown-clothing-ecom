import data from "../../directory.data.json";
import MenuItem from "../menu-item/menu-item.comp";
import './directory.styles.scss'

const Directory = () => {
  return (
    <div className="directory-menu">
      {data.map(({ id, ...otherProperties }) => (
        <MenuItem key={id} {...otherProperties} />
      ))}
    </div>
  );
};

export default Directory;
