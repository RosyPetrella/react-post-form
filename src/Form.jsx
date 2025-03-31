import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-4">
        <div className="row mb-3">
          <label htmlFor="colFormLabel author" class="col-sm-2 col-form-label">
            Author
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="colFormLabel"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            ></input>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel title" class="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="colFormLabel"
              name="title"
              value={formData.author}
              onChange={handleChange}
              required
            ></input>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel body" class="col-sm-2 col-form-label">
            Body
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="colFormLabel"
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
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
            value={formData.public}
            onChange={handleChange}
            required
          ></input>
          <label class="form-check-label" for="flexRadioDefault1">
            Public
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value={formData.public}
            onChange={handleChange}
            checked
          ></input>
          <label class="form-check-label" for="flexRadioDefault2">
            Draft
          </label>
        </div>
      </form>
    </>
  );
}
