import React, { useState, useEffect } from 'react';
import Header from '../componets/Header';
import Search from '../componets/Search';
import Categories from '../componets/Categories';
import Carousel from '../componets/Carousel';
import CarouselItem from '../componets/CarouselItem';
import Footer from '../componets/Footer';
import '../assets/styles/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState'

const App = () => {
  const initialState = useInitialState(API)
  console.log('videos ', initialState)

  return (
    <div className='App'>
      <Header />
      <Search />
      {/* {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )} */}
      {/* <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => {
            <CarouselItem />;

          })}
        </Carousel>
      </Categories> */}
      <Categories title='Tendencia'>
          <Carousel>
            {initialState.trends.map(item =>
              <CarouselItem key={item.id} {...item}></CarouselItem>
            )

            }
          </Carousel>
        </Categories>


      <Footer />
    </div>
  );
};

export default App;
