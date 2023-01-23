import React from 'react';
import { useState } from 'react';

const Main = () => {
    const [pvm, setPvm] = useState(21);
    const [sumBePvm, setSumBePvm] = useState(0);
    const [onlyPvm, setOnlyPvm] = useState(0);
    const [total, setTotal] = useState(0);

    const fnPvm = (e) => {
        let a = e.target.value;
        let b = sumBePvm;//Activ???
        let c = Math.round(b * a) / 100;//b * a / 100;
        let d = Math.round(b * (a / 100 + 1) * 100) / 100;//Activ???
        setPvm(a);
        setSumBePvm(b);
        setOnlyPvm(c);
        setTotal(d);
    }

    const fnSumBePvm = (e) => {
        let b = e.target.value;
        let a = pvm;
        let c = Math.round(b * a) / 100;
        let d = Math.round(b * (a / 100 + 1) * 100) / 100;
        setSumBePvm(b);
        setOnlyPvm(c);
        setTotal(d);
        console.log('??? -> b = e.target.value: ' + e.target.value + '; sumBePvm: ' + sumBePvm)//????
    }

    const fnTotal = (e) => {
        let d = e.target.value;
        let a = pvm;
        let b = Math.round((d / (a / 100 + 1)) * 100) / 100;
        let c = Math.round(b * a) / 100;
        //    setPvm(a);
        setSumBePvm(b);
        setOnlyPvm(c);
        setTotal(d);
    }

    return (
        
        <div className='rezult'>
            <main>
                <form>
                    <div className='col' style={{ alignItems: 'flex-end' }}>
                        <label>PVM tarifas</label>
                        <label>Suma (be PVM)</label>
                        <label>PVM suma</label>
                        <label>Bendra suma (su PVM) </label>
                    </div>
                    <div className='col'>
                        <select onChange={fnPvm} name="vat_percent" id="pvm">
                            <option value="21">21%</option>
                            <option value="9">9%</option>
                            <option value="5">5%</option>
                        </select>
                        <input onChange={fnSumBePvm} type="text" id="sumBePvm" value={sumBePvm} />
                        <input type="text" id="sumPvm" disabled="disabled" value={onlyPvm} />
                        <input onChange={fnTotal} type="text" id="total" value={total} />
                    </div>
                </form>
                <div className='foot'>Įveskite sumą be PVM arba bendrą sumą (su PVM).</div>
            </main>            
        </div>
    );

}


// const handleForm = (e) => {
//     e.preventDefault();
//     if (document.querySelector('#text').value.trim().length === 0) return;
//     setTasks([...tasks, { name: document.querySelector('#text').value, done: false }]);
//     document.querySelector('#text').value = '';
// }

// const handleDone = (e, index) => {
//     tasks[index].done = !tasks[index].done;
//     setTasks([...tasks]);
// }



// const Main = () => {
//     const html =
//         <main>
//             <form>

//                 <div className='col' style={{ alignItems: 'flex-end' }}>
//                     <label>PVM tarifas</label>
//                     <label>Suma (be PVM)</label>
//                     <label>PVM suma</label>
//                     <label>Bendra suma (su PVM) </label>
//                 </div>
//                 <div className='col'>
//                     <select onChange={f} name="vat_percent" id="vat_percent">
//                         <option value="21">21%</option>
//                         <option value="9">9%</option>
//                         <option value="5">5%</option>
//                     </select> 
//                     <input onChange={f} type="text" id="sumBePvm" defaultValue={2} />
//                     <input type="text" id="sumPvm" defaultValue={''} disabled="disabled" />
//                     <input onChange={f} type="text" id="total" defaultValue={0} />
//                 </div>

//             </form>

//             <div>Įveskite sumą be PVM arba bendrą sumą (su PVM).</div>
//         </main>
//     return html;
// }

export default Main;