import React from 'react';
import { Shuffle, X, MapPin } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { generateRandomSuggestion, clearRandomSuggestion } from '../store/placesSlice';
import { useNavigate } from 'react-router-dom';

const RandomSuggestion: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const randomSuggestion = useAppSelector(state => state.places.randomSuggestion);
  const visitedCount = useAppSelector(state => 
    state.places.places.filter(place => place.visited).length
  );
  const totalPlaces = useAppSelector(state => state.places.places.length);

  const handleGenerateRandom = () => {
    dispatch(generateRandomSuggestion());
  };

  const handleCloseSuggestion = () => {
    dispatch(clearRandomSuggestion());
  };

  const handleViewDetails = () => {
    if (randomSuggestion) {
      navigate(`/place/${randomSuggestion.id}`);
      dispatch(clearRandomSuggestion());
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Discover Something New</h2>
        <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {visitedCount}/{totalPlaces} visited
        </div>
      </div>
      
      {!randomSuggestion ? (
        <div className="text-center py-6">
          <p className="text-gray-600 mb-4">
            Not sure where to explore next? Let us suggest a historical place for you!
          </p>
          <button
            onClick={handleGenerateRandom}
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <Shuffle className="mr-2" size={20} />
            Get Random Suggestion
          </button>
        </div>
      ) : (
        <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
          <button
            onClick={handleCloseSuggestion}
            className="absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close suggestion"
          >
            <X size={18} />
          </button>
          
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={randomSuggestion.image}
              alt={randomSuggestion.name}
              className="w-full md:w-32 h-24 object-cover rounded-lg"
            />
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {randomSuggestion.name}
              </h3>
              
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPin size={14} className="mr-1" />
                <span>{randomSuggestion.location}</span>
              </div>
              
              <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                {randomSuggestion.description}
              </p>
              
              <div className="flex gap-2">
                <button
                  onClick={handleViewDetails}
                  className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={handleGenerateRandom}
                  className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 transition-colors"
                >
                  Try Another
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomSuggestion;