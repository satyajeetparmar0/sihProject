import React from "react";

const CulturalHeritage = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-orange-50 to-teal-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            Preserving Sikkim's Buddhist Heritage
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the rich cultural tapestry of Sikkim's monasteries, where ancient traditions meet modern preservation efforts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cultural Significance */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-orange-600 text-4xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Significance</h3>
            <p className="text-gray-600">
              Sikkim's monasteries are living museums of Buddhist art, architecture, and spiritual practices that have been preserved for centuries.
            </p>
          </div>

          {/* Digital Preservation */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-teal-600 text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Preservation</h3>
            <p className="text-gray-600">
              Through virtual tours and digital documentation, we ensure these sacred sites are accessible to future generations worldwide.
            </p>
          </div>

          {/* Educational Impact */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-orange-600 text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Educational Impact</h3>
            <p className="text-gray-600">
              Learn about Buddhist philosophy, Tibetan architecture, and the cultural practices that define Sikkim's unique heritage.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Platform Features for Cultural Preservation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🎥</span>
              </div>
              <h4 className="font-semibold text-gray-800">Virtual Tours</h4>
              <p className="text-sm text-gray-600">360° immersive experiences</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 text-2xl">📖</span>
              </div>
              <h4 className="font-semibold text-gray-800">Historical Records</h4>
              <p className="text-sm text-gray-600">Detailed monastery histories</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold text-gray-800">Art & Architecture</h4>
              <p className="text-sm text-gray-600">Cultural artifacts showcase</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal-600 text-2xl">🌍</span>
              </div>
              <h4 className="font-semibold text-gray-800">Global Access</h4>
              <p className="text-sm text-gray-600">Worldwide cultural sharing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalHeritage;

