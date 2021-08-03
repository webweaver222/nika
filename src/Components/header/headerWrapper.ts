import styled from "styled-components";

import line from "resources/images/header/line.png";

const HeaderWrapper = styled.div`
  height: 90vh;
  display: flex;
  font-family: "mont-bold";
  color: #231f20;
  position: relative;
  
  .flex-composition {
      display: flex;
      height: 100%;

      .header-text {
        margin: auto 0;
      }
  }

  header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    padding: 45px 0 60px 0;

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
    font-size: 16px;
  }

  .designer-composition {
    font-size: 95px;
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
        bottom: 13px;
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
        top: 13px;
      }
    }

    .designer, .hello {

      .i-letter, .x-clam {
        position: relative;

        ::before {
          position: absolute;
          content: '';
          width: 20px;
          height: 19px;
          border-radius: 50%;
          background-color: var(--red);
          top: 16px;
          left: 4px;
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
    margin-top: 10px;
    max-width: 700px;
  }



  .vertical-banner {
    position: absolute;
    z-index: -2;
    right: 13%;
    top: 47%;
    transform:translate(0, -50%);

    img {
      height: 550px;
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

  @media only screen and (max-width: 480px) {
    padding: 0 15px;

    header {
      align-items : center;
      .logo-text {
        font-size: 13px;
      }
      nav {
        span {
          padding: 8px;
        font-size: 13px;
        margin-right: 15px;
      }
      }
      
    }

    .welcome {
      font-size: 14px;
    }
      
    .designer-composition {
      font-size: 65px;
      margin-top: 31px;

    
      .uiux, .designer {
        left: initial;

        ::before {
          top: 10px;
          width: 350px;
          left: -40px;
        }
      }

      .designer {
        .i-letter {
          ::before {
            width: 13.5px;
            height: 12.5px;
            top: 12px;
            left: 3px;
          }
        }
        ::before {
          top: initial;
          bottom: 8px;
        }
      }
    }

    p.description {
      font-size: 13px;
    }

    .vertical-banner {
      right: 5%;
       img {
         height: 350px;
       }
    }

    .shevrone-block {
        img {
          width: 30px;
        }
    }
  }
`;

export default HeaderWrapper;
