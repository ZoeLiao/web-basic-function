# React


## react-lifecycl-mehods-diagram
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### constructor:
- Do not:
    - use setState
    - use fetch, ajax etc

### render:
- return jsx, array, number, string, bool
- Do not:
    - use this.setState
    - use fetch, ajax etc

### componentDidMount
- can fetch data, draw picture
- can add async to make it become async function

### componentDidUpdate(prevPros, prevState, snapshot)
- should use condiction to avoid endless update

### componentWillUnmount
- to remove listener if the component is removed 

### getDerivedStateFromProps(nextProp, prevStat)
- if props or state if change
- Do not:
    - use asyc

### shouldComponentUpdate(nextProps, nextState)
- control the update timing
- return frue/false
- pure component has shouldComponentUpdate

## Other

### Fragment
- equal return []

### getDerivedStateFromError
- haddle error

### createPortal
- render any component at design component

### context API
- import {createContext} from 'react'; create; export
- Provider, Consumer
