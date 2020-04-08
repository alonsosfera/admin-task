import React from 'react';
import Aux from 'hoc/aux';
import Header from './header';

const layout = ( props ) => (
  <Aux>
    <Header/>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;