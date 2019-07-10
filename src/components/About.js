import React from 'react';
import { removePropertiesDeep } from '@babel/types';

function About(props) {
  console.log(props);
  return <div className='App'>About page {props.match.params.id} </div>;
}

export default About;
