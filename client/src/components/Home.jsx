import "./Home.css";
import image from "../assets/image.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__title">Upload your image</div>
      <div className="home__text">File should be Jpeg, Png,..</div>
      <div className="image-container">
        <img src={image} alt="placholder" />
        <div className="option-text">Drag & Drop your image</div>
      </div>
      <div className="option-text">Or</div>
      <button className="home__button">Choose a file</button>
    </div>
  );
};

export default Home;
