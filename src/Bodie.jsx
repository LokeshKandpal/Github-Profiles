import { useEffect, useState } from "react";
import { Search, ExternalLink } from "lucide-react";

function Bodie() {
  const [Profile, setProfile] = useState([]);
  const [numberofProfile, setnumberofProfile] = useState(''); // Fixed: empty string instead of undefined
  const [isLoading, setIsLoading] = useState(false);

  async function generateProfile(count) {
    setIsLoading(true);
    const randoms = Math.floor(1 + Math.random() * 10000);
    let response = await fetch(`https://api.github.com/users?since=${randoms}&per_page=${count}`);
    let data = await response.json();
    setProfile(data);
    setIsLoading(false);
  }

  useEffect(() => {
    generateProfile(13);
  }, []);

  return (
    <main 
      className="min-h-screen bg-gray-50 py-8" 
      style={{
        fontFamily: 'Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Search Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative">
              <input 
                type="number" 
                className="w-full sm:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-gray-900"
                placeholder="Enter number of profiles" 
                value={numberofProfile}
                onChange={(e) => setnumberofProfile(e.target.value)} 
                min="1"
                max="100"
              />
            </div>
            <button 
              onClick={() => generateProfile(numberofProfile)}
              disabled={isLoading}
              className="px-6 py-3 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-sm"
            >
              <Search className="w-4 h-4" />
              {isLoading ? 'Loading...' : 'Search Profiles'}
            </button>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Profile.map((val) => (
            <div key={val.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4">
                <img 
                  src={val.avatar_url} 
                  alt={val.login}
                  className="w-full h-full rounded-full object-cover border-2 border-gray-100"
                />
              </div>
              <h3 className="text-gray-900 font-medium mb-3 truncate w-full" title={val.login}>
                {val.login}
              </h3>
              <a 
                href={val.html_url} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-3 h-3" />
                View Profile
              </a>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && Profile.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No profiles found. Try searching for some profiles!</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Bodie;