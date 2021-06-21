import styled from "styled-components";
import HeaderWrapper from "../header/headerWrapper";
import line from "resources/images/header/line.png";

const AboutWrapper = styled(HeaderWrapper)`

height: initial;
flex-direction: column;
padding-bottom: 152px;


.flex {
    
    width: 100%;
    margin-top: 180px;

    .photo-wrapper {
    width: 450px;
    height: 450px;
    box-shadow: inset 0px 0px 90px rgba(0,0,0, 0.7);
    position: relative;
    top: 10px;

    img {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: -2;
    }
}

.flex-composition {
  flex-direction: column;
  h3 {
    margin-top: 80px;
    //padding-left: 100px;
  }

  p.description {
    color: var(--gray-text);
  }

.designer-composition {
  margin-top: 0;

}

.hello {
    ::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 698px;
    height: 1px;
    top: 17px;
    left: -75px;
    background-image: url(${line});
  }

  ::before {
      z-index: -1;
      height: 2px;
  }

  .x-clam {
    ::before {
    
      bottom: 22px;
      top: initial;
      left: 4px;
     
    }
  }

 
  }
}
}

}

.contacts {
        margin-top: 64px;
        display: flex;
        align-items: center;
        //padding-left: 200px;
        
          
        .phone, .mail {
          display: flex;
          align-items: center;
          margin-left: 32px;
          
          span {
            font-size: 16px;
            font-family: 'mont-reg'
          }
        }

        .fa-linkedin, .fa-envelope, .fa-phone-alt {

          margin-right: 5px;
          font-size: 20px;
          color: var(--gray);
          cursor: pointer;
          transition: .3s ease;

          :hover {
            color: var(--light-gray)
          }
        }
        .fa-linkedin {
            font-size: 40px;
            margin-left: 22px;
          }

        .cvfile {
          font-size: 12px;
          color: #fff;
          background-color: var(--red);
          border-radius: 35px;
          border: none;
          padding: 18px 19px;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: .3s ease;

          :hover {
              background-color: var(--darken-red);
          }
        }


      }

      @media only screen and (min-width: 1700px) {
        .flex {
        .photo-wrapper {
            top: 25px;
        }
        }

      }

`;

export default AboutWrapper;
