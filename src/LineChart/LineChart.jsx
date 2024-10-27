import React from 'react';
import { LineChart as Ls, Line,XAxis, YAxis  } from 'recharts';

const studentMarks = [
    { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 82 },
    { id: 2, name: "Bob", math: 78, physics: 74, chemistry: 80 },
    { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
    { id: 4, name: "David", math: 68, physics: 72, chemistry: 65 },
    { id: 5, name: "Ella", math: 74, physics: 70, chemistry: 78 },
    { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 89 },
    { id: 7, name: "Grace", math: 95, physics: 90, chemistry: 94 },
    { id: 8, name: "Hannah", math: 81, physics: 79, chemistry: 85 },
    { id: 9, name: "Ian", math: 76, physics: 72, chemistry: 77 },
    { id: 10, name: "Jack", math: 90, physics: 86, chemistry: 88 }
  ];
  

const LineChart = () => {
    return (
        <div>

            <Ls width={800} height={400} data={studentMarks}>
            <XAxis dataKey="name" />
            <YAxis/>
                <Line dataKey="physics" stroke="#8884d8" />
                <Line dataKey="math" stroke="#8884d8" />
            </Ls>
            
        </div>
    );
};

export default LineChart;