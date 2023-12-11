const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const line = $('.tabs .line');

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        
        var deleTab = $('.tab-item.active');
        deleTab.classList.remove('active');
        this.classList.add('active');

        var delePane = $('.tab-pane.active');
        delePane.classList.remove('active');
        pane.classList.add('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }
})