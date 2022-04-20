import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/Filters_context'
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';

const Sort = () => {
  const {filter_products, sort, windowWidth, updateSort, openModal, products, updateFilters, filters: {category}} = useFilterContext()
  const allCategories = ['all', ...new Set(products.map((item) => item.categories.main))];

  if(windowWidth >= 768){
    return (
      <Container>
          <div className="all-categories">
            {allCategories.map((item, i) => {
              return (
                <button key={i} onClick={updateFilters} name="category" className={`${category === item ? 'category-btn active' : 'category-btn'}`}>{item}</button>
              )
            })}
          </div>
          <form>
              <div className="sort-container">
                <p>{filter_products.length} {filter_products.length === 1 ? 'Product' : 'Products'} found</p>
                <div className="form-control">
                  <label htmlFor="sort">Sort by: </label>
                  <select name="sort" id="sort" value={sort} onChange={updateSort}>
                    <option value="price-lowest">Price: low to high</option>
                    <option value="price-highest">Price: high to low</option>
                    <option value="name-az">Name: A-Z</option>
                  </select>
                </div>
              </div>
          </form>
      </Container>
    )
  }

  if(windowWidth < 768){
    return (
      <Container>
       <div className="all-categories">
        {allCategories.map((item, i) => {
          return (
            <button key={i} onClick={updateFilters} name="category" className={`${category === item ? 'category-btn active-small' : 'category-btn'}`}>{item}</button>
          )
        })}
        </div>
        <div className="underline"></div>
        <div className="sort-container">
          <button className="filter-btn" onClick={openModal}>Filters<FilterAltSharpIcon className="filter-icon"/></button>
          <form className="small-two">
            <label htmlFor="sort">Sort by: </label>
            <select name="sort" id="sort" value={sort} onChange={updateSort}>
              <option value="price-lowest">Price: low to high</option>
              <option value="price-highest">Price: high to low</option>
              <option value="name-az">Name: A-Z</option>
            </select>
          </form>
        </div>
      </Container>
    )
  }
}

const Container = styled.div `
  .all-categories {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px){
    .all-categories{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 1em 0;
    }
    .active-small{
      color: var(--clr-cyan-dark) !important;
    }
  }
  
  .category-btn {
    background-color: transparent;
    margin: 0.5em 0;
    color: var(--clr-cyan-v-dark);
    font-weight: 700;
    border: none;
    border-bottom: 2px solid transparent;
  }

  .small-two {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }

  select {
    background-color: transparent;
    border: none;
    outline: 0;
  }

  .active {
    border-bottom: 2px solid var(--clr-cyan-dark);
  }

  .sort-container{ 
    display: flex;
    justify-content: space-between;
    margin: 0.7em 0;
  }

  .filter-btn {
    display: flex;
    width: 50%;
    align-items: center;
    background-color: transparent;
    border: 0;
  }

  .filter-icon {
    font-size: 1rem;
    margin-left: 0.25em;
  }
`

export default Sort