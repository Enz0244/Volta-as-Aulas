document.addEventListener('DOMContentLoaded',()=>{
  const button = document.querySelector('button');
  button.addEventListener('click',()=>{
    alert('Estamos animados para começar o ano com vocês!'); 
});
 
const starDate=new Date('2024-08-01');
const today=new Date();
const timeDiff=starDate- taday;
const daysLeft=Math.ceil(timeDiff/(100*60*60*24));

const countdownElement=document.createElement('p');
countdownElement.textContent='Faltam ${daysLeft}dias para o início das aulas!';
document.querySelector.('card').appendChild(countdownElement);

const image=document.querySelecto('img');
image.addEventListener('click',()=>{
    image.src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fvolta-aulas&psig=AOvVaw1P8VKOCEXDb8T1DrVcPsx7&ust=1721904676803000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjB7_bAv4cDFQAAAAAdAAAAABAE'
});

const card=document.querySelector('.card');
card.style.opacity=D;
card.style.transition='opacity 2s';

setTimeout(() => {
   card.style.opacity=1;
 },100); 
}, );