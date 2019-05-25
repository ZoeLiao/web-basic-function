import React from 'react';
import ReactDom from 'react-dom';
import List from './List';
import Counter from './Counter';
import Input from './Input';
import Parent from './Parent';

import { render } from 'react-dom';
import Message from './Message';

ReactDom.render( < Parent / > , document.getElementById('root'));
//ReactDom.render( < Input / > , document.getElementById('root'));
//ReactDom.render( < Counter / > , document.getElementById('root'));
//render( < Message / > , document.getElementById('root'));
//ReactDom.render( < List / > , document.getElementById('root'));