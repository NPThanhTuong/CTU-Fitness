"use client";

import { useEffect, useState } from "react";
import TraningEquipmentItem from "./TraningEquipmentItem";

function TraningEquipmentHighlight({ className }) {
	const [equipment, setEquipment] = useState([]);

	useEffect(() => {
		const getHighlightEquipment = async () => {
			const res = await fetch("/api/highlight-equipment?id=3&id=7&id=11", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			setEquipment(data);
		};

		getHighlightEquipment();
	}, []);

	return (
		<div className={className}>
			{equipment.map((item) => (
				<TraningEquipmentItem
					key={item.id}
					id={item.id}
					title={item.name}
					image={item.EquipmentImage[0].pathName}
					muscles={item.equipmentOnMuscles}
				/>
			))}
		</div>
	);
}

export default TraningEquipmentHighlight;
