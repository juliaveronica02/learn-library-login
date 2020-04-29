import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

import { add, hideAdd } from "./../../actioncreators/libraries";

const Add = (props) => {
  const [data, setData] = useState({
    number: 0,
    status: false,
    title: "",
    year: 1990,
  });

  const handleAdd = () => {
    props.add(data);
  };

  const handleClose = () => {
    props.hideAdd();
  };

  const handleChange = (event) => {
    let { name, value, type, checked } = event.currentTarget;
    if (type == "checkbox") {
      setData({
        ...data,
        [name]: checked,
      });
      console.log(checked);
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  return (
    <Modal show={props.isShowAdd} onHide={handleClose}>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>Add Library</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="year">Year</label>
          <input
            type="number"
            class="form-control"
            id="year"
            name="year"
            value={data.year}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label for="number">Number</label>
          <input
            type="number"
            class="form-control"
            id="number"
            name="number"
            value={data.number}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="status"
              name="status"
              checked={data.status}
              onChange={handleChange}
            />
            <label class="form-check-label" htmlFor="status">
              di pinjam
            </label>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isShowAdd: state.libraries.isShowAdd,
  };
};

const mapDispatchToProps = {
  add,
  hideAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
