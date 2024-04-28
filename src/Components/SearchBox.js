import React from 'react'
function SearchBox({searchValue, funcSetSearch}) {

function handleSearch(e){
    funcSetSearch(e.target.value)
}

    return (<>
        <input 
            type="text" 
            className="Searchcontent"  
            placeholder="Search Your Recents Transactions..."
            value={searchValue}
            onChange={handleSearch}
        />
    </>
 )
}

export default SearchBox;