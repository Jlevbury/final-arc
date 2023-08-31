import { useState, useRef, useEffect } from "react";
import useKey from "../components/hooks/useKey";
import { TextField, Autocomplete, Paper } from "@mui/material";

export default function Search({ query, setQuery, games }) {
	const inputEl = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			inputEl.current.focus();
		}
	}, [isOpen]);

	useKey("Enter", function () {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	});

	return (
		<Autocomplete
			sx={{ backgroundColor: "#6CA6D9", opacity: 0.9 }}
			filterOptions={(x) => x}
			id='combo-box-demo'
			options={games}
			open={isOpen}
			onOpen={() => setIsOpen(true)}
			onClose={() => setIsOpen(false)}
			onChange={(e, games) => setQuery(games?.name || "")}
			onInputChange={(_, value) => setQuery(value)}
			getOptionLabel={(games) => games.name}
			openOnFocus
			PaperComponent={({ children }) => (
				<Paper style={{ background: "grey" }}>{children}</Paper>
			)}
			renderInput={(params) => (
				<TextField
					style={{ backgroundColor: "#6CA6D9", color: "#000000", opacity: 0.8 }}
					{...params}
					label='Search for a game'
					variant='outlined'
					inputRef={inputEl}
				/>
			)}
		/>
	);
}
