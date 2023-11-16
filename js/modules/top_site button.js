export default function  TopSite(){
    const top_site = document.querySelector('.top_site')
    function toggleTopSiteButton(){
        if (pageYOffset > 300) {
            top_site.classList.add('top_site__active');
        }else{
            top_site.classList.remove('top_site__active');
        }
    }
    toggleTopSiteButton()

    top_site.addEventListener('click', function (){
        window.scrollBy({
            top: -pageYOffset,
            behavior: 'smooth'
        });
    })

    window.addEventListener('scroll', function() {
        toggleTopSiteButton();
    })
}