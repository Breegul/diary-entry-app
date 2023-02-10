const API_ENDPOINT = 'http://localhost:3000/diary/';

async function handleSubmit(e) {
    console.log("submit worked")
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value);

    try {
        const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
        });

        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
      console.log('Success:', json);
      } catch (error) {
        console.error('Error:', error);
    }
}

function handleSubmitTest(){
    console.log("works")
}

console.log("javascript")
