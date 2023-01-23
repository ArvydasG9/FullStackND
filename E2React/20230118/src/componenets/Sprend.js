import React, { useEffect, useState } from "react";

const Sprend = () => {
    const APIurl = 'https://api.adviceslip.com/advice';
    const [advices, setAdvices] = useState([]);
    const [advCurr, setAdvCurr] = useState();

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem('advices'));
        setAdvices(store);
        // localStorage.setItem('advices', JSON.stringify(store));
        Advice();
    }, [])

    const Advice = () => {
        fetch(APIurl).then(resp => resp.json()).then(resp => {
            console.log(resp.slip.id + ': ' + resp.slip.advice)//xxxxx

            setAdvCurr(resp.slip.advice);

            let yra = false;

            advices.map((a, i) => {
                if (resp.slip.id === a.id) {
                    yra = true;
                    advices[i].count = advices[i].count + 1;
                    // const data = [...advices]
                    setAdvices(advices);
                    localStorage.setItem('advices', JSON.stringify(advices));
                    setAdvCurr(resp.slip.advice + ' (' + advices[i].count + ' kartus)');
                }
            })

            if (!yra) {
                yra = false;
                const data = [...advices, { id: resp.slip.id, count: 1, advice: resp.slip.advice }];
                setAdvices(data);
                localStorage.setItem('advices', JSON.stringify(data));
                setAdvCurr(resp.slip.advice + ' (1 kartą)');
            }


            // const data = [...advices, { id: resp.slip.id, count: 1, advice: resp.slip.advice }];
            // setAdvices(data);
            // localStorage.setItem('advices', JSON.stringify(data));
        });
    }

    return (
        <div>
            <button type="button" onClick={Advice}>Naujas</button>
            <div className="advince">
                <p>{advCurr}</p>
            </div>
        </div>
    );
}
export default Sprend