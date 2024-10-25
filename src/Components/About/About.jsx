// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import choose_icon from "./../../site assets/logo and icons/choose.png";
import design_icon from "./../../site assets/logo and icons/design.png";
import order_icon from "./../../site assets/logo and icons/order.png";
import ai_image from "./../../site assets/logo and icons/ai-image.png";
import design_img from "./../../site assets/design-image.png"

const About = () => {
  
  const Show = () => {
    const editorModal = document.getElementById('editorModal');
    editorModal.style.display = 'block';
  }

  return (
    <div className="container">
      <div className="about-content">
        <div className="about-title">
          <div className="about-subtitle">
            Dizayn və fərdiləşdirmək ilə öz geyiminizi yaradın
          </div>
          <p className="about-text">
            Bir neçə dəqiqə ərzində gözəl, xüsusi məhsullar yaradın və satın.
          </p>
          <button className="design-btn">
            <p  onClick={() => Show()} className="starting-design">Dizayna başla</p>
          </button>
        </div>
        <div className="about-image">
          <img
          src={design_img}
            alt="about-image"
          />
        </div>
      </div>

      <section className="why_us">
        <div className="why_us_title">Niyə Put&Printi seçməlisiniz?</div>
        <div className="why_us_content">
          <div className="why_us_info">
            <div className="why_us_img">
              <img src={choose_icon} alt="Seçin Icon" />
            </div>
            <div className="why_us_subtitle">Seçin</div>
            <div className="why_us_text">
              Bir-birindən fərqli keyfiyyətli məhsul arasından istədiyini seç
            </div>
          </div>

          <div className="why_us_info">
            <div className="why_us_img">
              <img src={design_icon} alt="Dizayn Icon" />
            </div>
            <div className="why_us_subtitle">Dizayn et</div>
            <div className="why_us_text">
              Zövqünüzə uyğun faylı yükləyin və ya Ai ilə dizayn yaradın
            </div>
          </div>

          <div className="why_us_info">
            <div className="why_us_img">
              <img src={order_icon} alt="Sifariş Icon" />
            </div>
            <div className="why_us_subtitle">Sifariş ver</div>
            <div className="why_us_text">
              Sadəcə bir neçə kliklə seçiminizi tamamlayın
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="ai-section">
          <img src={ai_image} alt="" className="image-item" />
          <div className="text-section">
            <div className="text-desc">
              <h2 className="ai-heading">Dizayn et</h2>
              <p className="ai-title">
                Ai ilə sizin üçün ən uyğun və yaradıcı məhsullar
              </p>
            </div>
            <p className="ai-text">
              İstədiyiniz dizaynı seçin, biz isə qalanını AI ilə həll edək!
            </p>
            <button className="ai-generate">Ai ilə dizayna başla</button>
          </div>
        </div>
      </div>

      <div className="background-image">
        <div className="content">
          <h2 className="designer-heading">
            Dizaynıvıza başlamağa hazırsınız?
          </h2>
          <button className="start-now-design">İndi Başla</button>
        </div>
      </div>
    </div>
  );
};

export default About;
