import helpWantedImg from './SpongeBob_SquarePants_Help_Wanted_title-card.jpg';

export const createHiringPage = () => {
    const jobs = document.createElement('article');
    jobs.id = 'jobs';
    jobs.innerHTML += `<h1>Jobs</h1>`;
    
    const image = document.createElement('img');
    image.src = helpWantedImg;
    image.alt = "'Help Wanted' title card from the pilot episode of SpongeBob SquarePants.";
    jobs.appendChild(image);

    jobs.innerHTML += `
                        <p id="info">Now hiring! Email your resume, 3 references, and a cover letter to <span class="bold">EGkrabs@thekrustykrab.biz</span>. All salary inquires will be marked as spam and deleted.</p>
                        <section id="job-1">
                            <h2>Fry Cook</h2>
                            <p>Have you always wanted to make minimum wage working in a hot kitchen 6 days a week? Don't know how to cook? We don't care!</p>
                            <h3>Requirements:</h3>
                            <ul class="job-reqs">
                                <li>Possesses impeccable hygeine.</li>
                                <li>Can stand for 9 hours straight.</li>
                                <li>Believes that the customers' jokes are always funny.</li>
                                <li>Will guard company secrets with their life.</li>
                                <li>Owns a hydro-dynamic spatula.</li>
                            </ul>
                        </section>
                        <section id="job-2">
                            <h2>Delivery Driver</h2>
                            <p>Help The Krusty Krab expand its business portifolio. You will be a pioneer of pizza delivery.</p>
                            <h3>Requirements:</h3>
                            <ul class="job-reqs">
                                <li>Has a valid driver's license.</li>
                                <li>Willing to drive 100 nautical miles a day.</li>
                                <li>Can navigate by sea rock.</li>
                            </ul>
                        </section>`;

    return jobs;
};

