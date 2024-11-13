/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import styles from './LeftTools.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTextHeight, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
// import SparclesIco from '../../icos/SparclesIco';
import FontFamilyDropDown from '../FontFamilyDropDown/FontFamilyDropDown';
import AI from '../AI/AI';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

const LeftTools = ({ setContent, content, deleteImg, handleImageChange, setShowTransformer }) => {
    const [chosen, setChosen] = useState('Yüklə');
    const fileInputRef = useRef(null);

    const handleFileButtonClick = () => {
        fileInputRef.current.click(); 
    };

    const deleteImgAndFile = () => {
        deleteImg();
        fileInputRef.current.value = null; 
    }

    const createOrderAndOrderItem = async (shippingAddress) => {
        try {
            const orderResponse = await axios.post("https://put-print-ky689.ondigitalocean.app/api/orders/", {
                shipping_address: shippingAddress || 'Baku, Azerbaijan',  
            });
            const orderId = orderResponse.data.id;
            const orderItemResponse = await axios.post(`https://put-print-ky689.ondigitalocean.app/api/orders/${orderId}/orderitems`, {});
            return orderItemResponse.data.id;
        } catch (error) {
            console.error("Order or OrderItem creation error:", error);
            if (error.response) {
                console.error("Server response:", error.response.data);
            } else {
                console.error("Network error, check your internet connection.");
            }
            return null;
        }
    };
    

    const handleSubmitImage = async (file, customizationData, shippingAddress) => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('asset_type', 'image');
        
        const orderItemId = await createOrderAndOrderItem(shippingAddress);  
        if (!orderItemId) return;
    
        formData.append('order_item', orderItemId);
        if (customizationData.text) formData.append('text', customizationData.text);
        if (customizationData.color) formData.append('color', customizationData.color);
        if (customizationData.fontSize) formData.append('font_size', customizationData.fontSize);
        if (customizationData.rotation) formData.append('rotation', customizationData.rotation);
    
        try {
            const response = await axios.post(`https://put-print-ky689.ondigitalocean.app/api/orderitems/${orderItemId}/customization`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Customization sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending customization:", error);
            if (error.response) {
                console.error("Server response:", error.response.data);
            } else {
                console.error("Network error, check your internet connection.");
            }
        }
    };
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const shippingAddress = 'Baku, Azerbaijan';     
        if (file) {
            handleImageChange(e); 
            const customizationData = {
                text: content.label.title,
                color: content.label.color,
                fontSize: content.label.fontSize,
                rotation: content.label.rotation,
            };
            handleSubmitImage(file, customizationData, shippingAddress);  
        }
    };
    

    return (
        <div className={styles.column}>
            <div className={styles.btns}>
                <button onClick={() => setChosen('Yazı')} className={chosen !== 'Yazı' ? styles.chosen : styles.btn}>Yazı</button>
                <button onClick={() => setChosen('Yüklə')} className={chosen !== 'Yüklə' ? styles.chosen : styles.btn}>Yüklə</button>
                <button onClick={() => setChosen('AI')} className={chosen !== 'AI' ? styles.chosen : styles.btn}>AI</button>
            </div>

            <div className={styles.container}>
                <div className={chosen === 'Yüklə' ? styles.choiceImg : styles.none}>
                    <h3 className={styles.title}>Şəkil seçin</h3>
                    <input ref={fileInputRef} id="fileInput" onChange={handleFileChange} className={styles.none} type='file' />
                    <button onClick={handleFileButtonClick} className={styles.btn}>Şəkil seçin</button>

                    {content.image.value && content.image.value.src.length > 0 && <div className={styles.file}>
                        <div className={styles.imgAndTitle}>
                            <img className={styles.img} src={content.image.value.src} alt='file image' />
                            <div className={styles.text}>
                                <p className={styles.title}>Şəkil 1</p> 
                                <div className={styles.flex}>  
                                    <div className={styles.col}>
                                        <h3 className={styles.title}>En</h3>  
                                        <input disabled value={Math.round(content.image.width, 1)} onChange={(e) => {setShowTransformer(false); setContent({...content, image: {...content.image, width: e.target.value}})}} min={10}  className={styles.input} type='number'  />                            
                                    </div>
                                    <div className={styles.col}>
                                        <h3 className={styles.title}>Uzunluq</h3>  
                                        <input disabled value={Math.round(content.image.height, 1)} onChange={(e) => setContent({...content, image: {...content.image, height: e.target.value}})} min={10}  className={styles.input} type='number' />
                                    </div>
                                    <div className={styles.col}>
                                        <h3 className={styles.title}>Fırlanma</h3>  
                                        <input disabled defaultValue={Math.round(content.image.rotation, 1)} onChange={(e) => setContent({...content, image: {...content.image, rotation: e.target.value}})} min={0} max={360} className={styles.input} type='number'  />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={deleteImgAndFile} className={styles.deleteBtn}>x</button>
                    </div>}

                    {!content.image.value &&  <div className={styles.noItems}>
                        <h3 className={styles.noItemsTitle}>Fayl yoxdur!(˘⌣˘)ʃ</h3>
                    </div>}
                </div>

                <div className={chosen === 'Yazı' ? styles.choiceText : styles.none}>
                    <h3 className={styles.title}>Bir şey yazın</h3>
                    <input defaultValue={content.label.title} onChange={(e) => setContent({...content, label: {...content.label, title: e.target.value}})} className={styles.input} type='text' placeholder='Bir şeylər yazın' />

                    <h3 className={styles.title}>Rəng seçin</h3>
                    <ColorPicker type='tshirt' setColor={(c) => setContent({...content, label: {...content.label, color: c}})} />
                    <h3 className={styles.title}>Şrift ölçüsünü seçin </h3>
                    <input defaultValue={content.label.fontSize} onChange={(e) => setContent({...content, label: {...content.label, fontSize: e.target.value}})} min={10} max={100} className={styles.input} type='number' placeholder='10' />
                    
                    <h3 className={styles.title}>{`Mətnin fırlanma bucağını seçin (dərəcə ilə)`}</h3>
                    <input value={Math.round(content.label.rotation, 1)} onChange={(e) => setContent({...content, label: {...content.label, rotation: e.target.value}})} min={0} max={360} className={styles.input} type='number' placeholder='0' />

                    <h3 className={styles.title}>Şrift ailəsini seçin</h3>
                    <FontFamilyDropDown defaultValue={content.label.fontFamily} fontFamily={content.label.fontFamily} setFontFamily={(f) => setContent({...content, label: {...content.label, fontFamily: f}})} />
                    
                    <button onClick={() => setContent({...content, label: {...content.label, tshirtLabel: content.label.title}})} className={styles.btn}>Mətni əlavə et</button>
                </div>

                {chosen === 'AI' && <AI />}
            </div>
        </div>
    );
};


export default LeftTools;