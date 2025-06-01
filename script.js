function showPage(pageId) {
    const pages = document.querySelectorAll('.doc-page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const selected = document.getElementById(pageId);
    if (selected) {
        selected.classList.add('active');
    }
}

function showPage(pageId) {
    document.querySelectorAll('.doc-page').forEach(page => {
        page.classList.remove('active');
    });

    const selected = document.getElementById(pageId);
    if (selected) selected.classList.add('active');

    document.querySelectorAll('.time-step').forEach(step => {
        step.classList.remove('active');
    });

    const timeStep = document.getElementById('time-' + pageId);
    if (timeStep) timeStep.classList.add('active');
}

function showPage(pageId) {
    document.querySelectorAll('.doc-page').forEach(page => {
        page.classList.remove('active');
    });

    const selected = document.getElementById(pageId);
    if (selected) selected.classList.add('active');

    document.querySelectorAll('.time-step').forEach(step => {
        step.classList.remove('active');
    });

    const timeStep = document.getElementById('time-' + pageId);
    if (timeStep) {
        timeStep.classList.add('active');
        timeStep.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}
