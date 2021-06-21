const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgList = document.querySelector('#gallery');
imgList.classList.add('#gallery');

const addImg = images => {
 return `<li><img src= '${images.url}' alt ='${images.alt}'  width='320' height='240'/></li>`;
}

const compilationImg = images.map(addImg).join('');
console.log(compilationImg);

const imgEl = document.querySelectorAll('img');
console.log(imgEl)
imgList.insertAdjacentHTML('beforeend',compilationImg);
document.body.appendChild(imgList);


//======= Alternative script reserved for personal use =======

// const ulRef = document.querySelector('#gallery');

// const imgList = images.map(image => {
//     let newLi = document.createElement('li');
//     newLi.classList.add('gallery__item')
//     let newImg = document.createElement('img');
//     newImg.classList.add('gallery__image')

//     newLi.appendChild(newImg)
//     ulRef.appendChild(newLi);

//     newImg.src = image.url;
//     newImg.alt = image.alt;
// });

// document.body.appendChild(ulListRef);
// console.log(ulRef);