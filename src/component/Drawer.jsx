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
                <li
                 onClick={() => {
                  onClose("as")
                }}> 
                 About Us
                 </li>
                <li onClick={() => {
                  onClose("vision")
                }} >Our Vision</li>
                <li 
                 onClick={() => {
                  onClose("leader")
                }}
                >Leaders</li>
                <li
                onClick={() => {
                  onClose("intra")
                }}
                >Intra In Numbers</li>
                <li
                 onClick={() => {
                  onClose("prod")
                }}
                >Products</li>
                <li 
                 onClick={() => {
                  onClose("ind")
                }}
                >Industries</li>
                <li
                 onClick={() => {
                  onClose("cap")
                }}
                >Capabilities</li>
                <li
                 onClick={() => {
                  onClose("news")
                }}
                >News</li>
                <li
                 onClick={() => {
                  onClose("career")
                }}
                >Carrers</li>
                <li
                 onClick={() => {
                  onClose("contact")
                }}
                >Contacts</li>
            </ul>
        </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}