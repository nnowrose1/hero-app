import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const RatingsChart = ({updatedRating}) => {
    return (
           <div className="w-full h-[300px] pb-15 pt-5">
      <h3 className='mb-6 px-6 font-semibold text-2xl text-[#001931]'>Ratings</h3>
      <ResponsiveContainer width="100%" height="100%">
    <BarChart data={updatedRating} layout='vertical'>
        <XAxis type='number'></XAxis>
        <YAxis dataKey="name" type='category'></YAxis>
        <Bar dataKey="count" fill='orange' width={20}></Bar>
    </BarChart>
      </ResponsiveContainer>
    </div>
    );
};

export default RatingsChart;