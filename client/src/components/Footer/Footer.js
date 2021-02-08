import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">

      <div className="curstomer-service web-links">
        <p className="footer-heading">Customer Service</p>
        <hr />
        <ul>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/delivery-returns">Delivery & Returns</a></li>
          <li><a href="/size-guide">Size Guide</a></li>
          <li><a href="/customer-feedback">Customer Feedback</a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </div>

      <div className="contact-us web-links">
        <p className="footer-heading">Contact Us</p>
        <hr />
        <p>LIVE CHAT</p>
        <p>Need help? Give us a call.</p>
        <ul>
          <li>Deutschland: 00389 2 223 305</li>
          <li>Denmark: 00389 2 223 305</li>
          <li>Österreich: 00389 2 223 305</li>
          <li>Sweden: 00389 2 223 305</li>
          <li>Finland: 00389 2 223 305</li>
        </ul>
      </div>

      <div className="about-us web-links">
        <p className="footer-heading">About Us</p>
        <hr />
        <ul>
          <li><a href="/history">History</a></li>
          <li><a href="/the-team" >Meet The Team</a></li>
          <li><a href="/about-us" >About Us</a></li>
          <li><a href="/careers" >Careers</a></li>
          <li><a href="/affiliates" >Affiliates</a></li>
        </ul>
      </div>

      <div className="socialMedia-icons">
        <ul>
          <li> <a href="/facebook"> <i className="fab fa-facebook"></i></a> </li>
          <li> <a href="/twitter"> <i className="fab fa-twitter"></i></a> </li>
          <li> <a href="/instagram"> <i className="fab fa-instagram"></i></a> </li>
          <li> <a href="/pinterest"> <i className="fab fa-pinterest-p"></i></a> </li>
          <li> <a href="/youtube"> <i className="fab fa-youtube"></i></a> </li>
        </ul>

      </div>

      <div className="terms-privacy">
        <ul>
          <li className="link-bullet"></li>
          <a href="/terms">  <li>Terms</li> </a>
          <a href="/privacy">  <li>Privacy</li> </a>
          <li className="link-bullet"></li>
        </ul>
      </div>

      <div className="credit-cards-icons">
        <ul>
          <li> <i className="fab fa-cc-visa"></i> </li>
          <li> <i className="fab fa-cc-paypal"></i> </li>
          <li> <i className="fab fa-cc-mastercard"></i> </li>
          <li> <i className="fab fa-cc-discover"></i> </li>
          <li> <i className="fab fa-cc-diners-club"></i> </li>
          <li> <i className="fab fa-cc-apple-pay"></i> </li>
          <li> <i className="fab fa-cc-amex"></i> </li>
        </ul>
      </div>

      <div className="mobile-links">
        <ul>
          <li><a href="/delivery-returns">Delivery & Returns</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/lifestyle">LifeStyle</a></li>
          <li><a href="/size-guide">Size Guide</a></li>
        </ul>
        <ul>
          <li><a href="/careers" >Careers</a></li>
          <li><a href="/about-us" >About Us</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/privacy">  Privacy</a></li>

        </ul>
      </div>

    </div>
  );
}

export default Footer;