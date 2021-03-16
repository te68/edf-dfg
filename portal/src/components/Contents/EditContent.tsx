import React from "react";
import axios from "axios";
import PieChart from "./PieChart";
class EditEvent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      category: "",
      _id: "",
      title: "",
      url: "",
      author: "",
      interest: "",
      preview: "",
      featured: false,
      likes: 0,
      dislikes: 0,
      celebrates: 0,
      createdAt: "",
      updatedAt: "",
    };
  }
  componentDidMount() {
    const { _id } = this.props.location.state.content;
    console.log(_id);
    axios.get(`/api/content/${_id}`).then(async (response) => {
      const {
        category,
        _id,
        title,
        url,
        author,
        interest,
        preview,
        featured,
        likes,
        dislikes,
        celebrates,
        createdAt,
        updatedAt,
      } = response.data;
      await this.setState({
        category,
        _id,
        title,
        url,
        author,
        interest,
        preview,
        featured,
        likes,
        dislikes,
        celebrates,
        createdAt,
        updatedAt,
      });
    });
    console.log(this.state.featured);
  }
  onDiscardClick = () => {
    this.props.history.push("/");
  };
  onChange = (event: any) => {
    console.log(event.target.getAttribute("data-label"));
    this.setState({
      [event.target.getAttribute("data-label")]: event.target.value,
    });
  };

  onDeleteClick = async () => {
    await axios.delete(`/api/content/${this.state._id}`);
    this.props.history.push("/");
  };

  onSaveClick = async () => {
    const {
      title,
      category,
      url,
      preview,
      featured,
      interest,
      author,
      likes,
      dislikes,
      celebrates,
    } = this.state;
    await axios.put(`/api/content/${this.state._id}`, {
      title,
      category,
      url,
      preview,
      featured,
      interest,
      author,
      likes,
      dislikes,
      celebrates,
    });
    this.props.history.push("/");
  };
  renderFeatured() {
    if (this.state.featured) {
      return "Yes";
    } else {
      return "No";
    }
  }

  render() {
    return (
      <div className="margin10PercentTop">
        <h1 className="h1">{this.state.title}</h1>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Content Title</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Content Title"
                  value={this.state.title}
                  onChange={this.onChange}
                  data-label="title"
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Created At</label>
              <p className="control">
                <input
                  disabled
                  className="input"
                  type="text"
                  value={this.state.createdAt}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Updated At</label>
              <p className="control">
                <input
                  disabled
                  className="input"
                  type="text"
                  value={this.state.updatedAt}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Preview</label>
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Write description here"
                  onChange={this.onChange}
                  data-label="preview"
                  value={this.state.preview}
                ></textarea>
              </p>
            </div>
            <div className="field ">
              <p className="h3" style={{ margin: "30px 0" }}>
                User Interaction Stats
              </p>
              {this.state.likes ? (
                <PieChart
                  likes={this.state.likes}
                  dislikes={this.state.dislikes}
                  celebrates={this.state.celebrates}
                />
              ) : (
                <progress className="progress is-small is-primary" max="100">
                  15%
                </progress>
              )}
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Author: {this.state.author}</label>
              <div className="field has-addons">
                <p className="control google-maps-search">
                  <input
                    className="input "
                    type="text"
                    value={this.state.author}
                    onChange={this.onChange}
                    data-label="author"
                  />
                </p>
                <p className="control"></p>
              </div>
            </div>
            <div className="field">
              <label className="label">Category: {this.state.category}</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="category"
                  value={this.state.category}
                  onChange={this.onChange}
                  data-label="category"
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Interest: {this.state.interest}</label>
              <p className="control">
                <input
                  className="input"
                  value={this.state.interest}
                  onChange={this.onChange}
                  data-label="interest"
                ></input>
              </p>
            </div>
            <div className="field">
              <label className="label">
                <a href={this.state.url}>{this.state.url}</a>
              </label>
              <p className="control">
                <input
                  className="input"
                  value={this.state.url}
                  onChange={this.onChange}
                  data-label="url"
                />
              </p>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">
                  Featured? {this.renderFeatured()}
                </label>
                <button
                  type="button"
                  className="button is-primary"
                  onClick={() => {
                    this.setState({ featured: !this.state.featured });
                  }}
                >
                  Toggle featured
                </button>
              </div>
            </div>
            <div className="field"></div>
            <div className="field">
              <div className="buttons notification is-info edit-event-button">
                <button
                  className="button is-white"
                  onClick={this.onDiscardClick}
                >
                  Discard
                </button>
                <button
                  className="button is-danger"
                  onClick={this.onDeleteClick}
                >
                  Delete{" "}
                </button>
                <button className="button is-dark" onClick={this.onSaveClick}>
                  Save{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="margin10PercentTop" />
      </div>
    );
  }
}

export default EditEvent;
