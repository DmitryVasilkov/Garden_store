import React from 'react';
import { useSelector } from 'react-redux';
import s from './index.module.css';
import ProductCard from '../../components/ProductCard';
import Wrapper from '../../components/UI/Wrapper';
import Title from '../../components/UI/Title';

const SearchPage = () => {
  const searchResults = useSelector(state => state.search.searchResults);
  const productsResults = useSelector(state => state.products);

  const listId = localStorage.getItem('listId');
  const Id = useSelector(state => state.search.selectedItemId);
  // console.log('id', Id);
  const buttonClicked = useSelector(state => state.search.buttonClicked);

  const searchResultsJSON = localStorage.getItem('searchResults');
  const parsedSearchResults = JSON.parse(searchResultsJSON);

  

  return (
    <Wrapper>
      <Title>Search</Title>
      <div className={s.searchContainer}>
        {
          (buttonClicked)
          ? (searchResults.map((el) => <ProductCard key={el.id} {...el} />))
          : (listId !== null)
          ? (productsResults.filter((el) => Number(listId) === el.id).map((el) => <ProductCard key={el.id} {...el} />))
          : 
          (parsedSearchResults.map((el) => <ProductCard key={el.id} {...el} />))
          }
      </div>
    </Wrapper>
  );
};

export default SearchPage;
