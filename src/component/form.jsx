import * as React from 'react';
import Dialog from '@mui/material/Dialog';


export default function FormDialog({handleClose, open}) {

  return (
       <Dialog onClose={handleClose} open={open}>
         <div style={{ padding: "20px", paddingLeft: "100px" }}>
         <div style={{ background: "",width: "50%", marginTop: "40px" }}>
              <p style={{ color: "#15ae66", marginBottom: "2px", fontSize:"16px", fontWeight: 'bold' }}> NEWS </p>
              <p style={{ color: "#03254c", marginTop: "5px", fontSize:"24px", fontWeight: 'bold' }}>Check Our Latest News</p>
                <div style={{ width: "100px", borderBottom: '2px solid #15ae66', }}></div>
                <div style={{ width: "200px", borderBottom: '2px solid #03254c', marginTop: "10px" }}>
                </div>
            </div>
                    <input placeholder='Name' type="text" className='input' />
                    <input placeholder='Email' type="email" className='input' />
                    <input placeholder='Phone Number' type="text" className='input' />
                    <input placeholder='Acadmic Qualification' type="text" className='input' />
                    <input placeholder='Major' type="text" className='input' />
                    <input  placeholder='Years of Experience' type="text" className='input' />
                    <textarea name="d" id="d" placeholder='Message' className='textarea' cols="30" rows="10"></textarea>

                    <button style={{ width: "160px", marginTop: "20px", height: '40px', border: "1px solid #03254c", background: "white" }}>Apply</button>
         </div>
       </Dialog>
  );
}