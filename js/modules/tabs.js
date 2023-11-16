export default function Tabs(){
    const tabs = document.querySelectorAll('.tabs .tab');
    const lists =document.querySelectorAll('.products-list');
    tabs.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (!elem.classList.contains('tab-active')){
                tabs.forEach((e) => {
                    e.classList.remove('tab-active')
                })
                lists.forEach((e) => {
                    e.classList.remove('list-action')
                })
                elem.classList.add('tab-active');
                document.querySelector('.' + elem.getAttribute('data-id')).classList.add('list-action');
            }
        })
    })
}