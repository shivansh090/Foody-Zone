import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResult';
import foodData from './utils/sample'


const App = () => {
  const [data, setdata] = useState(foodData);
  console.log(foodData);
  const [filteredData, setFilteredData] = useState(foodData);

  const searchFood = (event) => {
    const searchValue = event.target.value;
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      food.text.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredData(filter);
  };
  const clicked = (event) => {
    const item = event.target.id;
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(item.toLowerCase())
    )
    setFilteredData(filter);
  }
  return (
    <div>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src='logo.svg' alt='logo' />
          </div>
          <div className='search'>
            <input onChange={searchFood} type='text' placeholder='Search Food' />
          </div>
        </TopContainer>
        <FilterContainer>
          <button id='' onClick={clicked}>All</button>
          <button id='breakfast' onClick={clicked}>Breakfast</button>
          <button id='lunch' onClick={clicked}>Lunch</button>
          <button id='dinner' onClick={clicked}>Dinner</button>
        </FilterContainer>
        <SearchResult data={filteredData} />
      </Container>
    </div>
  );
}

const Container = styled.div`

`;

const TopContainer = styled.div`
  background-color: #323334;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 140px;
  .search input{
    width: 285px;
    height: 40px;
    padding: 0 5px ;
    border: 2px solid red;
    border-radius: 5px;
    font-size: 16px;
    background: transparent;
  }
`;

const FilterContainer = styled.div`
height:40px ;
background-color: #323334;
gap: 10px;
display: flex;
justify-content: center;
 button{
  height: 28px;
  background-color: #ff4343;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
 }
`;

export default App;
