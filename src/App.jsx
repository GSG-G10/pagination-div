import { Pagination , Layout, Menu } from 'antd';
import 'antd/dist/antd.css'
import React, { useEffect, useState } from 'react';
import API from './components/API';
import Card from './components/Card';


function App() {

const [page, setPage] = useState(1)
const [data, setData] = useState([])

  const onChange = (pageNumber) => {
    setPage(pageNumber)
  }
  
  useEffect(() => {
      API(page).then(res=>{
        setData([{
          imgs: res.results
        }])

        // setData([...data, {
        //   id: page,
        //   imgs: res.results
        // }])
      })
  }, [page])

  return (
    <div>
      <div className="wrapper">
        {
          data.map((img, i)=>{
            return <Card img={img}  key={i} />
          })
        }
      </div>
    <div className="pagination">  
      <Pagination showQuickJumper defaultCurrent={10} total={100} onChange={onChange} />
      </div>
    </div>
  )
}

export default App
