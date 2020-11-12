import styled from "styled-components";

export const StyledCard = styled.div`
    max-width: 300px;
    width: 100%;
    height: 260px;
    padding: 20px;
    cursor: pointer;
  
      .card__inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;

        .card--front,
        .card--back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          background-image: url(https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg);
          background-size: cover;
          background-position: center;
        }

        .card--front {
          background-color: #bbb;
        }

        .card--back {
          background-color: #2980b9;
          transform: rotateY(180deg);
        }

        .card__title {
          padding: 1rem;
          background-color: #fff8;
          text-transform: capitalize;
          margin: 20px 0 0;
        }
      }

      &:hover .card__inner {
        transform: rotateY(180deg);
      }
`
