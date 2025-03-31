import { useState } from "react";
export default function Form() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: "",
  });

  return (
    <>
      <form className="container mt-4">
        <div className="row mb-3">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Author
          </label>
          <div className="col-sm-10">
            <input type="text" class="form-control" id="colFormLabel"></input>
          </div>
        </div>

        <div className="row mb-3">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input type="text" class="form-control" id="colFormLabel"></input>
          </div>
        </div>

        <div className="row mb-3">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Body
          </label>
          <div className="col-sm-10">
            <input type="text" class="form-control" id="colFormLabel"></input>
          </div>
        </div>

        <div className="row mb-3">
          <label for="colFormLabel" class="col-sm-2 col-form-label">
            Public
          </label>
          <div className="col-sm-10">
            <input
              type="form-check-input"
              class="form-control"
              id="colFormLabel"
            ></input>
          </div>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked
          ></input>
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          ></input>
          <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
      </form>
    </>
  );
}
