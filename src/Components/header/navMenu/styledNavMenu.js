import styled from 'styled-components'

const StyledNavMenu = styled.nav`
  /* ul {
    display: flex;
  }
  li:not(:last-child) {
    margin-right: 30px;
  } */
  .active {
    color: salmon;
  }

  /* ========================== */

  width: 80%;
  margin: 0 auto;
  background: transparent;
  padding: 50px 0;
  /* box-shadow: 0px 5px 0px #dedede; */

  ul {
    list-style: none;
    text-align: center;
  }
  ul li {
    display: inline-block;
  }
  ul li a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: #bcdced;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;

    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  ul li a,
  ul li a:after,
  ul li a:before {
    transition: all 0.5s;
  }
  ul li a:hover {
    color: #acdcf6;
    &::after {
      animation: circle 1.5s ease-in forwards;
    }
  }
  /* ul li a {
    position: relative;
    overflow: hidden;
    z-index: 1;
  } */
  ul li a:after {
    display: block;
    position: absolute;
    margin: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '.';
    color: transparent;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background: transparent;
  }
  /* ul li a:hover:after {
    animation: circle 1.5s ease-in forwards;
  } */
`
export default StyledNavMenu
