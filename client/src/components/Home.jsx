import { useState } from "react";
import "./Home.css";
import image from "../assets/image.svg";
import axios from "axios";

const Home = () => {
  const [file, setFile] = useState("");
  const [uploadFile, setUploadFile] = useState({});

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setUploadFile({ fileName, filePath });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="home" onSubmit={handleSubmit}>
      <div className="home__title">Upload your image</div>
      <div className="home__text">File should be Jpeg, Png,..</div>
      <div className="image-container">
        <img
          src={uploadFile.filePath ? uploadFile.filePath : image}
          alt="placholder"
        />
        <div className="option-text">Drag & Drop your image</div>
      </div>
      <div className="option-text">Or</div>
      <button className="home__button" type="submit">
        Choose a file
      </button>
      <input
        type="file"
        accept="image/png image/jpeg"
        onChange={handleChange}
      />
    </form>
  );
};

export default Home;
