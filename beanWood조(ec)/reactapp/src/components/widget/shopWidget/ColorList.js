import axios from 'axios';
import React, { useRef } from 'react';

function ColorList({ item, check, setCheck }) {
	const editColorName = useRef();

	const deleteColor = () => {
		const deleteUrl = `http://localhost:8080/color/delete/${item.id}`;
		if (
			window.confirm('color : "' + item.colorName + '" 삭제하시겠습니까?')
		) {
			axios.delete(deleteUrl).then(Response => {
				if (Response.data === 1) {
					setCheck(!check);
				} else {
					window.alert('사용중인 항목입니다.');
				}
			});
		} else {
			window.alert('삭제되지 않았습니다');
		}
	};

	const editColor = () => {
		if (editColorName.current.value !== '') {
			const editUrl = 'http://localhost:8080/color/update';
			if (
				window.confirm(
					'Color : "' +
					item.colorName +
					'" ==> "' +
					editColorName.current.value.toUpperCase() +
					'" 수정하시겠습니까?'
				)
			) {
				axios
					.put(editUrl, {
						...item,
						colorName: editColorName.current.value.toUpperCase(),
					})
					.then(() => {
						setCheck(!check);
					})
					.then(() => (editColorName.current.value = ''));
			} else {
				window.alert('수정되지 않았습니다');
			}
		}
	};

	return (
		<tr key={item.id}>
			<td className='color_name'>{item.colorName}</td>
			<td className='color_edit'>
				<input
					type='text'
					className='form-control'
					id='colorName'
					placeholder='컬러 이름 입력'
					required=''
					ref={editColorName}
				/>
			</td>
			<td className='color_edit'>
				<button onClick={editColor} className='btn btn-secondary'>
					Edit
				</button>
			</td>
			<td className='color_delete'>
				<button onClick={deleteColor} className='btn btn-secondary'>
					DEL
				</button>
			</td>
		</tr>
	);
}

export default ColorList;
