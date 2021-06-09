import styled from "styled-components";

import line from "resources/images/header/line.png";

const HeaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  font-family: "mont-bold";
  color: #231f20;
  
  

  header {
    width: 100%;
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    padding: 65px 0 80px 0;

    .logo-text {
      color: #c8c8c8;
      font-size: 14px;
      
    }

    nav {
     
        span {
          margin-right: 30px;
          padding: 10px;
          cursor: pointer;

          :last-child {
            margin-right: 0px;
          }

          :hover {
            border-bottom: 3.6px solid red;
          }
        }
    }
  }

  .welcome, .description {
    font-family: "mont-reg";
    font-size: 18px;
  }

  .designer-composition {
    font-size: 115px;
    margin-top: 21px;

    .uiux, .designer, .hello {
      position: relative;
      z-index: -1;
      left: -8px;


      ::before {
        content: "";
        position: absolute;
        z-index: 3;
        width: 698px;
        height: 1px;
        bottom: 15px;
        left: -75px;
        background: url(${line}) no-repeat left;
        
      }

    }   
    }

    .uiux {
      text-transform: uppercase;

      span {
        position: relative;
        z-index: 5;
        margin: 0 6px;
      }

      ::before {
        top: 17px;
      }
    }

    .designer, .hello {

      .i-letter, .x-clam {
        position: relative;

        ::before {
          position: absolute;
          content: '';
          width: 23px;
          height: 21px;
          border-radius: 50%;
          background-color: var(--red);
          top: 19px;
          left: 6px;
        }
      }

      .g-letter {
        position: relative;
        z-index: 5
      }
    }
  }

  p.description {
    margin-top: 32px;
    max-width: 600px;
    line-height: 32px;

  }

  p.description-long {
    margin-top: 0;
    max-width: 700px;
  }



  .vertical-banner {
    position: absolute;
    z-index: -2;
    right: 13%;
    top: 47%;
    transform:translate(0, -50%);

    img {
      height: 580px;
    }
  }

  .shevrone-block {
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    animation: upAndDown 2s linear infinite;
    padding-bottom: 7px;
    

  
    img{
        width: 40px; 
        cursor: pointer;
         
    }
  }

  @media only screen and (min-width: 1600px) {

    header {
      padding-top: 90px;
    }

    .flex-composition {
      padding-top: 30px;
      .designer {
        ::before{
          bottom: 16px;
        }
      }
    }

    .vertical-banner {
      img {
        width: calc(189px * 1.25);
        height: calc(638px * 1.25);
      }
     
      right: 19%;
    }


  }
`;

export default HeaderWrapper;
