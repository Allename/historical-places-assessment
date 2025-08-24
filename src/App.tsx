import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PlacesList from './pages/PlacesList';
import PlaceDetail from './pages/PlaceDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<PlacesList />} />
            <Route path="/place/:id" element={<PlaceDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;