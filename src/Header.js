import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <Nav />
        <HeaderElement />
{/*     {headerElement2}    */}
      </>
    );
  }
}

export const HeaderElement = () => {
  return (
    <header className="container-fluid bg-danger text-white py-5">
      Header{" "}
    </header>
  );
};

//const headerElement2 = (
// <header className="container-fluid bg-dark text-white py-2">Header 2</header>
//);

export const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-body-teritary bg-dark navbar-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Ads
            </a>
            <a class="nav-link" href="#">
              Placeholder
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
