import React, { useState, useEffect } from 'react';
import {
    Container,
    Content,
    ContentSlide,
    TitleSlide,
    SubTitleSlide,
    DetailHome
  } from './styles';
  import Slider from "react-slick";
  import logo from '../../../../assets/images/logo.png';
  import "react-responsive-carousel/lib/styles/carousel.min.css";
  import { Carousel } from 'react-responsive-carousel';

export default function CarouselComp({}){
    var settings = {
        showArrows:true,
        width:"700vw"
      };
    return (
        <Container>
            <Content>
                <Carousel dynamicHeight={true} showThumbs={false} showStatus={false} width="80vw" infiniteLoop={true} autoPlay={true}>
                    <ContentSlide key="slide1">
                            <TitleSlide>SEJA BEM VINDO!</TitleSlide>
                            <SubTitleSlide>
                                Está pronto para farmar e montar o melhor set no seu jogo favorito?!
                            </SubTitleSlide>
                    </ContentSlide>
                    <ContentSlide key="slide2">
                            <TitleSlide>texto</TitleSlide>
                    </ContentSlide>
                    <ContentSlide key="slide3">
                            <TitleSlide>texto</TitleSlide>
                    </ContentSlide>
                    <ContentSlide key="slide4">
                            <TitleSlide>texto</TitleSlide>
                    </ContentSlide>
                    <ContentSlide key="slide5">
                            <TitleSlide>texto</TitleSlide>
                    </ContentSlide>
                    <ContentSlide key="slide6">
                            <TitleSlide>texto</TitleSlide>
                    </ContentSlide>
                </Carousel>
            </Content>
            <DetailHome/>
        </Container>
    )
}