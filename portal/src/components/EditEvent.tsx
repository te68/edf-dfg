import { render } from "@testing-library/react";
import { extend } from "lodash";
import React from "react";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";
import axios from "axios";
class EditEvent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      categories: [],
      _id: "",
      title: "",
      date: "",
      time: "",
      address: "",
      description: "",
      createdAt: "",
      updatedAt: "",
    };
  }
  componentDidMount() {
    const {
      categories,
      _id,
      title,
      date,
      time,
      address,
      description,
      createdAt,
      updatedAt,
    } = this.props.location.state.event;

    this.setState({
      categories,
      _id,
      title,
      date: new Date(date)
        .toISOString()
        .replace("-", "/")
        .split("T")[0]
        .replace("-", "/"),
      time,
      address,
      description,
      createdAt: new Date(createdAt).toISOString().split("T")[0],
      updatedAt: new Date(updatedAt).toISOString().split("T")[0],
    });
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
  showOnMap = () => {
    const { address } = this.state;
    const newAddress = address.replace(" ", "+");
    const url = `https://www.google.com/maps/place/${newAddress}`;
    window.open(url, "_blank");
  };

  onDeleteClick = async () => {
    await axios.delete(`/api/event/${this.state._id}`);
    this.props.history.push("/");
  };

  onSaveClick = async () => {
    const { title, date, time, address, description, categories } = this.state;
    await axios.put(`/api/event/${this.state._id}`, {
      title,
      date,
      time,
      address,
      description,
      categories,
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="margin10PercentTop">
        <h1 className="h1">{this.state.title}</h1>
        <hr />
        <div className="columns">
          <div className="column">
            <div className="field">
              <label className="label">Event Title</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Event Title"
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
              <label className="label">Description</label>
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Write description here"
                  onChange={this.onChange}
                  data-label="description"
                  value={this.state.description}
                ></textarea>
              </p>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Address</label>
              <div className="field has-addons">
                <p className="control google-maps-search">
                  <input
                    className="input "
                    type="text"
                    value={this.state.address}
                    onChange={this.onChange}
                    data-label="address"
                  />
                </p>
                <p className="control">
                  <button className="button is-info" onClick={this.showOnMap}>
                    Show on Map
                  </button>
                </p>
              </div>
            </div>
            <div className="field">
              <label className="label">Categories (Comma Separated List)</label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Event Title"
                  value={this.state.categories}
                  onChange={this.onChange}
                  data-label="categories"
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Date: {this.state.date}</label>
              <p className="control">
                <input
                  className="input"
                  type="date"
                  value={this.state.date}
                  onChange={this.onChange}
                  data-label="date"
                ></input>
              </p>
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
