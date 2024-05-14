import React, { useRef } from "react";
import styled from "styled-components";
import viewerDisney from "../images/viewers-disney.png";
import viewerMarvel from "../images/viewers-marvel.png";
import viewerPixar from "../images/viewers-pixar.png";
import viewerStarWars from "../images/viewers-starwars.png";
import viewerNational from "../images/viewers-national.png";
import videoDisney from "../videos/1564674844-disney.mp4";
import videoPixar from "../videos/1564676714-pixar.mp4";
import videoMarvel from "../videos/1564676115-marvel.mp4";
import videoStarWars from "../videos/1608229455-star-wars.mp4";
import videoNational from "../videos/1564676296-national-geographic.mp4";

const Viewer = (props) => {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    // Kiểm tra xem video có được định nghĩa chưa
    if (videoRef.current) {
      // Bắt đầu phát video
      videoRef.current.play();
    }
  };
  return (
    <Container>
      <Wrap onClick={handlePlayVideo}>
        <img src={viewerDisney} alt="" />
        <video ref={videoRef} autoPlay={true} loop={true} playsInline={true}>
          <source src={videoDisney} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap onClick={handlePlayVideo}>
        <img src={viewerPixar} alt="" />
        <video ref={videoRef} autoPlay loop={true} playsInline={true}>
          <source src={videoPixar} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap onClick={handlePlayVideo}>
        <img src={viewerMarvel} alt="" />
        <video ref={videoRef} autoPlay={true} loop={true} playsInline={true}>
          <source src={videoMarvel} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap onClick={handlePlayVideo}>
        <img src={viewerStarWars} alt="" />
        <video ref={videoRef} autoPlay={true} loop={true} playsInline={true}>
          <source src={videoStarWars} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap onClick={handlePlayVideo}>
        <img src={viewerNational} alt="" />
        <video ref={videoRef} autoPlay={true} loop={true} playsInline={true}>
          <source src={videoNational} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewer;
