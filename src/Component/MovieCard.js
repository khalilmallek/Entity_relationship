import React from "react";
import { Card , Button} from "react-bootstrap";
import { Link , } from "react-router-dom";

const MovieCard = ({movie}) => {
  return (
    <div className="col-md-4 mt-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title> {movie.title} </Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <p className = 'gold'> {''.padStart(movie.rate,'⭐')} </p>
          <Link to = {`/watch/${movie.title}`}> <Button variant="primary">watch movie</Button>  </Link> 
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
