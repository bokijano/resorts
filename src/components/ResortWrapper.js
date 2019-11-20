import styled from "styled-components";

const ResortWrapper = styled.div`
  h1 {
    margin-top: 110px;
    text-align: center;
    font-family: "Lobster", cursive;
    text-transform: capitalize;
    color: dodgerblue;
    animation-name: opacitytext;
    animation-duration: 4s;
  }
  @keyframes opacitytext {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }
  .card {
    transition: all 1s linear;
    margin-top: 20px;
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-card {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    transition: all 1s linear;
  }
  .btn-display {
    position: absolute;
    width: 100%;
    height: 30%;
    font-family: "Lobster", cursive;
    font-size: 2rem;
    font-weight: bolder;
    right: 0;
    bottom: 0;
    transition: all 1s linear;
    transform: translateX(101%);
  }
  .img-container:hover .img-card {
    transform: scale(1.4);
  }
  .img-container:hover .btn-display {
    transform: translateX(0%);
    cursor: pointer;
  }
`;
export default ResortWrapper;
