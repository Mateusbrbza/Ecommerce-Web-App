import React from 'react';

import { Header, LineChart } from '../../components';


const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 
    bg-white dark:bg-secondary-dark-bg rounded-rxl">
      <Header 
      category="Chart" 
      title="Taxa de inflação" 
      />
      <div className="2-full ">
        <LineChart />
      </div>
    </div>
  )
}

export default Line;