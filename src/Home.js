import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col">
    <h1>Welcome home!</h1>
    <Link to="/auctions/create">Create auction</Link>
    <Link to="/auctions/0x1">Auction #1</Link>
  </div>
);

export default Home;
