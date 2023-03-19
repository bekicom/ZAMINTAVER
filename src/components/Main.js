import React, { useState } from "react";
import "./main.css";
// import img logo
import logo from "../Assets/nav/Zamin Travel Logo PNG.png";
// language
import { data } from "./Language";
//import cart img
import haj1 from "../Assets/section2/haj1.png";
import haj2 from "../Assets/section2/haj2.png";
import img1 from "../Assets/section3/img2.jpg";
import img2 from "../Assets/section3/img3.jpg";
import img3 from "../Assets/section3/img5.jpg";
import img4 from "../Assets/section3/img6.jpg";
import img5 from "../Assets/section3/img7.jpg";
import img6 from "../Assets/section3/img8.jpg";
import hodim from "../Assets/esction1/malakali.png";
import hodim_masulyat from "../Assets/esction1/hodimlar.png";
import narx from "../Assets/esction1/qulay.png";
// foto lavhalar
import lavha1 from "../Assets/section4/1.jpg";
import lavha2 from "../Assets/section4/2.jpg";
import lavha3 from "../Assets/section4/3.jpg";
import lavha4 from "../Assets/section4/4.jpg";
// import lavha5 from "../Assets/section4/8.jpg"
import lavha6 from "../Assets/section4/6.jpg";
import lavha7 from "../Assets/section4/7.jpg";
import lavha8 from "../Assets/section4/8.jpg";
import lavha9 from "../Assets/section4/9.jpg";
import lavha10 from "../Assets/section4/10.jpg";
// ichkitrizim
import buhoro from "../Assets/ichki trizm/buhoro.jpg"
import samrqand from "../Assets/ichki trizm/samarqand.jpg"
import xiva from "../Assets/ichki trizm/xiva.jpg"

export function Main() {
  const [lan, setLan] = useState("uz");
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="block">
        <img src={logo} alt="" />
        <button>=</button>
      </div>
      <nav>
        <div className="block">
          <img src={logo} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <button>{data[lan].nav_btn1}</button>
          <button> {data[lan].nav_btn2} </button>
          <button>{data[lan].nav_btn3}</button>
        </div>
        <div className="langu">
          <select onChange={(e) => setLan(e.target.value)}>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
            <option value="ar">ar</option>
          </select>
        </div>
      </nav>

      <section className="section1">
        <p id="biz"> {data[lan].biz}</p>
        <div className="section_center">
          <div className="sec_1_left">
            <p>{data[lan].sec_1}</p>
          </div>

          <div className="sec_1_right">
            <p>{data[lan].afzal}</p>

            <div className="biz_afzalik">
              <div className="hodim">
                <img src={hodim} alt="" />
                <p>{data[lan].afzal1}</p>
              </div>
              <div className="hodim">
                <img src={hodim_masulyat} alt="" />
                <p>{data[lan].afzal2}</p>
              </div>
              <div className="hodim">
                <img src={narx} alt="" />
                <p>{data[lan].afzal3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ichki">
        <p>{data[lan].turizim}</p>
        <div className="katigori">
          <div className="boxxx">
            <div className="f_cart">
              <div className="boxx">
                <p>{data[lan].buhoro}</p>
                <button>onlini tolov qilish</button>
              </div>
              <img src={buhoro} alt="" />
              <p>{data[lan].sayohat}</p>
            </div>
          </div>
          <div className="boxxx">
            <div className="f_cart">
              <div className="boxx">
                <p>{data[lan].samarqand}</p>
                <button>onlini tolov qilish</button>
              </div>
              <img src={samrqand} alt="" />
              <p>{data[lan].sayohat2}</p>
            </div>
          </div>
          <div className="boxxx">
            <div className="f_cart">
              <div className="boxx">
                <p>{data[lan].xiva}</p>
                <button>onlini tolov qilish</button>
              </div>
              <img src={xiva} alt="" />
              <p>{data[lan].sayohat3}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <p>{data[lan].foydali}</p>
        <div id="foydali">
          <div className="boxxx">
            <div className="f_cart">
              <div className="boxx">
                <p>{data[lan].hajxaqida}</p>
              </div>
              <img src={haj1} alt="" />
              <p>{data[lan].haj}</p>
            </div>
          </div>
          <div className="malumot">
            {isOpen ? (
              <div className="modal">
                <div className="modal-body">
                  <span>{data[lan].umra_haj}</span>
                  <button id="close" onClick={closeModal}>
                    x
                  </button>
                </div>
              </div>
            ) : null}
            <p>{data[lan].umra1}</p>
            <p>{data[lan].umra2}</p>
            <p>{data[lan].umra3}</p>...
            <button onClick={openModal}>{data[lan].batafsil}</button>
          </div>
          <div className="boxxx">
            <div className="f_cart">
              <div className="boxx">
                <p>{data[lan].umra_xaqida}</p>
              </div>
              <img src={haj2} alt="" />
              <p>{data[lan].umra}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <p>{data[lan].umra}</p>
        <div className="section3_cartlat">
          <div className="sec_3_cart">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <p>{data[lan].cart1}</p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <p>{data[lan].cart2}</p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img3} alt="" />
              <div className="text">
                <p>{data[lan].cart3}</p>
              </div>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img4} alt="" />
            </div>
            <div className="text">
              <p>{data[lan].cart4}</p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img5} alt="" />
            </div>
            <div className="text">
              <p>{data[lan].cart5}</p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img6} alt="" />
            </div>
            <div className="text">
              <p>{data[lan].cart6}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="section4">
        <p>{data[lan].f_lavha}</p>
        <div className="lavhalar">
          <img src={lavha1} alt="" />
          <img src={lavha2} alt="" />
          <img src={lavha3} alt="" />
          <img src={lavha4} alt="" />
          {/* <img src={lavha5} alt="" /> */}
          <img src={lavha6} alt="" />
          <img src={lavha7} alt="" />
          <img src={lavha8} alt="" />
          <img src={lavha9} alt="" />
          <img src={lavha10} alt="" />
        </div>
      </section>

      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <span> ZAMINTRAVEL</span>
          </h3>

          <p class="footer-links">
            <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>|
            <a href="#">Blog</a>
          </p>

          <p class="footer-company-name">
            Copyright © 2021 <strong>SagarDeveloper</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <p>
              <span>Namangan filiali</span>
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>
              <a href="tel:+998906400400">+99890-640-04-00</a>
              <br></br>
              <a href="tel:+998335080001">+99833-508-00-01</a>
              <br></br>
            </p>
          </div>
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.google.com/maps?q=41.007599,71.671722&ll=41.007599,71.671722&z=16"
              >
                Namangan
              </a>
            </p>
          </div>
        </div>
        <div class="footer-center">
          <div>
            <p>
              <span>Toshkent filiali</span>
            </p>
          </div>

          <div className="namangan">
            <i class="fa fa-phone"></i>
            <p>
              <a href="tel:+998907904141">+99890-790-41-41</a>
              <br></br>
              <a href="tel:+998770019939">+99877-001-99-39</a>
              <br></br>
            </p>
          </div>
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <a
                href="https://maps.google.com/maps?q=41.339601,69.291140&ll=41.339601,69.291140&z=16"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toshkent
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>{data[lan].tarmoq}</span>
          </p>
          <div class="footer-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/zamin_travel_1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              href="https://t.me/ZAMINTRAVEL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2647 2.42778C21.98 2.19091 21.6364 2.03567 21.2704 1.97858C20.9045 1.92149 20.5299 1.96469 20.1866 2.10357L2.26566 9.33892C1.88241 9.4966 1.55618 9.76711 1.33026 10.1145C1.10434 10.462 0.989427 10.8699 1.00076 11.2841C1.0121 11.6984 1.14916 12.0994 1.39374 12.434C1.63832 12.7685 1.97886 13.0208 2.37016 13.1573L5.99516 14.418L8.01566 21.0997C8.04312 21.1889 8.08297 21.2739 8.13404 21.352C8.14179 21.364 8.15272 21.373 8.16096 21.3846C8.21996 21.467 8.29127 21.5397 8.37239 21.6004C8.39546 21.618 8.41755 21.6345 8.44221 21.6501C8.53714 21.7131 8.64228 21.7591 8.75294 21.7862L8.76478 21.7872L8.77149 21.7901C8.83802 21.8036 8.90574 21.8105 8.97364 21.8106C8.98017 21.8106 8.98597 21.8074 8.99244 21.8073C9.0949 21.8055 9.19647 21.7879 9.29353 21.755C9.31611 21.7473 9.33546 21.7345 9.35737 21.7252C9.42975 21.6952 9.49832 21.6567 9.56166 21.6106C9.61238 21.5679 9.66312 21.5251 9.71388 21.4824L12.416 18.4991L16.4463 21.6211C16.8011 21.8974 17.2379 22.0475 17.6875 22.0479C18.1587 22.0473 18.6154 21.8847 18.9809 21.5874C19.3465 21.2901 19.5987 20.8762 19.6954 20.4151L22.958 4.39849C23.032 4.03801 23.0065 3.66421 22.8844 3.31708C22.7623 2.96995 22.5481 2.66255 22.2647 2.42778ZM9.37016 14.7364C9.2315 14.8745 9.13672 15.0505 9.0977 15.2422L8.78819 16.7462L8.00413 14.1532L12.0694 12.0362L9.37016 14.7364ZM17.6719 20.0401L12.9092 16.3506C12.71 16.1966 12.46 16.1234 12.2092 16.1455C11.9583 16.1675 11.725 16.2833 11.5557 16.4697L10.6903 17.4249L10.9961 15.9385L18.0791 8.85549C18.2482 8.68665 18.3512 8.46285 18.3695 8.22461C18.3878 7.98638 18.3201 7.74947 18.1788 7.55681C18.0375 7.36414 17.8319 7.22845 17.5992 7.17433C17.3664 7.1202 17.122 7.15121 16.9102 7.26174L6.74491 12.5544L3.02055 11.1915L20.999 3.99905L17.6719 20.0401Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
