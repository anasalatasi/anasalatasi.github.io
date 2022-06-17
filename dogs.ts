interface DOG{
    url:string
}
const getDog = document.getElementById('contacts') as HTMLDivElement;
function FetchDog(){
    fetch('https://random.dog/woof.json').then(res=> res.json()).then((data:DOG)=> getDog.style.backgroundImage=`url('${data.url}')`)
}
FetchDog();
