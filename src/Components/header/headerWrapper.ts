import styled from "styled-components";

import line from "resources/images/header/line.png";

const HeaderWrapper = styled.div`
  --red: #ff2f37;
  height: 100vh;
  display: flex;
  font-family: "mont-bold";
  color: #231f20;
  position: relative;
  

  header {
    position: absolute;
    width: 100%;
    top: 0;
    display: flex;
    z-index:6;
    text-transform: uppercase;
    justify-content: space-between;
    padding: 64px 200px 0 200px;

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
            border-bottom: 3px solid red;
          }
        }
    }
  }

  .flex-composition {
    margin: auto 0;
    padding: 0 100px;
  }

  .welcome, .description {
    font-family: "mont-reg";
    font-size: 18px;
    padding-left: 100px;
  }

  .designer-composition {
    font-size: 115px;
    margin-top: 21px;

    .uiux, .designer, .hello {
      position: relative;
      z-index: 0;
      padding-left: 95px;

      ::before {
        content: "";
        position: absolute;
        z-index: 3;
        width: 698px;
        height: 1px;
        bottom: 15px;
        left: 0;
        background-image: url(${line});
      }

    }   
    }

    .uiux {
      text-transform: uppercase;

      span {
        position: relative;
        z-index: 5;
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
    max-width: 700px;
    line-height: 32px;

  }

  p.description-long {
    margin-top: 0;
    max-width: 800px;
  }



  .vertical-banner {
    position: absolute;
    z-index: 0;
    right: 23%;
    top: 50%;
    transform:translate(0, -50%);

    img {
      width: 189px;
      height: 638px;
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
      padding-left: 250px;
      padding-right: 250px;
    }

    .flex-composition {
      padding: 0 150px;
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
