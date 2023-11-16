export default function ParallaxBanner(){
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    if(!isMobile) {
        if($(".parallax").length){  $(".parallax").sitManParallex({  invert: false });}
    }else{
        $(".parallax").sitManParallex({  invert: true });
    }
}