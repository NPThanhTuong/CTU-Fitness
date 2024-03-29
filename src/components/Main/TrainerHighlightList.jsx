"use client";

import { useEffect, useState } from "react";
import CardItem from "../CardItem";

function TrainerHighlightList({ className }) {
	const [highlightTrainer, setHighlightTrainer] = useState([]);

	useEffect(() => {
		const getHighlightTrainer = async () => {
			const res = await fetch("/api/highlight-trainer?id=1&id=4&id=5", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();
			console.log(data);
			setHighlightTrainer(data);
		};
		getHighlightTrainer();
	}, []);

	return (
		<div className={className}>
			{highlightTrainer.map((trainer) => (
				<CardItem
					key={trainer.employee.id}
					id={trainer.employee.id}
					srcImg={`/images/${trainer.employee.avatar}`}
					title={trainer.employee.fullname}
					category={trainer.position.name}
					desc={trainer.position.description}
					linkFb="#"
					linkTwitter="#"
					linkIg="#"
				/>
			))}
		</div>
	);
}

export default TrainerHighlightList;
