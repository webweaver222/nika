import styled from "styled-components";
import HeaderWrapper from "../header/headerWrapper";
import line from "resources/images/header/line.png";

import linkdin from "resources/images/icons/linkdin.png";

const AboutWrapper = styled(HeaderWrapper)`

height: initial;
//display: initial;

.photo-wrapper {
    width: 450px;
    height: 450px;
    box-shadow: inset 0px 0px 90px rgba(0,0,0, 0.7);

    img {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: -2;
    }
}

.flex {
    margin-top: 190px;
    width: 100%;
    padding-right: 200px;
}

.flex-composition {

  .contacts {
        margin-top: 30px;
        display: flex;
        align-items: center;

        .linkdin {
            width: 43px;
            height: 43px;
            background: url(${linkdin});
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
        left: 0;
        background-image: url(${line});
      }

      ::before {
          z-index: -1;
          height: 2px;
      }

      .x-clam {
        ::before {
        
          bottom: 28px;
          top: initial;
          left: 5px;
         
        }
      }

     
      }
    }
}

`;

export default AboutWrapper;
