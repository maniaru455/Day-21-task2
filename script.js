const dog_btn = document.getElementById('dog_btn');
const dog = document.getElementById('dog');
dog_btn.addEventListener('click', getRandomDog);

function getRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                dog.innerHTML = `<img src=${data.url} alt="dog" />`;
            }
        });
}