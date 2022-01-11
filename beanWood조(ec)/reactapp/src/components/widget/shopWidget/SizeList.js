import axios from 'axios';
import React, { useRef } from 'react';

function SizeList({ item, check, setCheck }) {
    const editSizeName = useRef();

    const deleteSize = () => {
        const deleteUrl = `http://localhost:8080/size/delete/${item.id}`;
        if (
            window.confirm('size : "' + item.sizeName + '" 삭제하시겠습니까?')
        ) {
            axios.delete(deleteUrl).then(Response => {
				if(Response.data === 1) {
					setCheck(!check);
				} else {
					window.alert('사용중인 항목입니다.');
				}
            });
        } else {
            window.alert('삭제되지 않았습니다');
        }
    };

    const editSize = () => {
        if (editSizeName.current.value !== '') {
            const editUrl = 'http://localhost:8080/size/update';
            if (
                window.confirm(
                    'Size : "' +
                        item.sizeName +
                        '" ==> "' +
                        editSizeName.current.value.toUpperCase() +
                        '" 수정하시겠습니까?'
                )
            ) {
                axios
                    .put(editUrl, {
                        ...item,
                        sizeName: editSizeName.current.value.toUpperCase(),
                    })
                    .then(() => {
                        setCheck(!check);
                    })
                    .then(() => (editSizeName.current.value = ''));
            } else {
                window.alert('수정되지 않았습니다');
            }
        }
    };

    return (
        <tr key={item.id}>
            <td className='size_name'>{item.sizeName}</td>
            <td className='size_edit'>
                <input
                    type='text'
                    className='form-control'
                    id='sizeName'
                    placeholder='사이즈 이름 입력'
                    required=''
                    ref={editSizeName}
                />
            </td>
            <td className='size_edit'>
                <button onClick={editSize} className='btn btn-secondary'>
                    Edit
                </button>
            </td>
            <td className='size_delete'>
                <button onClick={deleteSize} className='btn btn-secondary'>
                    DEL
                </button>
            </td>
        </tr>
    );
}

export default SizeList;
