import React from 'react';

const SearchBar=()=>{
    function search(formData) {
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
      }
      return (
        <form action={search}>
          <input name="search" />
          <button type="submit">Search</button>
        </form>
      );
    }





export default SearchBar;

