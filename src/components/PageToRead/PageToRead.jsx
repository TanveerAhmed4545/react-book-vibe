import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStored } from "../Utils/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer } from 'recharts';
// import React from 'react';



const PageToRead = () => {

    const allData = useLoaderData();
    // console.log(data);

    const [readData,setReadData] = useState([]);


    useEffect(() => {
        const storedBooks = getStored("readlist");
        // console.log(storedBooks);
    
        if (allData.length > 0) {
          const dataAll = [];
    
          for (const id of storedBooks) {
            const book = allData.find((d) => d.id === id);
    
            if (book) {
              dataAll.push(book);
            }
          }
          setReadData(dataAll);
        //   console.log(dataAll);
        }
      }, [allData]);

      console.log(readData);



    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


 
      
      const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };









    return (
        <div className="bg-[#13131308] p-5 lg:p-12 rounded-3xl mt-7 mb-5" style={{width:'100%' , height: '80vh'}}>
            {/* <h2>PageToRead  {readData.length}</h2> */}


 <ResponsiveContainer>
           
           
 <BarChart
      width={500}
      height={500}
      data={readData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>

 </ResponsiveContainer>








        </div>
    );
};

export default PageToRead;