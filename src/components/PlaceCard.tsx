import React from 'react';
import { MapPin, Calendar, Check } from 'lucide-react';
import { HistoricalPlace } from '../data/places';
import { useAppDispatch } from '../hooks/redux';
import { toggleVisited } from '../store/placesSlice';

interface PlaceCardProps {
  place: HistoricalPlace;
  onClick: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, onClick }) => {
  const dispatch = useAppDispatch();

  const handleVisitedToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleVisited(place.id));
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <button
          onClick={handleVisitedToggle}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            place.visited
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-white/90 text-gray-600 hover:bg-green-500 hover:text-white'
          }`}
          aria-label={place.visited ? 'Mark as unvisited' : 'Mark as visited'}
        >
          <Check size={18} />
        </button>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {place.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {place.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            <span>{place.location}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>
              {place.yearBuilt < 0 ? `${Math.abs(place.yearBuilt)} BC` : `${place.yearBuilt} AD`}
            </span>
          </div>
        </div>
        
        {place.visited && (
          <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <Check size={14} className="mr-1" />
            Visited
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;