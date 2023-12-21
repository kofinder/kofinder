import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Monday',
    amt: 2400,
    date: Date.now()
  },
  {
    name: 'Tuesday',
    amt: 7800,
    date: Date.now() + 1
  },
  {
    name: 'Wednesday',
    amt: 5600,
    date: Date.now() + 2
  },
  {
    name: 'Thursday',
    amt: 14500,
    date: Date.now() + 3
  },
  {
    name: 'Friday',
    amt: 8600,
    date: Date.now() + 4
  },
  {
    name: 'Saturday',
    amt: 5000,
    date: Date.now() + 5
  },
  {
    name: 'Sunday',
    amt: 26000,
    date: Date.now() + 6
  },

];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="amt" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default Chart