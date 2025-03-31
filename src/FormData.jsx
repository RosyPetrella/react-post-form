//Chiamata fetch
import { useState } from "react";
import Form from "./Form";

export default function FormData() {
  const [response, setResponse] = useState(null);

  const handleSubmit = (formData) => {
    fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Risposta dal server:", data);
        setResponse(data);
      })
      .catch((error) => {
        console.error("Errore durante l'invio:", error);
      });
  };

  return (
    <div className="mt-3">
      <Form onSubmit={handleSubmit} />
      {response && (
        <div className=" mt-3 alert alert-success">
          Post creato con successo!
        </div>
      )}
    </div>
  );
}
