import { useCallback, useEffect, useState } from "react";
import {
	OutlinedInput,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	Checkbox,
	Box,
} from "@mui/material";
import "../App.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
		className: "customDropdownMenu",
	},
};

function Filter({ setSelectFilterQuery, fetchTerm, KEY, sx }) {
	const [isLoading, setIsLoading] = useState(false);
	const [, setError] = useState("");
	const [termList, setTermList] = useState([]);
	const [selectedTerm, setSelectedTerm] = useState([]);

  const fetchData = useCallback(async () => {
    if (!KEY) return;
    try {
      setIsLoading(true);
      setError('');
      const res = await fetch(
        `https://api.rawg.io/api/${fetchTerm}?key=${KEY}`
      );


			if (!res.ok)
				throw new Error(`Something went wrong with fetching ${fetchTerm}`);

			const data = await res.json();
			if (data.count === 0) throw new Error(`${fetchTerm} not found`);

			setTermList(data.results);
			setIsLoading(false);
			setError("");
		} catch (err) {
			console.log(err);
			if (err.name !== "AbortError") setError(err.message);
		} finally {
			setIsLoading(false);
		}
	}, [fetchTerm, KEY]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const handleChange = (e) => {
		setSelectedTerm(e.target.value);
		const query = e.target.value.map((item) => item.id).join(",");
		setSelectFilterQuery(query);
	};

	const handleClearSelection = () => {
		setSelectedTerm([]);
		setSelectFilterQuery("");
	};

	if (isLoading) {
		return null;
	}

	return (
		<Box sx={sx}>
			<FormControl sx={{ m: 1, width: 300, background: "#054674" }}>
				<InputLabel htmlFor='component-outlined'>
					Filter by {fetchTerm}
				</InputLabel>
				{/* <InputLabel id='demo-multiple-checkbox-label'>
					Filter by {fetchTerm}
				</InputLabel> */}
				<Select
					sx={{
						width: 300,
						background: "#2f80ed",
						opacity: 0.75,
						color: "#000000",
					}}
					className='search'
					labelId='demo-multiple-checkbox-label'
					id='demo-multiple-checkbox'
					multiple
					value={selectedTerm}
					onChange={handleChange}
					input={<OutlinedInput label='Tag' />}
					MenuProps={MenuProps}
				>
					{termList.map((item) => (
						<MenuItem
							sx={{ background: "#2f80ed", opacity: 0.75, color: "#000000" }}
							key={item.id}
							value={item}
						>
							<Checkbox checked={selectedTerm.some((e) => e.id === item.id)} />
							{item.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<button onClick={handleClearSelection}>Clear All</button>
		</Box>
	);
}

export default Filter;
