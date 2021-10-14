(function() {
    let tabState;
    const tabs = document.querySelectorAll('.tabulator__input') || [];
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', (event) => {
            if (event.target.value) {
                tabState = event.target.id;
            }
            const cards = document.querySelectorAll('.card') || [];
            for (let i = 0; i < cards.length; i++) {
                const dataType = cards[i].getAttribute('data-tab');
                if (dataType === tabState || tabState === 'all_components') {
                    cards[i].style.display = 'flex';
                } else {
                    cards[i].style.display = 'none';
                }
            }
        });
    }
})();