import { useState } from "react"



const Counter = () => {

    const [name, setName] = useState<string>('');

    const [namsinh, setNamsinh] = useState<number>(0);

    const [tuoi, setuoi] = useState<number>(0);

    const [display, setDiplay] = useState(false);




    const handeleSubmit = () => {
        setuoi(new Date().getFullYear() - namsinh);
        setDiplay(true);
    }


    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} />

            <input type="text" onChange={(e) => setNamsinh(+e.target.value)} />
            {display ? <h1>Tên của tôi là {name}  tuoi cua toi là {tuoi}</h1> : <></>}



            <button type="button" onClick={handeleSubmit}>Send</button>

        </div>
    )
}

export default Counter