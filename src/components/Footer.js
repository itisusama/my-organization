import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-light text-center text-white' >
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        demo © 2024 ,
        <a className='text-white' href='https://mdbootstrap.com/'>
           All Rights Reserved
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
