const cards = [
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 2, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 3, paw: 4, price: 40000, amount: 0 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 3, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 10000, amount: 0 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 2, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 3, paw: 4, price: 40000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 2, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 3, paw: 4, price: 40000, amount: 0 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 3, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 10000, amount: 0 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 2, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 3, paw: 4, price: 40000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 2, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 3, paw: 4, price: 40000, amount: 0 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 3, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 10000, amount: 0 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 2, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 3, paw: 4, price: 40000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 2, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 3, paw: 4, price: 40000, amount: 0 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 3, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 10000, amount: 0 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 40, color: "Коричневый", age: 2, paw: 4, price: 30000, amount: 10 },
    { img: "assets/images/cats/cat2.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 3, paw: 4, price: 40000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 },
    { img: "assets/images/cats/cat3.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 6, paw: 4, price: 20000, amount: 10 },
    { img: "assets/images/cats/cat1.jpg", title: "Кот полосатый", discount: 0, color: "Коричневый", age: 2, paw: 4, price: 25000, amount: 10 }
];

const cardWrapper = document.querySelector('.card-wrapper');
const notifyWrapper = document.querySelector('.notify');
const showMore = document.querySelector('.show-more');
const sortList = document.querySelector('.sort__list');

const START_CARD_DRAW = 6;
const CARD_DRAW_PER_RAW = 20;

let cardDraw = 0, removeTimer = 0;

document.addEventListener("DOMContentLoaded", () => {
    loadCards(0, START_CARD_DRAW);
});

sortList.addEventListener('click', (e) => {
    let target = e.target;

    if(target.classList.contains('sort__method')) {
        sortCards(target.getAttribute("data-type"), target.getAttribute("data-sort"));
    }
});

cardWrapper.addEventListener('click', (e) => {
    let target = e.target;

    if(target.getAttribute('data-like')) {
        let card = target.closest('.card');
        let like = target.closest('.card__like');
        
        if(!like.classList.contains('card__like_liked')) {
            like.classList.add('card__like_liked');
            showLikedNotify(true, card.querySelector('.card__title').innerText, "Добавлен в избранное");
        }
        else {
            like.classList.remove('card__like_liked');
            showLikedNotify(false, card.querySelector('.card__title').innerText, "Удален из избранного");
        }
    }
});

notifyWrapper.addEventListener('click', (e) => {
    let target = e.target;

    if(target.getAttribute('data-notify')) {
        let notify = target.closest('.notify__item');
        removeNotify(notify);
    }
});

function sortCards(type = "", sort = "") {
    let sortMethod = sort === "ascend" ? true : false;

    for(let i = 0; i < cardWrapper.children.length; i++) {
        for(let k = i; k < cardWrapper.children.length; k++) {
            if(sortMethod) {
                if(+cardWrapper.children[i].getAttribute(type) > +cardWrapper.children[k].getAttribute(type)) {
                    replaceNode = cardWrapper.replaceChild(cardWrapper.children[k], cardWrapper.children[i]);
                    insertAfter(replaceNode, cardWrapper.children[i]);
                }
            } else {
                if(+cardWrapper.children[i].getAttribute(type) < +cardWrapper.children[k].getAttribute(type)) {
                    replaceNode = cardWrapper.replaceChild(cardWrapper.children[k], cardWrapper.children[i]);
                    insertAfter(replaceNode, cardWrapper.children[i]);
                }
            }
        }
    }
}

showMore.addEventListener('click', (e) => {
    loadCards(cardDraw, CARD_DRAW_PER_RAW);
});

function loadCards(start = 0, drawNum = 0) {
    let len = (start + drawNum) < cards.length ? (start + drawNum) : cards.length;

    for(let i = start; i < len; i++) {
        cardDraw++;
        createCard(cards[i]);
    }

    updateShowMoreBtn();
}

function updateShowMoreBtn() {
    let showNum = cards.length - cardDraw;

    if(!showNum) 
    {
        showMore.remove();
        return false;
    }

    showMore.querySelector('.show-more__num').innerText = ` ${showNum > CARD_DRAW_PER_RAW ? CARD_DRAW_PER_RAW : showNum}`;

    return true;
}

function insertAfter(el, refEl) {
    return refEl.parentNode.insertBefore(el, refEl.nextSibling);
}

function createCard(card) {
    let newCard = `
    <div class="card" data-price="${card.price}" data-age="${card.age}">
        <div class="card__header">
            <div class="card__img">
                <img src="${card.img}" alt="catCard">
            </div>
            ${card.discount ? `<div class="card__discount">-`+card.discount+`%</div>` : ``}
            <div class="card__like">
                <img src="assets/images/like.svg" alt="like" data-like="like">
            </div>
        </div>
        <div class="card__body">
            <div class="card__title">Кот полосатый</div>
            <div class="card__features">
                <div class="card__features-wrapper">
                    <div class="card__color">${card.color} окрас</div>
                </div>
                <div class="card__features-wrapper">
                    <div class="card__age card_text-bold">${card.age} мес.</div>
                    <div class="card__description">Возраст</div>
                </div>
                <div class="card__features-wrapper">
                    <div class="card__paw card_text-bold">${card.paw}</div>
                    <div class="card__description">Кол-во лап</div>
                </div>
            </div>
            <div class="card__price">${card.price} руб.</div>
        </div>
        ${card.amount   ? `<button class="card__btn">Купить</button>` 
                        : `<button class="card__btn unavailable">Продан</button>`}
    </div>`
    
    cardWrapper.innerHTML += newCard;
}

function showLikedNotify(type = true, header = "", body = "") {
    let notify = document.createElement('div');

    type ?  notify.classList.add('notify__item', 'notify__item--add') : 
            notify.classList.add('notify__item', 'notify__item--rm')

    notifyWrapper.appendChild(notify);

    notify.innerHTML = `
        <div class="notify__close"><img src="assets/images/close.svg" alt="закрыть" data-notify="notify"></div>
        <div class="notify__header">${header}</div>
        <div class="notify__body">${body}</div>
    `;

    setTimeout(() => {
        removeNotify(notify);
    }, 5000);
}

function removeNotify(th) {
    th.classList.add('notify__item--remove');

    setTimeout(() => {
        th.remove();
    }, 500);
}

(function() {
    if (!Element.prototype.closest) {

        Element.prototype.closest = function(css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

(function() {

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;

    }

})();