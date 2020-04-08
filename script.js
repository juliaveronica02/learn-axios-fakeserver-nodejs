// cara 1.
// axios.get('http://localhost:3000/contacts')
// .then((response)=>{
//     console.log(response)
//     document.getElementById(`contacts`).innerHTML =''
// })
// .catch((response)=>{
//     console.error(pesanError);
// })
// document.getElementById('simpanContact').addEventListener('submit',function(event){
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     console.log(name,age);
//     debugger;
//     axios.post('http://localhost:3000/contacts',{
//             name,
//             age
//     })
//     .then(response =>{
//         console.log(response);
//         window.alert('berhasil menambah data');
//     })
//     .catch((pesanError)=>{
//         console.error(pesanError);
//     })
// })

//cara 2.
let data = [];
axios.get('http://localhost:3000/contacts')
.then((response)=>{
    console.log(response)
    const listsHTML = document.querySelector("#contacts>ol")
    data = response.data;

    response.data.forEach(item => {
        const {id, name, age} = item;
        const itemHTML = `<li>
        Name : ${name}
        <br />
        Age : ${age} Year
        <br />
            <a href="detail.html?id=${id}">detail</a>
            <button onclick ="ubah(${id})">edit</button>
            <button onclick ="hapus(${id})">hapus</button>
        </li>`;
        listsHTML.innerHTML += itemHTML;
    })
})
.catch((pesanError) => {
    console.error(pesanError);
})

document.getElementById('simpanContact').addEventListener('click',function(event){
//     event.preventDefault();

const name = document.getElementsByName('name').value;
const age = document.getElementsByName('age').value;
axios.post('http://localhost:3000/contacts', {
    name,
    age
})
})

const hapus = id => {
axios.delete(`http://localhost:3000/contacts/${id}`)
}

const ubah = id => {
const contact = data.find(item => {
    return item.id === id
})

if (contact){
    const name = window.prompt('Name',contacts.name);
    const age = window.prompt('Age', contacts.age);
    axios.put(`http://localhost:3000/contacts/${id}`,{
        name,
        age
    });
}
}