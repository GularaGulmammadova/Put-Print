import React, { useState } from "react";
import "./ProductDetail.css";
import w_tshirt_front from "./../../site assets/t-shirt oversize/white/mockup/W_F.png";
import w_tshirt_back from "./../../site assets/t-shirt oversize/white/mockup/W_B.png";
import b_tshirt_front from "./../../site assets/t-shirt oversize/black/mockup/B_F.png";
import b_tshirt_back from "./../../site assets/t-shirt oversize/black/mockup/B_B.png";

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(w_tshirt_front);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("white");
  const [activeSize, setActiveSize] = useState("");

  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setActiveImage(index);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (color === "white") {
      setMainImage(w_tshirt_front);
    } else {
      setMainImage(b_tshirt_front);
    }
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const images = selectedColor === "white" ? [w_tshirt_front, w_tshirt_back] : [b_tshirt_front, b_tshirt_back];

  const Show = () => {
    const editorModal = document.getElementById('editorModal');
    editorModal.style.display = 'block';
  }

  return (
    <div className="container">
      <div className="product-container">
        <div className="product-detail">
          <div className="product-image">
            <img src={mainImage} alt="T-shirt" className="main-image" />
            <div className="thumbnail-images">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`t-shirt variant ${index + 1}`}
                  className={activeImage === index ? "active" : ""}
                  onClick={() => handleThumbnailClick(image, index)}
                />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h1>Unisex Oversize Köynək</h1>
            <p>
              Gün üçün nəzərdə tutulmuş bu şık oversize köynək, sənə rahatlığı və zərifliyi eyni anda təqdim edir. Sadə dizaynı ilə müxtəlif stillərlə uyumlu olaraq gündəlik geyimə mükəmməl şəkildə əlavə olunur. Keyfiyyətli pambıq materialından hazırlanmış, nəfəs alaraq sənə gün boyu rahatlıq gətirir.
            </p>
            <div className="color-variants">
              <p>Rəng variantları</p>
              <div className="colors">
                <span
                  className={`color-circle ${selectedColor === "white" ? "selected" : ""}`}
                  style={{ backgroundColor: "white" }}
                  onClick={() => handleColorChange("white")}
                ></span>
                <span
                  className={`color-circle ${selectedColor === "black" ? "selected" : ""}`}
                  style={{ backgroundColor: "black" }}
                  onClick={() => handleColorChange("black")}
                ></span>
              </div>
            </div>
            <div className="size-variants">
              <p>Ölçü</p>
              <div className="sizes">
                {["S", "M", "L", "XL", "2XL"].map((size) => (
                  <span
                    key={size}
                    className={`size-box ${activeSize === size ? "active-size" : ""}`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className="product-price">
              <span>30-34₼</span>
              <button onClick={() => Show()} className="start-design-button">Dizayna başla</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
