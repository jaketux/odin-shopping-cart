import Instagram from "/src/images/instagram.png";
import Facebook from "/src/images/facebook.png";
import Twitter from "/src/images/twitter.png";
import Youtube from "/src/images/youtube.png";
import Tiktok from "/src/images/tik-tok.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="first-list">
        <div className="list-heading">ODINSHOP</div>
        <ul>
          <li>About Us</li>
          <li>Affiliates</li>
          <li>Partnerships</li>
          <li>Careers</li>
          <li>Terms and Conditions</li>
          <li>Promotions and Competitions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="second-list">
        <div className="list-heading">HELP & SUPPORT</div>
        <ul>
          <li>FAQs & Contact</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Size Guide</li>
          <li>Gift Cards</li>
          <li>Product Ideas</li>
        </ul>
      </div>
      <div className="social-media">
        <div className="list-heading">FOLLOW US</div>
        <ul>
          <li>
            <img src={Instagram} alt="instagram logo" className="footer-icon" />
            <div>Instagram</div>
          </li>
          <li>
            <img src={Facebook} alt="facebook logo" className="footer-icon" />
            <div>Facebook</div>
          </li>
          <li>
            <img src={Twitter} alt="twitter logo" className="footer-icon" />
            <div>Twitter</div>
          </li>
          <li>
            <img src={Youtube} alt="youtube logo" className="footer-icon" />
            <div>YouTube</div>
          </li>
          <li>
            <img src={Tiktok} alt="tiktok logo" className="footer-icon" />
            <div>TikTok</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
