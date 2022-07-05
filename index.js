let movies=[
    {
        name:"Falcon and The Winter Soldier",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur illo sint nemo similique impedit fugit? Aliquid unde praesentium voluptatibus, nulla neque culpa, at ut perferendis alias animi error est.",
        image:"images/slider 2.png"
    },
    {
        name:"Loki",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur illo sint nemo similique impedit fugit? Aliquid unde praesentium voluptatibus, nulla neque culpa, at ut perferendis alias animi error est.",
        image:"images/slider 1.png"
    },
    {
        name:"Wanda Vision",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur illo sint nemo similique impedit fugit? Aliquid unde praesentium voluptatibus, nulla neque culpa, at ut perferendis alias animi error est.",
        image:"images/slider 3.png"
    },
    {
        name:"Raya and the last dragon",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur illo sint nemo similique impedit fugit? Aliquid unde praesentium voluptatibus, nulla neque culpa, at ut perferendis alias animi error est.",
        image:"images/slider 4.png"
    },
    {
        name:"luca",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A consectetur illo sint nemo similique impedit fugit? Aliquid unde praesentium voluptatibus, nulla neque culpa, at ut perferendis alias animi error est.",
        image:"images/slider 5.png"
    }

];


const carousal=document.querySelector('.carousel');
let slider=[];

let slideidx=0;

function createSlide() {
    if (slideidx >= movies.length) {
        slideidx = 0;
    }

        //create DOM element using js to fit int carousel 
    let slide = document.createElement('div');
    let imgelement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideidx].name));
    p.appendChild(document.createTextNode(movies[slideidx].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgelement);
    carousal.appendChild(slide);

    imgelement.src = movies[slideidx].image;
    slideidx++;

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    slider.push(slide);


    if (slider.length) {
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${30 * (slider.length - 2)}px)`;
    }
}

for(let i=0;i<3;i++){
    createSlide()
}

setInterval(()=>{
    createSlide();
},3000)

const videocard=[...document.querySelectorAll('.video-card')]

videocard.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    });
    item.addEventListener('mousleave',()=>{
        let video=item.children[1];
        video.pause();
    });
})

let cardcontainer=[...document.querySelectorAll('.card-container')];
let prebtn=[...document.querySelectorAll('.pre-btn')];
let nxtbtn=[...document.querySelectorAll('.nxt-btn')];

cardcontainer.forEach((item,i)=>{
    let containerDimension=item.getBoundingClientRect();
    let containerwidth=containerDimension.width;

    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerwidth-200;
    })

    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft-=containerwidth+200;
    })
})

