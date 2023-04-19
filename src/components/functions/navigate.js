
const navigate = (event, page) => {
    event.preventDefault();
    const section = document.getElementById(page);
    section.scrollIntoView({ behavior: 'smooth' });
};

export default navigate