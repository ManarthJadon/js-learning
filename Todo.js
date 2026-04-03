let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('#add');

btn.addEventListener('click', () => {
    let item = document.createElement('li');
    item.innerHTML = inp.value; // .value returns the value of the input field

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.classList.add('delete');

    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = ''; // clears the input field after adding the item to the list
});

ul.addEventListener('click', (event) => {
    if(event.target.nodeName==="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("element deleted");
    }
});

// let delBtns = document.querySelectorAll('.delete');
// for(let delBtn of delBtns){
//     delBtn.addEventListener('click', function(){
//         console.log("element deleted");
//         this.parentElement.remove();
//     })
// }
