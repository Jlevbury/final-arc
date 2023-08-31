import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function GameCard({ name, description, image }) {
	return (
		<Card sx={{ maxWidth: 345, m: 1, background: "#6CA6D9", opacity: 0.75 }}>
			<CardMedia
				component='img'
				alt={name}
				height='140'
				image={image}
			/>
			<CardContent>
				<Typography
					sx={{ color: "black" }}
					gutterBottom
					variant='h5'
					component='div'
				>
					{name}
				</Typography>
				<Typography sx={{ color: "black" }}>{description}</Typography>
			</CardContent>
			<CardActions>
				{/* <Button size='small'>Share</Button>
				<Button size='small'>Learn More</Button> */}
			</CardActions>
		</Card>
	);
}
// import React from "react";

// export default function GameCard({ name, description, image }) {
// 	return (
// 		<div className='flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row'>
// 			<img
// 				className='h-96 w-full rounded-t-lg object-cover md:h-full md:w-48 md:rounded-none md:rounded-l-lg'
// 				src={image}
// 				alt={`${name} cover`}
// 			/>

// 			<div className='flex flex-col justify-start p-6'>
// 				<h5 className='mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50'>
// 					{name}
// 				</h5>
// 				<p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
// 					{description ? description : "No description available."}
// 				</p>
// 			</div>
// 		</div>
// 	);
// }
