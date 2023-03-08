import React from "react";
import "./main.css";
// import img logo
import logo from "../Assets/nav/Zamin Travel Logo PNG.png";
//import cart img
import haj1 from "../Assets/section2/haj1.png";
import haj2 from "../Assets/section2/haj2.png";
import haj3 from "../Assets/section2/b-haj.jpg";
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

export function Main() {
  return (
    <div className="wrapper">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <button>Biz haqimizda</button>
          <button>niz haqimizda</button>
          <button>Bizbilan aloqa</button>
        </div>
        <div className="langu">
          <select name="" id="">
            <option value="">uz</option>
            <option value="">ru</option>
            <option value="">en</option>
            <option value="">ar</option>
          </select>
        </div>
      </nav>

      <section className="section1">
        <p id="biz">BIZ HAQIMIZDA QISQA MALUMOT</p>
        <div className="section_center">
          <div className="sec_1_left">
            <p>
              1. “Zamin-Travel” 2016-yilda tashkil etilganidan buyon o‘z
              mijozlariga ajoyib sayohat xizmatlarini ko‘rsatish, muammosiz va
              yoqimli sayohat tajribasini ta’minlash majburiyatini olgan. O‘tgan
              yillar davomida “Zamin” sayyohlik agentligi o‘zining sifatli
              xizmatlari bilan obro‘ qozondi va bu sayyohlar uchun ishonchli va
              samarali sayohat yechimlarini qidirayotganlar uchun ishonchli
              tanlovga aylandi.
            </p>
            <p>
              2. “Zamin-Travel” sayyohlik agentligi har oy 100 dan ortiq
              ziyoratchilarning sayohatlarini osonlashtirib, ularga samarali va
              ishonchli sayohat xizmatlarini taqdim etadi.{" "}
            </p>
            <p>
              3. Bizning ziyoratchilarimiz Makka va Madina shaharlarida yuqori
              darajadagi turar joylarga joylashtirilib, qulay va maroqli ziyorat
              qilishlari uchun barcha qulayliklar bilan jihozlangan 4-5 yulduzli
              mehmonxonalarda joylashtiriladilar  
            </p>
          </div>

          <div className="sec_1_right">
            <div className="hodim">
              <img src={hodim} alt="" />
              <p>Oz ishiga masulyat bilan yondashish</p>
            </div>
            <div className="hodim">
              <img src={hodim_masulyat} alt="" />
              <p>Malakali va masulyatli yo`l boshlovchilar</p>
            </div>
            <div className="hodim">
              <img src={narx} alt="" />
              <p>Ishonchli va hamyonbop narxlar</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <p>FOYDALI MA`LUMOTLAR VA TAVSIYALAR</p>
        <div id="foydali">
          <div className="f_cart">
            <img src={haj1} alt="" />
            <p>Haj safari</p>
          </div>
          <div className="malumot">
            <p>Umra ziyoratini Haj safaridan qanday farqi bor ?</p>
            <p>Haj va Umra ziyoratidagi asosiy farqlar quidagilardir:</p>
            <p>1. Haj farz amal bo'lsa Umra sunnati muakkadadir</p>...
            <button>batafsil</button>
          </div>
          <div className="f_cart">
            <img src={haj2} alt="" />
            <p>Umra ziyorati</p>
          </div>
        </div>
      </section>

      <section id="section3">
        <p>UMRA SAFARIDAGI ZIYORAT QILINADIGAN JOYLAR</p>
        <div className="section3_cartlat">
          <div className="sec_3_cart">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <p>
                Madinaga yetib borgan ziyoratchilarimiz bugun MADINAI-SHARIFga
                tashrif buyurishdi
              </p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <p>
                Guruhimiz Makka shaxrini va Kabatullohni ziyorat qilishoqda.
                InshaAlloh hammamizga nasib qilsin
              </p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img3} alt="" />
              <div className="text">
                <p>
                  Alhamdulillah Madinaga yetib borgan guruximiz ziyoratchilari
                  bugun Kuron bosmaxonasi, Uxud togi, Masjidul Kiblatayn, Kubo
                  masjidi, Saba masjidi, Madina Xurmozorlarini ziyorat kilishdi!
                </p>
              </div>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img4} alt="" />
            </div>
            <div className="text">
              <p>
                Alxamdulillax Madinaga yetib borgan guruximiz bugun Rojixiya
                bogini ziyorat qilishmoqda Alhamduliloh bizgaham nasib etsin
              </p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img5} alt="" />
            </div>
            <div className="text">
              <p>
                Alloxga xamdlar bolsin, yakindagina Madinaga ziyoratga otlangan
                guruximiz bugun Makka shaxrida Nur va Savr toglarini ziyorat
                kilishdi
              </p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img6} alt="" />
            </div>
            <div className="text">
              <p>
                Xoji onalikni qabul qilganingiz muborak bo'lsin. Makka shaxriga
                yetib kelib, muqaddas Kabatullohni tavof qilayotgan onalarimiz
                qatori bo'lishlik barchamizning onalarimizga va opa -
                singillarimizga nasib qilsin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="section4">
        <p> Ziyoratchilarimiz Umra safaridagi fotolavhalar </p>
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
            <span> ZAMINTAVER</span>
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
              <span>Bizni aloqa telefonlarimiz</span>
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>
              <a href="tel:+998939075350">+998939075350</a>
              <br></br>
              <a href="phone">+998939075350</a>
              <br></br>
              <a href="phone">+998939075350</a>
            </p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>Bizning manzil:</span>
            <strong>Sagar Developer</strong> is a Youtube channel where you can
            find more creative CSS Animations and Effects along with HTML,
            JavaScript and Projects using C/C++.
          </p>
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
