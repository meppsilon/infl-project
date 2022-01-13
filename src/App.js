import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuctionDetail from './AuctionDetail';
import CreateAuction from './CreateAuction';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/auctions/create" element={<CreateAuction />} />
        <Route path="/auctions/:auctionId" element={<AuctionDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
