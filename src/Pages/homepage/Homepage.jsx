import Directory from "./directory/directory.comp";
import "./Homepage.scss";
import React from "react";
import { connect } from "react-redux";
import withSpinner from "../../components/withSpinner/withSpinner.hoc";
import { getDataFromFirestore } from "../../firebase/get-data.firestore";
import { setDirectoryData } from "../../redux/directory/directory.action";

const DirectoryWithSpinner = withSpinner(Directory);
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { setDirectoryData } = this.props;
    getDataFromFirestore("directory", "Vc3BRUozBcNdUnhl5XL9").then((data) => {
      setDirectoryData(data.sections);
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div className="homepage">
        <DirectoryWithSpinner isLoading={this.state.isLoading} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => ({
  setDirectoryData: (data) => dispatchEvent(setDirectoryData(data)),
});

export default connect(null, mapDispatchToProps)(Homepage);
