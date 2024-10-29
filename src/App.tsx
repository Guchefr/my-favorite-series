import { useState, useEffect } from 'react';
import seriesList from './data';
import SeriesCard from './components/SeriesCard';
import Modal from './components/Modal';
import LoadingSpinner from './components/LoadingSpinner';
import logo from './components/images/logo.png';
import './App.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [isNightMode, setIsNightMode] = useState(false);
  const [emoji, setEmoji] = useState('🎥');
  const [loading, setLoading] = useState(true); // Loading state

  const filteredSeries = seriesList.filter((series) =>
    series.title.toLowerCase().includes(searchTerm.toLowerCase())
  
  );

  const shuffledSeries = shuffleArray(filteredSeries);

  const handleCardClick = (series) => {
    setSelectedSeries(series);
  };

  const closeModal = () => {
    setSelectedSeries(null);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    setEmoji(isNightMode ? '🎥' : '💡');
  };

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', backgroundColor: isNightMode ? '#050100' : '#d5d0cf' }}>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="app-logo" />
                <button className="toggle-button" onClick={toggleNightMode}>
                    {emoji}
                </button>
            </div>
      <div className="app">
        <input
          type="text"
          placeholder="Search for a series..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
          style={{ backgroundColor: isNightMode ? '#555' : '#fff', color: isNightMode ? '#fff' : '#000' }}
        />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="results-container">
            <div className="series-list">
              {filteredSeries.map((series) => (
                <div key={series.id} onClick={() => handleCardClick(series)}>
                  <SeriesCard
                    title={series.title}
                    creator={series.creator}
                    releaseDate={series.releaseDate}
                    genre={series.genre}
                    image={series.image}
                    description={''} // Hide description in the main list
                    trailerUrl={''} // Hide trailer in the main list
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSeries && (
          <Modal onClose={closeModal}>
            <SeriesCard
              title={selectedSeries.title}
              image={selectedSeries.image}
              description={selectedSeries.description}
              trailerUrl={selectedSeries.trailerUrl}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
