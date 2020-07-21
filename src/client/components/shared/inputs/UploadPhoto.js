import React, { useState, useRef } from 'react';
import addPhoto from '../../../static/add-photo.jpg';

function UploadPhoto({ className, sendFiles }) {
    
    const [photo, setPhoto] = useState(addPhoto);
    
    const imageUploadRef = useRef(null);

    const handleFileChange = (event) => {
        if (event.target.files.length === 0 || event.target.files == undefined) {
            return
        } else {
            sendFiles(event.target.files[0]);
            setPhoto(event.target.files[0]);
            const avatar = imageUploadRef.current;
            const reader = new FileReader();
            reader.onload = (function(aImg) {
                sendFiles(reader.result);
                return function(e) {
                    aImg.src = e.target.result; 
                }; 
            })(avatar);
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    
    return (
        <div>
            <label htmlFor="file">
                <input type="file" accept="image/*" name="photo" id="file" hidden onChange={handleFileChange} />
                <img src={photo} alt={photo.name} className={className} ref={imageUploadRef} />
            </label>
        </div>
    )
}

export default UploadPhoto;
