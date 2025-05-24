//Array storage class
let carouselArr = [];

//Classe para alimentar a estrutura de dados do Carrosel
class CarouselItem {
    constructor(img, title, link) {
        this.img = img;
        this.title = title;
        this.link = link;
    }
}

//Classe do Carrosel
class Carousel {
    static _arr = [];
    static _sequence = 0;
    static _interval = null;

    static Start(arr) {
        if (Array.isArray(arr) && arr.length > 0) {
            Carousel._arr = arr;
            Carousel._size = arr.length;
            Carousel._sequence = 0;
            Carousel.Next();
            Carousel._interval = setInterval(function () { Carousel.Next(); }, 2500);
        }
        else {
            throw new Error ("Method Start needs a non-empty array.");
        }
    }

    static Next() {
        if (Carousel._size === 0) return;
    
        const item = Carousel._arr[Carousel._sequence];
        if (!item) return;
    
        const carouselDiv = document.getElementById('carousel');
        const titleDiv = document.getElementById('carousel-title');
    
        if (carouselDiv && titleDiv) {
            carouselDiv.innerHTML = `<a href="${item.link}"><img src="${item.img}" alt="${item.title}" class="active"></a>`;
            titleDiv.innerText = item.title;
        }
    
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}
