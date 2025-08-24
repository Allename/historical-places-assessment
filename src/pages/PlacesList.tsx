import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { useAppSelector } from '../hooks/redux';
import PlaceCard from '../components/PlaceCard';
import RandomSuggestion from '../components/RandomSuggestion';

const PlacesList: React.FC = () => {
  const navigate = useNavigate();
  const places = useAppSelector(state => state.places.places);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterVisited, setFilterVisited] = useState<'all' | 'visited' | 'unvisited'>('all');

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterVisited === 'all' ||
                         (filterVisited === 'visited' && place.visited) ||
                         (filterVisited === 'unvisited' && !place.visited);

    return matchesSearch && matchesFilter;
  });

  const handlePlaceClick = (placeId: string) => {
    navigate(`/place/${placeId}`);
  };

  const visitedCount = places.filter(place => place.visited).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Historical Places Explorer
          </h1>
          <p className="text-lg text-gray-600">
            Discover amazing historical sites around the world
          </p>
        </div>

        {/* Random Suggestion */}
        <RandomSuggestion />

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search places or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={filterVisited}
                onChange={(e) => setFilterVisited(e.target.value as 'all' | 'visited' | 'unvisited')}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="all">All Places</option>
                <option value="visited">Visited ({visitedCount})</option>
                <option value="unvisited">Not Visited ({places.length - visitedCount})</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPlaces.length} of {places.length} places
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Places Grid */}
        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
                onClick={() => handlePlaceClick(place.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No places found matching your criteria.</p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlacesList;