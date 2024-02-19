import { useState } from 'react'
import classes from '../modules/index.module.scss'
 

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('')
    

    const handleSearch = () => {
        onSearch(search)
    }
  
    return (
      <>
        <div className={classes['search-container']}>
            <input
                type='text'
                placeholder='Search Github username'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
      </>
    )
  }
  
  export default SearchBar