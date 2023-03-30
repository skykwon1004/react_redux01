import { useDispatch, useSelector } from "react-redux";
import { change, pluse } from "./store";

const Ccon = () => {
    // store에 있는 dark를 가져오는 작업
    const { dark, up } = useSelector(store => store);
    const set = useDispatch();
    //console.log(change, dark)

    return (
        <div>
            C: {dark ? '화이트' : '다크'} / {up}
            <button onClick={() => set(pluse(10))}> +1 </button>
            <button onClick={() => set(change())}>Toggle</button>
        </div>
    )
}

export default Ccon;