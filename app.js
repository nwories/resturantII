// VARIABLES
const menuContainer = document.querySelector('.menu-container');
const btnContainer = document.querySelector('.btn-container');


// MENU ARRAY //
const menu = [
    {
        id: 1,
        img: "images/abacha.jpeg",
        title: "Abacha",
        price: "2.99",
        category: 'lunch',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 2,
        img: "images/beansBread.jpeg",
        title: "Beans and Bread",
        price: "3.99",
        category: 'breakfast',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 3,
        img: "images/bitter.webp",
        title: "Bitter-Leaf Soup",
        price: "9.99",
        category: 'lunch',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 4,
        img: "images/cat.jpeg",
        title: "Cat Fish",
        price: "10.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 5,
        img: "images/chapman.jpeg",
        title: "Chapman",
        price: "1.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 6,
        img: "images/chapmancock.jpeg",
        title: "Chapman cock",
        price: "0.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 7,
        img: "images/ebaAndEgusi.jpeg",
        title: "Egusi soup",
        price: "9.99",
        category: 'lunch',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 8,
        img: "images/fio.jpeg",
        title: "fio fio",
        price: "4.99",
        category: 'breakfast',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 9,
        img: "images/kebab.jpeg",
        title: "kebab",
        price: "3.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 10,
        img: "images/mk9.jpg",
        title: "Spaghetti",
        price: "7.99",
        category: 'dinner',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 11,
        img: "images/mkd.jpg",
        title: "chapman drink",
        price: "2.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 12,
        img: "images/moi-moi.jpg",
        title: "Moi Moi",
        price: "5.99",
        category: 'breakfast',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 13,
        img: "images/nkwobi.jpeg",
        title: "Nkwobi",
        price: "6.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 14,
        img: "images/okpa.jpeg",
        title: "Okpa",
        price: "1.99",
        category: 'breakfast',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 15,
        img: "images/papAndAkara.jpeg",
        title: "Pap + Bean-cake",
        price: "3.99",
        category: 'breakfast',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 16,
        img: "images/papBeans.jpeg",
        title: "Pap + Beans",
        price: "4.99",
        category: 'breakfast',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 17,
        img: "images/plantainAndSauce.jpeg",
        title: "Plantain + sauce",
        price: "5.99",
        category: 'lunch',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 18,
        img: "images/poridgeYam.jpeg",
        title: "Poridge Yam",
        price: "3.99",
        category: 'lunch',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 19,
        img: "images/riceAndPlantain.jpeg",
        title: "Jollof rice",
        price: "5.99",
        category: 'lunch',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 20,
        img: "images/samosa.jpeg",
        title: "Samosa",
        price: "1.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 21,
        img: "images/shawarmabeef.jpeg",
        title: "Shawarma-beef",
        price: "2.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 22,
        img: "images/slice-potato.jpg",
        title: "Slice Potato",
        price: "4.99",
        category: 'dinner',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 23,
        img: "images/snacks1.jpg",
        title: "Snacks",
        price: "4.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 24,
        img: "images/spag.jpg",
        title: "Spaghetti",
        price: "6.99",
        category: 'dinner',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 25,
        img: "images/teaAndBread.jpeg",
        title: "Tea and Bread",
        price: "2.99",
        category: 'breakfast',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 26,
        img: "images/yamSauce.jpeg",
        title: "Yam Sauce",
        price: "3.99",
        category: 'lunch',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
    {
        id: 27,
        img: "images/pizza.jpeg",
        title: "Pizza",
        price: "4.99",
        category: 'shakes',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, ducimus. In hic natus sint dignissimos expe minus."
    },
];
//  END OF MENU ARRAY //

// EVENT LISTENERS //
    // ********** Load Items ********** //
window.addEventListener('DOMContentLoaded',  () => {
   displayMenuItems(menu);
   displayCategoryBtns();
});

// END OF EVENT LISTENERS

// CREATING FUNCTIONS //
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu">
            <div class="img">
                <img src="${item.img}" alt="${item.title}">
            </div>

            <div class="detail">
                <header>
                    <p class="title">${item.title}</p>
                    <p class="price">$${item.price}</p>
                </header>

                <div class="detail-line"></div>

                <div class="desc">
                    <p>${item.desc}</p>
                </div>
            </div>
        </article>`
    }).join("");

    menuContainer.innerHTML = displayMenu;
} 

function displayCategoryBtns() {
    const categories = menu.reduce((values, items) => {
        if(!values.includes(items.category)) {
            values.push(items.category);
        }
        return values
       }, ['all']);
       
       const categoryBtns = categories.map((category) => {
        return `<button class="btn filter-btn" type="button" data-id=${category}>${category}</button>`
       }).join('');
       btnContainer.innerHTML = categoryBtns;
       const filterBtn = btnContainer.querySelectorAll('.filter-btn');
       // ********** Filter Items ********* //
       filterBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
        
    });
}
// END OF FUNCTION CREATION
