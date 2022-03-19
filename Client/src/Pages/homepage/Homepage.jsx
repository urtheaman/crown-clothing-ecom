import "./Homepage.scss";
import React from "react";
import { connect } from "react-redux";
import {
  onFetchDirectoryStart,
} from "../../redux/directory/directory.action";
import DirectoryContainer from "./directory/directory.container";

class Homepage extends React.Component {
  componentDidMount() {
    const { fetchDirStart } = this.props;
    fetchDirStart();
  }

  render() {
    return (
      <div className="homepage">
        <DirectoryContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => ({
  fetchDirStart: () => dispatchEvent(onFetchDirectoryStart()),
});

export default connect(null, mapDispatchToProps)(Homepage);
