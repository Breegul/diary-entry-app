async function createDiaryCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('diary-card');
  
    const title = document.createElement('h2');
    title.classList.add('diary-title');
    title.innerText = data.title;
  
    const image = document.createElement('img');
    image.classList.add('diary-image');
    image.src = data.image_url;
  
    const content = document.createElement('p');
    content.classList.add('diary-content');
    content.innerText = data.content;
  
    const date = document.createElement('p');
    date.classList.add('diary-date');
    date.innerText = data.date;
  
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(content);
    card.appendChild(date);
  
    document.body.appendChild(card);
  }
  
  async function getDataFromSQL() {
    const response = await fetch('http://localhost:3000/diary/');
    const data = await response.json();
  
    for (const entry of data) {
      createDiaryCard(entry);
    }
  }
  
  getDataFromSQL();
  