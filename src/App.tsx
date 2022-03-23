import React, { ReactElement } from 'react';



//import Component
import Home from './home';


export default class APP extends React.Component<{}> {
  public constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    return  (
      <div className="App">
        <Home />
      
      </div>
    );
  }
}


