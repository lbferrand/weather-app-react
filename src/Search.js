import React from "react";

export default function Search() {
  return (
    <div>
      <form id="search-form" class="mb-3">
        <div className="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Search for City"
              class="form-control"
              id="city-input"
              autocomplete="off"
              onfocus="this.value=''"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
