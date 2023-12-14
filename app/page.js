import React from 'react';
import Hbtn from './comps/Hbtn';


export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between p-24"
      style={{
        //backgroundImage: 'url("/bg2.jpg")', 
        backgroundPosition: 'center',
      }}
    >
      <section>
        <Hbtn></Hbtn>
      </section>
      <section>
        <ul>
          <li><p>Get Started by editing</p></li>
          <li></li>
          <li>maybe</li>
          <li></li>
          <li></li>
          <li>wtf</li>
        </ul>
      </section>
    </div>
  );
}
