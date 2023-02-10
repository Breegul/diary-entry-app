const API_ENDPOINT = 'http://localhost:3000/diary/';

// async function handleSubmit(e) {
//     console.log("submit worked")
//     e.preventDefault();
//     const data = new FormData(e.target);
//     const value = Object.fromEntries(data.entries());
//     console.log(value);

//     try {
//         const response = await fetch(API_ENDPOINT, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(value),
//         });

//         if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const json = await response.json();
//       console.log('Success:', json);
//       } catch (error) {
//         console.error('Error:', error);
//     }
// }
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Test");
    const entry = {
        "date": e.target.date.value,
        "title": e.target.title.value,
        "category": e.target.category.value,
        "image_url": e.target.image_url.value,
        "diary_entry": e.target.content.value
    }
    const options = {
        method: "POST",
        body: JSON.stringify(entry),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    fetch("http://localhost:3000/diary", options)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    
})