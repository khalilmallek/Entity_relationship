import React from "react";
import MovieCard from "./MovieCard";
import { Form } from "react-bootstrap";
import { starTab } from "../assets/Data";
import  {useState} from 'react'

const MovieList = ({ movieList }) => {
  const [search,setSearch] = useState('')
  const handleSearch = (event) => {setSearch(event.target.value)}
  const [starList, setStarList] = useState(starTab)
  const changeColor=(id) => {
    setStarList(starList.map(el => el.id ===id ? {icon:el.icon , isColored: !el.isColored, id : el.id} : el))
  }
  return (
    <div>
      <div className="d-flex justify-content-around mt-3">
        <Form.Control
          type="text"
          placeholder="Normal text"
          className="col-md-7"
          onChange = {handleSearch}
        />
        <div>
          {starList.map((el) => (
            <span className = {el.isColored ? 'star-colored':'star'} key={el.id} onClick ={()=>changeColor(el.id)}>
              {el.icon}</span>
          ))}
        </div>
      </div>
      <div className="row">
        {movieList.filter(movie => movie.title.toUpperCase().includes(search.toUpperCase()))
        .filter(movie=> movie.rate>= starList.filter(el=> el.isColored===true).length)
        .map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
