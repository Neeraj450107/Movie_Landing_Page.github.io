function toggleVideo(){
    const trailer = document.querySelector(".trailer");
    const video = document.querySelector("video");
    video.pause();
    trailer.classList.toggle("active");
}

function changeBg(bg , title){
    const banner = document.querySelector(".banner");
    const contents = document.querySelectorAll(".content");
    banner.style.background = `url("../assests/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(contents => {
        contents.classList.remove('active');
        if(contents.classList.contains(title)){
            contents.classList.add('active');
        }
    })
};