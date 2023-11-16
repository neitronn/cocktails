import Tabs from "./modules/tabs";
import TimerProduct from "./modules/timer";
import TopSite from "./modules/top_site button";
import HeaderMenu from "./modules/HeaderMenu";
import ConnectingSliders from "./modules/connectingSliders";
import ParallaxBanner from "./modules/parallax";

ParallaxBanner();
ConnectingSliders();
HeaderMenu();
TopSite();
Tabs();

document.querySelectorAll('.product-timer').forEach((timer) => {
    new TimerProduct(timer).init();
})
