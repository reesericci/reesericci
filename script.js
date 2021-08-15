function video(el) {
    el.currentTime = 0;
    if(el.muted == true) { 
        el.muted = false; 
    } else if(el.muted == false) { 
        el.muted = true; 
    }
}
$("#reese-video").each(function () {
    this.onended = function (e) {
      //Do whatever you want
      this.muted = true;
      this.play();
    }
})

new CircleType(document.getElementById('reese-armstrong'));