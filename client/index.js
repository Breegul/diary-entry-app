function createDiaryCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('diary-card');

    const title = document.createElement('h2');
    title.classList.add('diary-title');
    title.innerText = "Diary Title";

    const image = document.createElement('img');
    image.classList.add('diary-image');
    image.src = "https://placekitten.com/3000/2000";

    const content = document.createElement('p');
    content.classList.add('diary-content');
    content.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus ipsum sit amet elit fermentum, a aliquam arcu ornare. Pellentesque commodo massa eget leo elementum vulputate vestibulum volutpat ligula. Nullam condimentum ultrices mi et lacinia. Maecenas porta hendrerit ipsum, non sollicitudin metus feugiat vel. Quisque eu nibh vel est tincidunt pharetra. Etiam semper augue massa, vitae rhoncus velit gravida vitae. Duis rhoncus porttitor vehicula. Phasellus interdum diam ac ornare dictum. In porta dolor eros, a gravida nulla efficitur eget. Integer ullamcorper, risus id mollis gravida, felis purus suscipit massa, nec viverra libero arcu vitae nunc. Sed ut accumsan justo.";

    const date = document.createElement('p');
    date.classList.add('diary-date');
    date.innerText = "01/01/3100";

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(content);
    card.appendChild(date);

    document.body.appendChild(card);
}

createDiaryCard();
createDiaryCard();
createDiaryCard();

