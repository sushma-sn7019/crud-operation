import React from "react";
import './footer.css';
import logo from '../../Images/AIT.jpg';
let Footer = () =>{
    return(
        <>
        <footer className="page-footer bg-dark text-light font-small unique-color-dark pb-4">
  <div>
    <div  className="container-fluid">
    <div className="text-center text-md-left mt-5">

<div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <h6 className="text-uppercase font-weight-bold mt-4"><img src={logo} alt="AchieversIT" /></h6>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
        <p className="text-justify text-grey">AchieversIT - provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.</p>

      </div>

      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <h5 className="text-uppercase font-weight-bold text-lightgrey mt-5">COMPANY</h5>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
        <p>
          <h6 className="text-hov-orangered">Home</h6>
        </p>
        <p>
          <h6 className="text-hov-orangered">Placements</h6>
        </p>
        <p>
          <h6 className="text-hov-orangered">Corporate Training</h6>
        </p>
        <p>
          <h6 className="text-hov-orangered">Contact US</h6>
        </p>

      </div>

      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <h5 className="text-uppercase font-weight-bold text-lightgrey mt-5">TRENDING COURSES</h5>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
        <p>
          <h6 className="text-hov-orangered">UI Development Course</h6>
        </p>
        <p>
          <h6 className="text-hov-orangered">Angular JS Course</h6>
        </p>
        <p>
          <h6 className="text-hov-orangered">React JS Course</h6>
        </p>
        <p>
          <h6 className="text-hov-orangered">Digital Marketing Course</h6>
        </p>
        <p>
          <h6 className="text-hov-orangered">Python Course</h6>
        </p>

      </div>
    
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

    
        <h5 className="text-uppercase font-weight-bold  text-lightgrey mt-5">CONTACT INFO</h5>
        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
        <p className="d-flex mb-4">
          <i className="fas fa-map-marked-alt mr-3 mt-1 fa-lg"></i> <span>#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029</span></p>
        <p className="mb-4">
        <i className="fas fa-phone-volume mr-3 fa-lg"></i> India : +91 8431-040-457</p>
        <p className="mb-4">
        <i className="fas fa-envelope-open-text mr-3 fa-lg"></i> info@achieversit.com</p>

      </div>
  

    </div>


  </div>
 <hr className="footer-white"/>
 <div className="container text-center spinned">
 <i class="fab fa-facebook-f social-media social-hov1 fa-lg"></i>
 <i class="fab fa-linkedin-in social-media social-hov2 fa-lg"></i>
 <i class="fab fa-twitter social-media social-hov3 fa-lg"></i>
 <i class="fab fa-pinterest-p social-media social-hov4 fa-lg"></i>
 <i class="fab fa-youtube social-media social-hov5 fa-sm"></i>
 </div>
  <div className="footer-copyright text-center container mr-5 d-flex py-3"><p className="mr-5 text-secondary">Copyright © 2020 AchieversIT. All Rights Reserved</p>
    <p className="mr-5 text-hov-orangered">Privacy Policy</p>
    <p className="mr-5 text-hov-orangered">Terms of use</p>
    <p className="mr-5 text-hov-orangered">Refund Policy</p>
  </div>
  <div className="container stickty d-flex justify-content-between">
  <i class="fab fa-whatsapp whatsup fa-3x"></i>
  <span><i className="fas fa-phone-volume phone fa-3x"></i><span className="text-hov-orangered">Call us on : +91 8431-040-457</span></span>
  <span><i class="far fa-envelope mail fa-3x"></i> <span className="text-hov-orangered">Request A Call Back</span></span>
  </div>
</div>
</div>
</footer>
</>
  );
}
export default Footer;