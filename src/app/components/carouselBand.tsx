import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import nyJPG from '../imgs/ny.jpg';
import laJPG from '../imgs/la.jpg';
import chicagoJPG from '../imgs/chicago.jpg';
import '../css/carouselBand.css'

export default function CarouselBand() {
  return (
    <Carousel id='home'>
      <Carousel.Item className='carousel-inner'>
        <Image src={nyJPG} alt="" layout="responsive" />
        <Carousel.Caption className='carousel-caption'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-inner'>
        <Image src={chicagoJPG} alt="" layout="responsive"/>
        <Carousel.Caption className='carousel-caption'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-inner'>
        <Image src={laJPG} alt="" layout="responsive"/>
        <Carousel.Caption className='carousel-caption'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}