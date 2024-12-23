    let currentCard = 1;
const totalCards = 100;
function updateCard() {
    console.log(`Fetching card #${currentCard}`);
    fetch(`https://jsonplaceholder.typicode.com/posts/${currentCard}`)
        .then(response => response.json())
        .then(data => {
            const card = document.querySelector('.card');
            if (data.id && data.title) {
                card.innerHTML = `
                    <h4>ID: ${data.id}</h4>
                    <p>Title: ${data.title}</p>
                `;
            } else {
                card.innerHTML = `<p>No data available</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching card data:', error);
            const card = document.querySelector('.card');
            card.innerHTML = `<p>No data available</p>`;
        });
}
function changeCard(direction) {
    if (direction === 'next') {
        currentCard = currentCard === totalCards ? 1 : currentCard + 1;
    } else if (direction === 'prev') {
        currentCard = currentCard === 1 ? totalCards : currentCard - 1;
    }
    updateCard();
}





document.getElementById('btn-next').addEventListener('click', () => changeCard('next'));
document.getElementById('btn-prev').addEventListener('click', () => changeCard('prev'));

updateCard();
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('All Posts:', data.map(post => ({ id: post.id, title: post.title })));
    })
    .catch(error => console.error('Error fetching posts:', error));
