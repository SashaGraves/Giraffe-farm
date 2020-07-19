import React, { useState } from 'react';
import addPhoto from '../../../../static/add-photo.jpg';
import './card-template.scss';
import { TextButton } from '../../../shared/buttons-n-links/buttons-n-links';
import InputField from '../../../shared/inputs/InputField';
import UploadPhoto from '../../../shared/inputs/UploadPhoto';

function CardAddUpdate({ returnShowMode, data, CRUDmode }) {
    const [formValue, setFormValue] = React.useState(data);
    const [canSubmit, setSubmitPermission] = React.useState(Boolean(formValue.name));

    const onChangeHandler = (e) => { 
        const value =  event.target.value;
        const name =  event.target.name;
        setFormValue(formValue => ({ ...formValue, [name]: value }));
        setSubmitPermission(Boolean(formValue.name));
    };
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formValue, "formValue");
    };
    
    return (
        <form className="card" action="" method="">
            <UploadPhoto className="giraffe-avatar add-avatar" />
            <InputField name="name" className="giraffe-name" label="Имя жирафа" placeholder="Имя" maxValue={12} value={formValue.name} onChangeHandler={onChangeHandler} />
            <div className="table">
                <ul className="table-header">
                    <li className="table-cell"><i className="fas fa-venus-mars" /></li>
                    <li className="table-cell"><i className="fas fa-balance-scale" /></li>
                    <li className="table-cell"><i className="fas fa-ruler-vertical" /></li>
                </ul>
                <ul className="table-row">
                    <li className="table-cell">
                        <InputField type="text" name="sex" className="" label="пол жирафа" placeholder="-" maxValue={1} value={formValue.sex} onChangeHandler={onChangeHandler} />
                    </li>
                    <li className="table-cell">
                        <InputField type="number" name="weight" className="" label="вес жирафа" placeholder="-" maxValue={4} value={formValue.weight} onChangeHandler={onChangeHandler} />
                    </li>
                    <li className="table-cell">
                        <InputField type="number" name="height" className="" label="рост жирафа" placeholder="-" maxValue={1} value={formValue.height} onChangeHandler={onChangeHandler} />
                    </li>
                </ul>
            </div>
            <ul className="description">
                <li>
                    <b>Цвет: </b>
                    <InputField type="text" name="color" className="" label="цвет жирафа" placeholder="" maxValue={40} value={formValue.color} onChangeHandler={onChangeHandler} />
                </li>
                <li>
                    <b>Диета: </b>
                    <InputField type="text" name="diet" className="" label="диета жирафа" placeholder="" maxValue={40} value={formValue.diet} onChangeHandler={onChangeHandler} />
                </li>
                <li>
                    <b>Характер: </b>
                    <InputField type="text" name="temper" className="" label="характер жирафа" placeholder="" maxValue={40} value={formValue.temper} onChangeHandler={onChangeHandler} />
                </li>
            </ul>
            {
                (CRUDmode === 'create') && (
                <div>
                    <TextButton type='submit' title="Сохранить" className="save-card-button" disabled={!canSubmit} clickHandler={(e) => {onSubmitHandler(e); returnShowMode(); }} />
                    <TextButton type="button" title="Удалить" className="delete-card-button" clickHandler={returnShowMode} />
                </div>
                )
            }
            {
                (CRUDmode === 'update') && (
                <div>
                    <TextButton type='submit' title="Сохранить" className="save-card-button" disabled={!canSubmit} clickHandler={(e) => {onSubmitHandler(e); returnShowMode()}} />
                    <TextButton type="button" title="Отменить" className="revert-changes-button" clickHandler={() => {setFormValue(data); returnShowMode()}} />
                </div>
                )
            }
        </form>
    )
}

export default CardAddUpdate;
 