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
        <div className="mb-2">
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>

        <div className="mb-2">
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>

        <div className="mb-2">
          <label htmlFor=""></label>
          <input type="text" name="" id="" />
        </div>

        <div className="mb-2">
          <label htmlFor=""></label>
          <input type="checkbox" name="" id="" />
        </div>
      </form>
    </>
  );
}
