import { useState } from "react";
import Header from "./components/Header.jsx";
import InputFields from "./components/InputFields.jsx";
import GooglePreview from "./components/GooglePreview.jsx";

export default function App() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Header />

      <main className="layout">
        <InputFields
          url={url}
          title={title}
          description={description}
          setUrl={setUrl}
          setTitle={setTitle}
          setDescription={setDescription}
        />

        <GooglePreview
          url={url}
          title={title}
          description={description}
        />
      </main>
    </>
  );
}
