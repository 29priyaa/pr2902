document.addEventListener('DOMContentLoaded', function() {
    const jobListings = document.getElementById('jobListings');

    // Example job data (replace with your own data or fetch from a server)
    const jobs = [
        { title: 'Frontend Developer', company: 'ABC Inc.', location: 'New York' },
        { title: 'Backend Developer', company: 'XYZ Corp.', location: 'San Francisco' },
        { title: 'UI/UX Designer', company: '123 Ltd.', location: 'Chicago' }
    ];

    // Function to display job listings
    function displayJobs() {
        jobListings.innerHTML = '';
        jobs.forEach(function(job) {
            const jobItem = document.createElement('div');
            jobItem.classList.add('job');
            jobItem.innerHTML = `
                <h2>${job.title}</h2>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
            `;
            jobListings.appendChild(jobItem);
        });
    }

    // Display initial job listings
    displayJobs();
});