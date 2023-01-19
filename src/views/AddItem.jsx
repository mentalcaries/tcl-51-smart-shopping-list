import { useState } from 'react';
import './AddItem.css';
import { addItem } from '../api/firebase';

export function AddItem() {
	const [itemData, setItemData] = useState({
		daysUntilNextPurchase: 0,
		itemName: '',
	});

	const [submitMessage, setSubmitMessage] = useState('');
	const token = localStorage.getItem('tcl-shopping-list-token');

	const setPurchaseDate = (event) => {
		setItemData({ ...itemData, daysUntilNextPurchase: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (itemData.itemName.length < 2 || itemData.daysUntilNextPurchase === 0) {
			setSubmitMessage('Please enter all fields');
			return;
		}
		addItem(token, itemData);

		setSubmitMessage('Item  saved!');
		setItemData({
			daysUntilNextPurchase: 0,
			itemName: '',
		});
		setTimeout(() => {
			setSubmitMessage('');
		}, 1500);
	};

	return (
		<form action="" className="add-item__form" onSubmit={handleSubmit}>
			<label htmlFor="item-name">Item Name:</label>
			<input
				type="text"
				name="item-name"
				id="item-name"
				value={itemData.name}
				onChange={(event) =>
					setItemData({ ...itemData, itemName: event.target.value })
				}
			/>
			<label className="add-item__label" htmlFor="item-frequency">
				How soon again will you buy this?
			</label>

			<label className="add-item__label" htmlFor="">
				<input
					type="radio"
					name="frequency"
					id=""
					value={7}
					onChange={setPurchaseDate}
				/>
				Soon
			</label>
			<label className="add-item__label" htmlFor="">
				<input
					type="radio"
					name="frequency"
					id=""
					value={14}
					onChange={setPurchaseDate}
				/>
				Kind of soon
			</label>
			<label className="add-item__label" htmlFor="">
				<input
					type="radio"
					name="frequency"
					id=""
					value={30}
					onChange={setPurchaseDate}
				/>
				Not soon
			</label>
			<input className="add-item__submit" type="submit" value="Add Item" />
			<p className="add-item__message">{submitMessage}</p>
		</form>
	);
}
