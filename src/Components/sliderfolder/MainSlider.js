import ImageSlider from "./Slider";
import "./mainSlider.scss"
function MainSlider() {
  return (
    <div className="container mt-5 carousel">
      <h1 className="slider_title">React Image Carousel</h1>
      <ImageSlider />
    </div>
  );
}

export default MainSlider;

//npm install react-slick --save
//npm install slick-carousel (this is for slick-carousel for css and font)