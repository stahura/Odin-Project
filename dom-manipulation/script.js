//***********DOM MANIPULATION**********/

    //DEFINE CONTAINERS AND NODES
const container = document.querySelector('#container');
    
const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.textContent = "I'm a blue h3!";
header3.style.color = 'blue';

const newdiv = document.createElement('div');
newdiv.classList.add('newdiv');
newdiv.style.border = 'black';
newdiv.style.background = 'pink';

const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.textContent = "I'm in a different div!";

const paragraph2 = document.createElement('p');
paragraph2.classList.add('paragraph2');
paragraph2.textContent = "ME TOO!";


newdiv.appendChild(header1);
newdiv.appendChild(paragraph2);




    //CALL FUNCTION TO APPEND
getContainer(container);

    //TESTING BUTTONS

const btn = document.querySelector('#btn');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        alert(button.id);
    })
})

/* // Alternate ways to use button
btn.onclick = () => alert("Hello");
btn.addEventListener('click', () => {
   alert("hello world");
})
*/


btn.addEventListener('click', function(e){
    e.target.style.background = 'blue';
})



                    //FUNCTIONS
    //Get The Proper Container And Append Nodes
function getContainer(whichContainer) {
    if(whichContainer == document.querySelector('#container')){
        
        container.appendChild(paragraph);
        container.appendChild(header3);
        container.appendChild(newdiv);
    }
}

function alertFunction() {
    alert("CONGRATS");
    //I PREFER USING FUNCTIONS
}


