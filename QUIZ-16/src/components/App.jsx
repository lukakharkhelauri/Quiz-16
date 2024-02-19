import { useState } from 'react'
import SearchBar from './SearchBar'
import Profile from './Profile'

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
      setSearchTerm(term);
      console.log('Search term:', term);
    };
  
    return (
      <div>
        <SearchBar onSearch={handleSearch} />
        {searchTerm !== '' && <Profile username={searchTerm} />}
      </div>
    );
  };

export default App
