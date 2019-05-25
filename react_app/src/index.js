import React from 'react';
import ReactDom from 'react-dom';
import List from './List';
import Counter from './Counter';
import Input from './Input';
import Parent from './Parent';
import Visible from './Visible';
import ProgressBar from './ProgressBar'
import MapList from './MapList';
import TwoWayBinding from './TwoWayBinding';

import { render } from 'react-dom';
import Message from './Message';

//ReactDom.render( < TwoWayBinding / > , document.getElementById('root'));
ReactDom.render( < MapList / > , document.getElementById('root'));
//ReactDom.render( < ProgressBar / > , document.getElementById('root'));
//ReactDom.render( < Visible / > , document.getElementById('root'));
//ReactDom.render( < Parent / > , document.getElementById('root'));
//ReactDom.render( < Input / > , document.getElementById('root'));
//ReactDom.render( < Counter / > , document.getElementById('root'));
//render( < Message / > , document.getElementById('root'));
//ReactDom.render( < List / > , document.getElementById('root'));