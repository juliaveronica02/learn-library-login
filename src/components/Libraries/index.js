import React from "react";
import { connect } from "react-redux";

import { getData, showAdd } from "./../../actioncreators/libraries";

import Main from "./Main";

const Index = (props) => {
  const showAdd = () => {
    props.showAdd();
  };

  const handleKeyUp = (event) => {
      if (event.keyCode == 13){
          props.search(event.currentTarget.value);
      }

  }
  return (
    <div>
      <h2>Libraries</h2>
      <div className="form-inline">
        <button className="btn btn-primary" onClick={showAdd}>
          Tambah
        </button>

        <div class="input-group mb-3">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            onKeyUp={handleKeyUp}
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">
              +
            </span>
          </div>
        </div>
      </div>
      <Main />
    </div>
  );
};

const mapDispatchToProps = {
    search: getData,
    showAdd
};

export default connect(null, mapDispatchToProps)(Index);
