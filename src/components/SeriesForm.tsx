import { useState } from "react";

interface SeriesFormProps {
	onAddSeries: (newSeries: {
		title: string;
		creator?: string;
		releaseDate?: string;
		genre?: string;
		image: string;
		description?: string;
		trailerUrl?: string;
	}) => void;
	isNightMode: boolean;
}

const SeriesForm: React.FC<SeriesFormProps> = ({
	onAddSeries,
	isNightMode,
}) => {
	const [title, setTitle] = useState("");
	const [creator, setCreator] = useState("");
	const [releaseDate, setReleaseDate] = useState("");
	const [genre, setGenre] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [trailerUrl, setTrailerUrl] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onAddSeries({
			title,
			creator,
			releaseDate,
			genre,
			image,
			description,
			trailerUrl,
		});
		setTitle("");
		setCreator("");
		setReleaseDate("");
		setGenre("");
		setImage("");
		setDescription("");
		setTrailerUrl("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="series-form"
			style={{ backgroundColor: isNightMode ? "#050100" : "#d5d0cf" }}
		>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="Creator"
				value={creator}
				onChange={(e) => setCreator(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Release Date"
				value={releaseDate}
				onChange={(e) => setReleaseDate(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Genre"
				value={genre}
				onChange={(e) => setGenre(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Image URL"
				value={image}
				onChange={(e) => setImage(e.target.value)}
				required
			/>
			<input
				type="text"
				placeholder="Trailer URL"
				value={trailerUrl}
				onChange={(e) => setTrailerUrl(e.target.value)}
			/>
			<textarea
				placeholder="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button
				type="submit"
				style={{
					backgroundColor: isNightMode ? "#007bff" : "#007bff",
					color: "#fff",
				}}
			>
				Add Series
			</button>
		</form>
	);
};

export default SeriesForm;
