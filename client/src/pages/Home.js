import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';

function Home() {
  return (
    <div>
      <Header />
      <div>
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  )
}