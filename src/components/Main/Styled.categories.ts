import styled from "styled-components";

export const StyledCategories = styled.div`
    max-width: 300px;
    width: 100%;
    height: 260px;
    padding: 20px;
    cursor: pointer;
    
    .link {
    color: #000000;
    }
  
      .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
          box-shadow: 0 0 20px 0 rgba(0, 0, 0, .5), 0 0 30px 0 rgba(0, 0, 0, .3);
          border-radius: 10px;
          content: '';
          opacity: 0;
          z-index: -1;
        }

        &:hover,
        &:focus {
          transform: scale3d(1.05, 1.05, 1);
            
            &::after {
              opacity: 1;
            }
          }

        .card-front {
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

        .card-front {
          background-color: #bbb;
        }

        .card-title {
          padding: 1rem;
          background-color: #fff8;
          text-transform: capitalize;
          margin: 20px 0 0;
        }
      }
`
