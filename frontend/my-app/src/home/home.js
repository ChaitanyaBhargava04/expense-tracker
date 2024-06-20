//import logo from './logo.svg';
import './home.css';
import image1 from '../image/img1.jpg';
import image2 from '../image/img2.jpg';
import image3 from '../image/img3.jpg';
function Home() {
  return (
    <>
    <div className="home">
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={image3} height="400px"/>
    </div>
    <div class="carousel-item">
      <img src={image1} height="400px"/>
    </div>
    <div class="carousel-item">
      <img src={image2} height="400px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</>
  );
}

export default Home;
