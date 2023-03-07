import React from "react";
import "./main.css";
// import img logo
import logo from "../Assets/nav/Zamin Travel Logo PNG.png";
//import cart img
import haj1 from "../Assets/section2/haj1.png";
import haj2 from "../Assets/section2/haj2.png";
import haj3 from "../Assets/section2/b-haj.jpg";
import img1 from "../Assets/section3/img2.jpg"
import img2 from "../Assets/section3/img3.jpg"
import img3 from "../Assets/section3/img5.jpg"
import img4 from "../Assets/section3/img6.jpg"
import img5 from "../Assets/section3/img7.jpg"
import img6 from "../Assets/section3/img8.jpg"
import hodim from "../Assets/esction1/malakali.png"
import hodim_masulyat from "../Assets/esction1/hodimlar.png"
import narx from "../Assets/esction1/qulay.png"

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
          <button>niz haqimizda</button>
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
          <p>bizning fermamiz 2015 yildan buyon xizmat korsatib kelmoqda</p>

          <div className="sec_1_right">
            <div className="hodim">
              <img src={hodim} alt="" />
              <p>Oz ishiga masulyat bilan yondashish</p>
            </div>
            <div className="hodim">
              <img src={hodim_masulyat} alt="" />
              <p>Malakali  va masulyatli 50 boshilar</p>
            </div>
            <div className="hodim">
              <img src={narx} alt="" />
              <p>Ishonchli Hamyonbop qulay va arzon narxlar</p>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <p>FOYDALI MALUMOTLAR VA TAVSIYALAR</p>
        <div id="foydali">
          <div className="f_cart">
            <img src={haj1} alt="" />
            <p>Haj qanday ibodat?</p>
          </div>
          <div className="f_cart">
            <img src={haj2} alt="" />
            <p>Umra qanday ibodat?</p>
          </div>
          <div className="f_cart">
            <img src={haj3} alt="" />
            <p>Umra ziyorati</p>
          </div>
        </div>
      </section>

      <section id="section3">
        <p>UMRA SAFARIDAGI ZAIYORAT QILINAGIGON JOYLAR</p>
        <div className="section3_cartlat">
          <div className="sec_3_cart">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <p>
                {" "}
                Madinaga yetib borgan umrachilarimiz bugun MADINAI-SHARIFNI
                ziyorat qilishdi
              </p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <p>
                Gurhimiz Makka shaxrni va Kabatullohni ziyorat qilishoqda
                hammamizga nasib qilsin ilohim
              </p>
            </div>
          </div>
          <div className="sec_3_cart">
            <div className="img">
              <img src={img3} alt="" />
              <div className="text">
                <p>
                  Alxamdulillax Madinaga yetib borgan guruximiz ziyoratchilari
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
      <section id></section>
    </div>
  );
}
