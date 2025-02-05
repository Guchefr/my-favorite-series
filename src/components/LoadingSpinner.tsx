const LoadingSpinner: React.FC = () => {
	return (
		<div className="spinner-container">
			<iframe
				src="https://giphy.com/embed/MgRKCBGvlpqTENUzWk"
				className="spinner"
				title="Loading..."
				frameBorder="0"
				width="600"
				height="600"
			/>
		</div>
	);
};

export default LoadingSpinner;
