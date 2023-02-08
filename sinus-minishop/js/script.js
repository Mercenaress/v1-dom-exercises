let nameChange = document.querySelector('.art-1 h3');
    nameChange.innerHTML = 'Potato';

let menuOpt = document.querySelector('nav a');
    menuOpt.innerHTML = 'Start';
    menuOpt.className = 'active';

let footOpt = document.querySelector('section article a:nth-child(4)');
    footOpt.innerHTML = 'Mail Us';

let fireHoodie = document.querySelector('.art-2 p');
    fireHoodie.innerHTML = 'peepeepoopoo';

let waterHood = document.querySelector('.art-3 figure');
    waterHood.style.backgroundColor = 'purple';

let shopLocal = document.querySelector('section article:nth-child(2) p');
    shopLocal.innerHTML = 'Pinus <br> hoi';

let logo = document.querySelector('img');
    logo.addEventListener('click', () => {
        console.log('Found you!')
    })
    // logo.classList.remove('logo');

let headMenu = document.querySelector('nav');
    headMenu.insertAdjacentHTML('afterbegin', '<a href="#">PP</a>');

let earthCard = document.querySelector('main');
    earthCard.insertAdjacentHTML('beforeend', `
    <article>
    <figure><img src="img/hoodie-forrest.png"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
    <button>buy</button>
    </article>
    `);

let midButt = document.querySelectorAll('button');
    for (let i = 0; i < midButt.length; i++) {
        midButt[i].innerHTML = 'GIB ME';
        midButt[i].style.backgroundColor = 'purple';
    }

let pText = document.querySelectorAll('p');
    for (let i = 0; i < pText.length; i++) {
        pText[i].style.color = 'hotpink'
    }


let potato = document.querySelectorAll('main article');
    for (let i = 0; i < potato.length; i++) {
        potato[i].addEventListener('click', () => {
            if (potato[i] == potato[0]) {
                console.log('Hi i\'m article Potato');
            }
            else if (potato[i] == potato[1]) {
                console.log('Hi i\'m article Fire');
            }
            else if (potato[i] == potato[2]) {
                console.log('Hi i\'m article Water');
            }
            else if (potato[i] == potato[3]) {
                console.log('Hi i\'m article Forrest');
            }
        })
    }