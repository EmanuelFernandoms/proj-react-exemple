import React, {useState, useEffect} from "react";

function Relogio() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        //atualiza o relógio 1 vez por segundo
        const intervaloID = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervaloID);
    }, []);

    return (
        <div>
            <h1>Relógio</h1>
            <p>{time}</p>
        </div>
    );
}

export default Relogio