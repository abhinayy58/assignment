import React from 'react'
import { SearchOutlined} from '@ant-design/icons';
import '../style.css'
const Welcome = () => {
  return (
    <div className='welcome'>
      <div className='main_item'>
        <p>Hello Shahrukh 👋</p>
        <div className="main_container" style={{display:'flex'}}>
          <div>
        <SearchOutlined className='search_icon'/>
        </div>
        <input className='search_input' type="search" placeholder='Search' />
        </div>
      </div>
    </div>
  )
}

export default Welcome