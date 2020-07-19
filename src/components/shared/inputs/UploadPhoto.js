import React, { useState, useRef } from 'react';
import axios from 'axios';
import addPhoto from '../../../static/add-photo.jpg';

function UploadPhoto({ className }) {
    
    const [photo, setPhoto] = useState(addPhoto);
    
    const imageUploadRef = useRef(null);

    const handleFileChange = (event) => {
        if (event.target.files.length === 0 || event.target.files == undefined) {
            return
        } else {
            setPhoto(event.target.files[0]);
            const avatar = imageUploadRef.current;
            const reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    aImg.src = e.target.result; 
                }; 
            })(avatar);
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    
    
    // const sendFiles = async (event) => {
    //     let formData = new FormData();
    //     formData.append('file', photo[0]);
    //     const { data } = await axios.post('/uploadImage', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     })
    //     if (data.success) {
    //         setPhoto();
    //     }
    // }
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
