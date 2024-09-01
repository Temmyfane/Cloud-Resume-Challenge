// JavaScript Code
async function updateCounter() {
    try {
        let counter = document.getElementById('counter'); // Ensure this matches your HTML

        if (!counter) {
            console.error('Counter element not found');
            return;
        }

        let response = await fetch("https://25vqljyqg6ynsanfc57lln4fsy0ubygt.lambda-url.us-east-1.on.aws/");
        let data = await response.json();

        console.log('Response Data:', data);

        if (data && typeof data.views === 'number') {
            counter.innerHTML = `Views: ${data.views}`;
        } else if (data && typeof data.views === 'object' && data.views.N) {
            counter.innerHTML = `Views: ${data.views.N}`;
        } else {
            console.error('Unexpected data format:', data);
            counter.innerHTML = 'Error reading views';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        let counter = document.getElementById('counter');
        if (counter) {
            counter.innerHTML = 'Error fetching data';
        }
    }
}

updateCounter();
