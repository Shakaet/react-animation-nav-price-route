import React from 'react';
import PropTypes from 'prop-types';


const Link = ({route}) => {
    return (
       
      <>

        

        <div className=' bg-yellow-400'>

               

            <li className='mr-10 hover:bg-red-500 rounded  bg-yellow-400'><a href={route.path}>{route.name}</a></li>
            
        </div>

        </>
    );
};

Link.propTypes = {
    
    route: PropTypes.object

}

export default Link;