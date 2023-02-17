
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import './blog.css'
import { Link } from "react-router-dom";

function Blog(){
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
    return(
        <>
        <div className="page">
        <section>
            <h2>Blog section</h2>
            Blog
        </section>
        <section>
            <h2>Posts</h2>
            <div className="posts">
              <ul>
                <li>
                  <Link to='/blog/post-1'>Post-1</Link>
                </li>
                <li>
                  <Link to='/blog/post-2'>Post-2</Link>
                </li>
                <li>
                  <Link to='/blog/post-3'>Post-3</Link>
                </li>
              </ul>
            </div>
        </section>
        <section>
            <h2> section 3</h2>
            section 3
           <div>
            <Link to='/contact'>Contact</Link>
            </div> 
        </section>
        </div>
        
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </>
    )
}

export default Blog