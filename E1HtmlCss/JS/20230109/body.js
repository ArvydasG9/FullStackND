// Body faile sukurkite asinchroninę funkciją kuri paimtų tekstą iš šio adreso:
//  https://baconipsum.com/api/?type=meat-and-filler ir rezultatą patalpintų html kode. 

export async function fnBodyTxt() {
    let res = '';
    res = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then((response) => response.json())
        .then((data) => data);
    return res;
}

