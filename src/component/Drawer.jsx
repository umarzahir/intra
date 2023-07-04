import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import {CgClose} from "react-icons/cg"

export default function MyDrawer({open, onClose, }) {
  return (
    <div>
        <React.Fragment>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={onClose}
          >
            <div className='menu'>
            <CgClose onClick={() => onClose()} fontSize={36} style={{ marginLeft: "auto", cursor: "pointer" }} />
            <ul >
                <li>About Us</li>
                <li>Our Vision</li>
                <li>Leaders</li>
                <li>Intra In Numbers</li>
                <li>Products</li>
                <li>Industries</li>
                <li>Capabilities</li>
                <li>News</li>
                <li>carrers</li>
                <li>Contacts</li>
            </ul>
        </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}