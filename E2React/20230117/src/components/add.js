import React from 'react';
import { useId, useState, useEffect } from 'react';

const Adds = () => {
    const [tasks, setTasks] = useState([]);

    const fnAdd = (event) => {
        event.preventDefault();
        const obj = event.target;
        // console.log(obj.fItem);
        // console.log(obj.fQty)
        // console.log(obj.fItem.value + ' / ' + obj.fQty.value);
        let data;
        data = [...tasks, { fItem: obj.fItem.value, fQty: obj.fQty.value }];
        setTasks(data);
        localStorage.setItem('items', JSON.stringify(data));
        // console.log(data);
        // console.log(tasks);
    }

    function fff(i) {
    }

    useEffect(() => {
         const store = JSON.parse(localStorage.getItem('items'));
      
         setTasks(store);
         console.log(store);
        // console.log(store);
        // let addTag = '';
        // if (store.length > 0) {
        //     store.map((product, index) => {
        //         addTag += <tr>
        //             <td>{product.item}</td>
        //             <td>{product.qty}</td>
        //             <td><button onClick={fff(index)}>Šalintti</button></td></tr>
        //     })
        // }
        // else {
        //     addTag = <td colspan="3"><p>Krepšelyje kol kas neturite jokių prekių.</p></td>;
        // }
        // document.querySelector('tbody').innerHTML = addTag;
        // console.log(addTag)

    }, []);





    return (
        <>
            {/* <Form data={{ tasks, setTasks }}/> */}
            <Form tasks={tasks} setTasks={setTasks} />
            <form className='row g-3' onSubmit={fnAdd}>
                <label>Prekė
                    <input type="text" name="fItem" />
                </label>
                <label>Kiekis
                    <input type="number" name="fQty" />
                </label>
                <button className='btn btn-primary'>Pridėti</button>
            </form>

            <table>
                <tbody>
                    {tasks.map((task, index) => 
                        <tr key={task.fItem + index}>
                            <td>{task.fItem}</td>
                            <td>{task.fQty}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}
export default Adds;