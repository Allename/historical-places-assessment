import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Check, X } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { toggleVisited } from '../store/placesSlice';

const PlaceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const place = useAppSelector(state => 
    state.places.places.find(p => p.id === id)
  );

  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Place Not Found</h2>
          <p className="text-gray-600 mb-6">The historical place you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Places
          </button>
        </div>
      </div>
    );
  }

  const handleVisitedToggle = () => {
    dispatch(toggleVisited(place.id));
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={handleBack}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Places
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Visited Status Button */}
          <button
            onClick={handleVisitedToggle}
            className={`absolute top-6 right-6 px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-lg ${
              place.visited
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {place.visited ? (
              <>
                <Check className="inline mr-2" size={18} />
                Visited
              </>
            ) : (
              <>
                <X className="inline mr-2" size={18} />
                Mark as Visited
              </>
            )}
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{place.name}</h1>
            <div className="flex items-center text-white/90">
              <MapPin className="mr-2" size={20} />
              <span className="text-lg">{place.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Info Bar */}
          <div className="flex flex-wrap gap-6 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2" size={20} />
              <span>
                Built in {place.yearBuilt < 0 ? `${Math.abs(place.yearBuilt)} BC` : `${place.yearBuilt} AD`}
              </span>
            </div>
            
            {place.visited && (
              <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
                <Check className="mr-2" size={18} />
                <span className="font-medium">You've visited this place</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Place</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {place.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleVisitedToggle}
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                  place.visited
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {place.visited ? (
                  <>
                    <X className="inline mr-2" size={18} />
                    Mark as Unvisited
                  </>
                ) : (
                  <>
                    <Check className="inline mr-2" size={18} />
                    Mark as Visited
                  </>
                )}
              </button>
              
              <button
                onClick={handleBack}
                className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Explore More Places
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;