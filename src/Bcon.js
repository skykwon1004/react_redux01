import { useDispatch, useSelector } from "react-redux";
import Ccon from "./Ccon"
import { onDelete, onCreate } from "./store";

const Bcon = () => {
    const { dataList } = useSelector(s => s);
    const setList = useDispatch();
    return (
        <>
            <div>
                {
                    dataList.map(it => <li onClick={() => setList(onDelete(it.id))}>{it.title}</li>)
                }
            </div>
            <button onClick={() => setList(onDelete())}>삭제</button>
            <button onClick={() => setList(onCreate({
                id: 4,
                title: "04",
                content: "content04"
            }

            ))}>추가</button>
            <Ccon />
        </>
    )
}

export default Bcon;