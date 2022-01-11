import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import ColorList from '../widget/shopWidget/ColorList';
import SizeList from '../widget/shopWidget/SizeList';

function AddProductInfo({ showMenu }) {
    const sizeUrl = 'http://localhost:8080/size/save';
    const colorUrl = 'http://localhost:8080/color/save';
    const getsizeUrl = 'http://localhost:8080/size/findAll';
    const getcolorUrl = 'http://localhost:8080/color/findAll';
    const size = useRef();
    const color = useRef();
    const [getSize, setGetSize] = useState([]);
    const [getColor, setGetColor] = useState([]);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        axios.get(getsizeUrl).then((Response) => setGetSize(Response.data));
        axios.get(getcolorUrl).then((Response) => setGetColor(Response.data));
    }, [check]);

    const addSize = () => {
        if (size.current.value !== '') {
            if (getSize.length === 0) {
                axios
                    .post(sizeUrl, {
                        sizeName: size.current.value.toUpperCase(),
                    })
                    .then(() => setCheck(!check))
                    .then(() => (size.current.value = ''));
            } else {
                for (let i = 0; i < getSize.length; i++) {
                    if (
                        size.current.value.toUpperCase() === getSize[i].sizeName
                    ) {
                        alert('이미 존재하는 사이즈입니다');
                        break;
                    }
                    if (i === getSize.length - 1) {
                        axios
                            .post(sizeUrl, {
                                sizeName: size.current.value.toUpperCase(),
                            })
                            .then(() => setCheck(!check))
                            .then(() => (size.current.value = ''));
                    }
                }
            }
        }
    };

    const addColor = () => {
        if (color.current.value !== '') {
            if (getColor.length === 0) {
                axios
                    .post(colorUrl, {
                        colorName: color.current.value.toUpperCase(),
                    })
                    .then(() => setCheck(!check))
                    .then(() => (color.current.value = ''));
            } else {
                for (let i = 0; i < getColor.length; i++) {
                    if (
                        color.current.value.toUpperCase() ===
                        getColor[i].colorName
                    ) {
                        alert('이미 존재하는 컬러입니다');
                        break;
                    }
                    if (i === getColor.length - 1) {
                        axios
                            .post(colorUrl, {
                                colorName: color.current.value.toUpperCase(),
                            })
                            .then(() => setCheck(!check))
                            .then(() => (color.current.value = ''));
                    }
                }
            }
        }
    };

    return (
        <div
            className={
                showMenu === 4 ? 'tab-pane fade show active' : 'tab-pane fade'
            }
            id='addProductInfo'
        >
            <h4>Add ProductInfo</h4>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='table_desc'>
                            <div className='table_page table-responsive'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='size_name'>
                                                size name
                                            </th>
                                            <th
                                                colSpan={2}
                                                className='size_edit'
                                            >
                                                Edit
                                            </th>
                                            <th className='size_delete'>
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getSize.map((item) => (
                                            <SizeList
                                                key={item.id}
                                                item={item}
                                                check={check}
                                                setCheck={setCheck}
                                            />
                                        ))}
                                        <tr>
                                            <td
                                                colSpan={2}
                                                className='size_new'
                                            >
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    id='sizeName'
                                                    placeholder='새로 추가 할 사이즈 이름 입력'
                                                    required=''
                                                    ref={size}
                                                />
                                            </td>
                                            <td colSpan={2}>
                                                <button
                                                    onClick={addSize}
                                                    className='btn btn-secondary'
                                                >
                                                    ADD SIZE
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='color_name'>
                                                color name
                                            </th>
                                            <th
                                                colSpan={2}
                                                className='color_edit'
                                            >
                                                Edit
                                            </th>
                                            <th className='color_delete'>
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getColor.map((item) => (
                                            <ColorList
                                                key={item.id}
                                                item={item}
                                                check={check}
                                                setCheck={setCheck}
                                            />
                                        ))}
                                        <tr>
                                            <td
                                                colSpan={2}
                                                className='color_new'
                                            >
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    id='colorName'
                                                    placeholder='새로 추가 할 컬러 이름 입력'
                                                    required=''
                                                    ref={color}
                                                />
                                            </td>
                                            <td colSpan={2}>
                                                <button
                                                    onClick={addColor}
                                                    className='btn btn-secondary'
                                                >
                                                    ADD COLOR
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductInfo;
