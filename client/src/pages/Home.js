import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Feed from '../components/Feed/Feed';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../components/RightSidebar/RightSidebar';

export default function Home() {
  return (
      <div>
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>

  )
}

