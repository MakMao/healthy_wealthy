import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/Filters_context'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {formatPrice} from '../utils/currency'


const Filters = () => {
  const {updateFilters, setMain, clearFilters, brands,  windowWidth, filters:{search, max_price, price, min_price, stock, discount, review}}= useFilterContext()

  const allRatings = Array.from({ length: 4 }, (_, index) => {
    return (
      index + 1 <= 5 &&
      Array.from({ length: 5 }, (_, i) => {
        return i + 1 < index + 2 ? (
          <StarIcon key={index + i} className="full-star"/>
        ) : (
          <StarBorderIcon key={index + i} className="empty-star"/>
        );
      })
    );
  });


  return (
    <Container>
        <div onSubmit={e => e.preventDefault()} className="content">
          <form>
            {windowWidth >= 768 && (<div>
              <input type="text" name="search" placeholder="Search.." value={search} onChange={updateFilters} className="search-input"/>
            </div>)}

              <div className="form-control">
                <h5>Brands</h5>
                <div className="brands-container">
                  {brands.map((brand, i) => {
                    return (
                      <div key={i} className="flex-div">
                        <label className="first-item" htmlFor={brand.name}>{brand.name}</label>
                        <input type="checkbox" name="brand" checked={brand.checked} onChange={updateFilters} />
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="form-control">
                <h5>Reviews</h5>
                {allRatings.map((item, i) => {
                  return (
                    <div key={i} className="review-container" onClick={() => allRatings[setMain(i)]} >
                       <div>{item}</div>
                       <button className={`${item === allRatings[review - 1] ? 'review-btn active' : 'review-btn'}`} value={i + 1} onClick={updateFilters} name="review"> &amp; Up</button>
                    </div>
                  );
                })}
              </div>

            <div className="form-control">
              <h5>Price</h5>
              <p className="price">{formatPrice(price)}</p>
              <input className="slider-input" type="range" name="price" id="" onChange={updateFilters} min={min_price} max={max_price} value={price}/>
            </div>

            <div className="flex-div">
              <label htmlFor="discount" className="first-item">Discount</label>
              <input type="checkbox" name="discount" onChange={updateFilters} checked={discount} />
            </div>

            <div className="flex-div">
              <label htmlFor="stock" className="first-item">In Stock Only</label>
              <input type="checkbox" name="stock" onChange={updateFilters} checked={stock} />
            </div>

          </form>
          <button className="btn form-control" onClick={clearFilters}>Clear Filters</button>
        </div>
    </Container>
  )
}

const Container = styled.div `
  h5 {
    margin-bottom: 0.4em;
  }

  .form-control {
    margin: 2em 0;
  }

  .search-input{
    height: 2em;
    border: none;
    box-shadow: 0 0 2px var(--clr-cyan-dark);
  }

  .review-container {
    display: flex;
    align-items: center;
  }

  .first-item {
    order: 1;
    margin-top: 0.4em;
  }

  input[type=checkbox]{
    width: 18px; 
    height: 18px; 
    margin-right: 10px;
    margin-bottom: 0.2em;
  }

  .flex-div {
    display: flex;
    align-items: center;
  }

  .review-btn {
    background-color: transparent;
    border: none;
    margin-left: 10px;
    margin-top: 0;
    border-bottom: 2px solid transparent;
    font-weight: 700;
    &:hover {
      border-bottom: 2px solid var(--clr-cyan-dark);
    }
  }

  .slider-input{
    width: 70%;
    display: block;
    padding: 0;
  }

  .category-btn {
    background-color: transparent;
    margin: 0.5em 0;
    font-weight: 700;
    border: none;
    border-bottom: 2px solid transparent;
  }

  .active {
    border-bottom: 2px solid var(--clr-cyan-dark);
  }

  .full-star, .empty-star {
    color: var(--clr-cyan-dark);
  }

`


export default Filters