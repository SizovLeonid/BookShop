import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Slide from './slide/slide';
import Slider from 'react-slick';
import './slider.less';

class HomeSlider extends React.Component {
  SlideList() {
    return this.props.slide.map((slide) => {
      return (
        <Slide key={slide.id} slideName={slide.slideHeadline} slideDescription={slide.description} img={slide.img} />
      );
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div id='slider'>
        <div className='container'>
          <Slider className='slider' {...settings}>
            {this.SlideList()}
          </Slider>
        </div>
      </div>
    );
  }
}

function bookStateToProps(state) {
  return {
    slide: state.books.slide
  };
}

export default connect(bookStateToProps)(HomeSlider);

HomeSlider.propTypes = {
  slide: PropTypes.array.isRequired,
};
