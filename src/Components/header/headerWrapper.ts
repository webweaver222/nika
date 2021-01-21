import styled from "styled-components";

import img from "../../resources/images/header-bg.jpg";

const HeaderWrapper = styled.div`
  height: 100vh;
  flex-direction: column;

  header {
    padding: 40px 0;
  }

  .brand {
    font-family: "mont-bold";
    span {
      font-family: "mont-reg";
      color: var(--gray);
    }
  }

  nav.menu {
    font-size: 18px;
    ul {
      display: flex;
    }

    li a {
      color: var(--gray);
      margin: 0 10px;
    }

    li.current a {
      color: black;
    }
  }

  main {
    flex: 1 1;
    position: relative;
    z-index: 0;
    background-color: rgb(232, 154, 30);
  }

  main .header-text p {
    font-size: 25px;
    line-height: 34px;
  }

  main::after {
    content: "";
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgb(232, 154, 30);
    background-image: url(${img});
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    animation: fadein 1.5s ease;
  }

  @media only screen and (max-width: 992px) {
    main {
      background-size: cover;
    }
  }
`;

export default HeaderWrapper;
