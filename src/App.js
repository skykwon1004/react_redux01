import Bcon from "./Bcon";
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Dark = styled.div`
background: #333;
color: #fff;

&.on {
  background: #fff;
  color: #333;
}
`
const App = () => {
    const { dark } = useSelector(store => store)
    return (
        <Dark className={dark ? 'on' : ''}>
            <Bcon />
        </Dark>
    )
}

export default App;