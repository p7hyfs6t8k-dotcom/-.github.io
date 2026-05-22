// НАША КЛАССИЧЕСКАЯ РУЧНАЯ БАЗА ДАННЫХ ДЛЯ ПЕРВЫХ 10 СТУЛЬЕВ (БЕЗ ОШИБОК)
const ALL_CHAIRS = [
    {
        name: "Бескаркасное кресло",
        description: "Светло-зеленое бескаркасное кресло округлой формы из велюровой ткани с мягкими бортиками.",
        price: 189,
        image: "1.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Комплект из розового бескаркасного кресла и пуфика из мягкой велюровой ткани.",
        price: 279,
        image: "2.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Серое бескаркасное кресло с обивкой из длинноворсового искусственного меха.",
        price: 229,
        image: "3.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Коричневое бескаркасное кресло-груша из экокожи с декоративными швами.",
        price: 149,
        image: "4.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Черное бескаркасное кресло из плотного вельвета с вертикальным рубчиком.",
        price: 209,
        image: "5.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Черное бескаркасное кресло с вертикальной канальной прострочкой из фактурного велюра.",
        price: 299,
        image: "6.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Темно-коричневое напольное кресло из мягкой ткани с сегментированной спинкой.",
        price: 269,
        image: "7.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Серое бескаркасное кресло-сумка из плотной ткани с декоративным ремнем и пряжкой.",
        price: 199,
        image: "8.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Темно-серое кресло со складной спинкой и основанием из комбинированных материалов.",
        price: 249,
        image: "9.png",
        category: "бескаркасные"
    },
    {
        name: "Бескаркасное кресло",
        description: "Черное бескаркасное кресло круглой формы с обивкой из густого искусственного меха.",
        price: 239,
        image: "10.jpg",
        category: "бескаркасные"
    },
        {
        name: "Геймерское кресло",
        description: "Светло-серое геймерское кресло с черными боковыми вставками, подголовником и поясничной подушкой из ткани.",
        price: 349,
        image: "11.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Коричневое геймерское кресло из экокожи с ромбовидной прострочкой и выдвижной подставкой для ног.",
        price: 399,
        image: "12.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Черное геймерское кресло из гладкой экокожи с логотипом на спинке и регулируемыми подлокотниками.",
        price: 489,
        image: "13.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Серое геймерское кресло с черными вставками, подголовником и выдвижной оттоманкой из комбинированных материалов.",
        price: 329,
        image: "14.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Черное геймерское кресло с красными текстильными вставками на спинке и сиденье из экокожи.",
        price: 289,
        image: "15.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Светло-бежевое геймерское кресло с ромбовидной прострочкой на спинке и выдвижной подставкой для ног.",
        price: 319,
        image: "16.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Черно-белое геймерское кресло с высоким изголовьем и графическим принтом серого цвета на спинке.",
        price: 379,
        image: "17.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Черно-серое геймерское кресло из экокожи с горизонтальными валиками в зоне спины и подголовником.",
        price: 299,
        image: "18.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Белое геймерское кресло из экокожи с ромбовидным узором и хромированной крестовиной.",
        price: 359,
        image: "19.png",
        category: "геймерские"
    },
    {
        name: "Геймерское кресло",
        description: "Бело-черное геймерское кресло с вырезами в верхней части спинки и надписями на подушках.",
        price: 339,
        image: "20.png",
        category: "геймерские"
    },
        {
        name: "Лежанка для питомца",
        description: "Белая лежанка-кресло с черным крапчатым принтом и мягкими бортиками.",
        price: 69,
        image: "21.png",
        category: "для питомцев"
    },
    {
        name: "Кресло для питомца",
        description: "Серое кресло-диван на черных ножках с обивкой из велюра и декоративными пуговицами.",
        price: 89,
        image: "22.png",
        category: "для питомцев"
    },
    {
        name: "Кресло для питомца",
        description: "Светло-бежевое мягкое кресло для питомца из плюшевого материала с заниженной передней стенкой.",
        price: 59,
        image: "23.png",
        category: "для питомцев"
    },
    {
        name: "Кресло для питомца",
        description: "Круглое кресло цвета беж с декоративными заклепками и подушками в форме кости и с леопардовым принтом.",
        price: 119,
        image: "24.jpg",
        category: "для питомцев"
    },
    {
        name: "Кресло-софа для питомца",
        description: "Коричневое кресло-софа из ребристого вельвета с мягкой подушкой внутри.",
        price: 79,
        image: "25.jpg",
        category: "для питомцев"
    },
    {
        name: "Лежанка для питомца",
        description: "Круглая лежанка с вертикальной черно-бежевой полоской и контрастной окантовкой.",
        price: 49,
        image: "26.jpg",
        category: "для питомцев"
    },
    {
        name: "Лежанка для питомца",
        description: "Квадратная черная лежанка с белой окантовкой по периметру и мягкой стеганой подушкой.",
        price: 59,
        image: "27.jpg",
        category: "для питомцев"
    },
    {
        name: "Лежанка для питомца",
        description: "Прямоугольная лежанка с принтом под шкуру животного (коричневые пятна на белом фоне).",
        price: 69,
        image: "28.jpg",
        category: "для питомцев"
    },
    {
        name: "Каркасный диван для питомца",
        description: "Черный каркасный диван для питомца с плетеными элементами и фигурными ножками.",
        price: 139,
        image: "29.jpg",
        category: "для питомцев"
    },
    {
        name: "Диван-шезлонг для питомца",
        description: "Черный диван-шезлонг для питомца с обивкой под кожу, каретной стяжкой и деревянными ножками.",
        price: 129,
        image: "30.jpg",
        category: "для питомцев"
    },
        {
        name: "Каркасное кресло",
        description: "Комплект из темно-серого поворотного кресла и пуфа из фактурной ткани на металлических ножках.",
        price: 459,
        image: "31.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Светло-бежевое кресло с изогнутой спинкой и каркасом из темного дерева.",
        price: 389,
        image: "32.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Кресло восьмиугольной формы со светлой тканевой обивкой и вертикальными панелями на черном основании.",
        price: 419,
        image: "33.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Современное кресло со светлой кожаной спинкой и сиденьем с абстрактным принтом на темных ножках.",
        price: 499,
        image: "34.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Черное кожаное кресло с высокой спинкой и подлокотниками на деревянных ножках.",
        price: 529,
        image: "35.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Серое каркасное кресло с фактурной тканевой обивкой и массивным черным деревянным каркасом.",
        price: 399,
        image: "36.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Светлое кресло на деревянных ножках с плетеными боковинами из ротанга и подушкой с пуговицами.",
        price: 449,
        image: "37.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Черное кожаное кресло с округлой спинкой в комплекте с пуфом на темных ножках.",
        price: 569,
        image: "38.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Круглое кресло из белой ткани букле на поворотной базе с подушкой с золотистым узором.",
        price: 429,
        image: "39.png",
        category: "каркасные"
    },
    {
        name: "Каркасное кресло",
        description: "Коричневое кресло с обивкой из велюра и гнутым деревянным каркасом темного оттенка.",
        price: 489,
        image: "40.jpg",
        category: "каркасные"
    },
    {
        name: "Компьютерное кресло",
        description: "Черное компьютерное кресло с вертикальной канальной прострочкой из экокожи на вращающейся крестовине.",
        price: 159,
        image: "41.jpg",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Черное компьютерное кресло с высокой спинкой из экокожи, квадратной прострочкой и хромированными подлокотниками.",
        price: 269,
        image: "42.png",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Белое компьютерное кресло с мягкими подушками и хромированным каркасом из экокожи.",
        price: 299,
        image: "43.png",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Светло-серое компьютерное кресло из велюра с каретной стяжкой и декоративными металлическими шипами.",
        price: 189,
        image: "44.png",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Черное компьютерное кресло с сетчатой спинкой и мягким тканевым сиденьем на пластиковом основании.",
        price: 139,
        image: "45.png",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Черное компьютерное кресло из экокожи с округлой спинкой на хромированной крестовиной.",
        price: 149,
        image: "46.png",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Светло-бежевое компьютерное кресло из велюра с хромированным основанием.",
        price: 169,
        image: "47.png",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Темно-синее компьютерное кресло из велюра с каретной стяжкой на хромированной базе.",
        price: 199,
        image: "48.png",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Коричневое компьютерное кресло из ворсистой ткани с хромированными подлокотниками.",
        price: 219,
        image: "49.png",
        category: "компьютерные"
    },
    {
        name: "Компьютерное кресло",
        description: "Коричневое компьютерное кресло из экокожи с высокой спинкой и хромированными подлокотниками.",
        price: 239,
        image: "50.png",
        category: "компьютерные"
    },

    {
        name: "Кресло-качалка",
        description: "Черное плетеное кресло-качалка с деревянным каркасом и мягкими подушками.",
        price: 259,
        image: "51.png",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Кресло-качалка с гнутым деревянным основанием и обивкой из велюра с абстрактным принтом.",
        price: 319,
        image: "52.png",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Черное кресло-качалка из полимерного шнура на металлическом каркасе.",
        price: 199,
        image: "53.png",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Светло-серое кресло-качалка с мягкой тканевой обивкой и деревянными полозьями.",
        price: 289,
        image: "54.png",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Черное кресло-качалка с плетеным сиденьем на металлическом основании.",
        price: 229,
        image: "55.png",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Черное кресло-качалка с горизонтальной прострочкой и изогнутым деревянным основанием.",
        price: 249,
        image: "56.png",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Светло-серое кресло-качалка из ткани букле с гнутым деревянным каркасом.",
        price: 329,
        image: "57.png",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Черное кожаное кресло-качалка с хромированным металлическим каркасом и квадратной стяжкой.",
        price: 349,
        image: "58.jpg",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Классическое деревянное кресло-качалка с темным каркасом и светлыми тканевыми подушками.",
        price: 189,
        image: "59.jpg",
        category: "качалки"
    },
    {
        name: "Кресло-качалка",
        description: "Черное деревянное кресло-качалка с обивкой из ребристой кожи.",
        price: 279,
        image: "60.jpg",
        category: "качалки"
    },
        {
        name: "Барный стул",
        description: "Барный стул с бежевой велюровой обивкой, темными деревянными ножками и латунными деталями.",
        price: 189,
        image: "61.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Барный стул с розовой мраморной обивкой и изогнутым золотым металлическим каркасом.",
        price: 229,
        image: "62.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Барный стул с темным глянцевым деревянным каркасом и светлой кожаной сидушкой.",
        price: 169,
        image: "63.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Черный барный стул из велюра с каретной стяжкой и металлической подножкой.",
        price: 199,
        image: "64.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Черный барный стул из экокожи с металлическим Z-образным основанием.",
        price: 149,
        image: "65.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Темный барный табурет с витыми латунными элементами на деревянных ножках и круглым сиденьем.",
        price: 179,
        image: "66.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Деревянный барный табурет на конусовидном основании с черной подножкой и узорчатой подушкой.",
        price: 149,
        image: "67.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Светло-серый барный стул с круглым вырезом в спинке и двухцветными ножками.",
        price: 189,
        image: "68.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Барный стул с цилиндрическим основанием в черно-белом узоре и черным металлическим каркасом.",
        price: 219,
        image: "69.png",
        category: "барные"
    },
    {
        name: "Барный стул",
        description: "Прозрачный дымчатый барный стул из plasticа на хромированной ножке с подножкой.",
        price: 169,
        image: "70.png",
        category: "барные"
    },
        {
        name: "Обеденный стул",
        description: "Стул с высокой изогнутой спинкой из светлой ткани, темным деревянным каркасом и декоративными заклепками.",
        price: 189,
        image: "71.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Черный стул с обивкой из экокожи и лаконичным деревянным каркасом темного оттенка.",
        price: 149,
        image: "72.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Черный велюровый стул с фигурной спинкой и темными ножками.",
        price: 169,
        image: "73.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Стул с темным деревянным каркасом, светлым сиденьем и спинкой из узорчатой ткани.",
        price: 199,
        image: "74.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Стул с круглой спинкой и сиденьем из светлой ткани, черными ножками и золотистым ободком.",
        price: 129,
        image: "75.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Стул с черным плетеным каркасом спинки и сиденьем из серой фактурной ткани на изогнутых ножках.",
        price: 159,
        image: "76.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Черный стул с подлокотниками, овальной спинкой с абстрактным узором и мягким сиденьем.",
        price: 179,
        image: "77.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Стул из темного дерева с цельной изогнутой спинкой-подлокотником и сиденьем из светлой узорчатой ткани.",
        price: 169,
        image: "78.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Светло-бежевый велюровый стул с подлокотниками, контрастной черной вставкой на спинке и черными ножками.",
        price: 189,
        image: "79.png",
        category: "обеденные"
    },
    {
        name: "Обеденный стул",
        description: "Стул с темным деревянным каркасом, фигурной спинкой с плетеным элементом и черным бархатным сиденьем.",
        price: 199,
        image: "80.png",
        category: "обеденные"
    }


];

// ГЛАВНАЯ ФУНКЦИЯ ОТРИСОВКИ ТОВАРОВ НА САЙТЕ
function renderCatalog(chairsList) {
    const gridContainer = document.getElementById('catalog-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = ""; // Очищаем старые карточки

    chairsList.forEach(item => {
        const title = item.name.toUpperCase();
        const desc = item.description || "";
        const priceValue = item.price;
        const imgFile = item.image; // Берет "1.png", "2.png" прямо из корня папки

        gridContainer.innerHTML += `
            <div class="product-card">
                <div class="img-container">
                    <button class="like-button">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <img src="${imgFile}" alt="Стул" class="main-product-img">
                </div>
                <div class="product-meta-info">
                    <h3 class="product-name" title="${desc}">${title}</h3>
                    <p style="font-size: 11px; color: #777; margin: 4px 0 10px 0; font-family: sans-serif; line-height: 1.3; height: 34px; overflow: hidden;">${desc}</p>
                    <p class="product-price">${priceValue} BYN</p>
                </div>
            </div>
        `;
    });
}

// ЛОГИКА ДЛЯ ФИЛЬТРА ЦЕН И ГАЛОЧЕК
function applyFilters() {
    const checkedBoxes = document.querySelectorAll('.filter-dropdown-panel input[type="checkbox"]:checked');
    const priceInputs = document.querySelectorAll('.filter-dropdown-panel input[type="number"], .filter-dropdown-panel input[type="text"]');
    
    let minPrice = priceInputs[0] ? parseFloat(priceInputs[0].value) : 0;
    let maxPrice = priceInputs[1] ? parseFloat(priceInputs[1].value) : 5000;
    
    if (isNaN(minPrice)) minPrice = 0;
    if (isNaN(maxPrice)) maxPrice = 99999;

    const activeFilters = [];
    checkedBoxes.forEach(box => {
        const filterText = box.parentElement.textContent.trim().toLowerCase();
        if (filterText.includes("бескаркасные")) activeFilters.push("бескаркасные");
    });

    const filtered = ALL_CHAIRS.filter(chair => {
        const matchesPrice = chair.price >= minPrice && chair.price <= maxPrice;
        const matchesCheckbox = activeFilters.length === 0 || activeFilters.includes(chair.category);
        return matchesPrice && matchesCheckbox;
    });

    renderCatalog(filtered);
}

// СТАРТ СТРАНИЦЫ
document.addEventListener('DOMContentLoaded', () => {
    renderCatalog(ALL_CHAIRS); // Показываем все стулья сразу

    const applyBtn = document.querySelector('.filter-dropdown-panel button:nth-of-type(2)') || document.querySelector('.filter-dropdown-panel button[style*="black"]');
    if (applyBtn) {
        applyBtn.addEventListener('click', applyFilters);
    }

    const clearBtn = document.querySelector('.filter-dropdown-panel button:nth-of-type(1)');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            document.querySelectorAll('.filter-dropdown-panel input[type="checkbox"]').forEach(cb => cb.checked = false);
            if (priceInputs[0]) priceInputs[0].value = 0;
            if (priceInputs[1]) priceInputs[1].value = 5000;
            renderCatalog(ALL_CHAIRS);
        });
    }
});

// ГЛАВНАЯ ФУНКЦИЯ ОТРИСОВКИ ТОВАРОВ
function renderCatalog(chairsList) {
    const gridContainer = document.getElementById('catalog-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = ""; // Очищаем старые карточки

    if (chairsList.length === 0) {
        gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px; font-size: 14px; color: #999; letter-spacing: 1px; text-transform: uppercase;">Товары не найдены</div>`;
        return;
    }

    chairsList.forEach(item => {
        const title = item.name.toUpperCase();
        const desc = item.description || "";
        const priceValue = item.price;
        const imgFile = item.image;

        gridContainer.innerHTML += `
            <div class="product-card">
                <div class="img-container">
                    <button class="like-button">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <img src="${imgFile}" alt="Стул" class="main-product-img" onerror="this.src='1.png'">
                </div>
                <div class="product-meta-info">
                    <h3 class="product-name" title="${desc}">${title}</h3>
                    <p style="display:none;">${desc}</p> <!-- Описание скрыто для идеального сходства с макетом -->
                    <p class="product-price">${priceValue} BYN</p>
                </div>
            </div>
        `;
    });
}

// ЛОГИКА СБОРА ГАЛОЧЕК И ИНПУТОВ ЦЕН
function applyFilters() {
    // 1. Находим инпуты цен От и До
    const priceInputs = document.querySelectorAll('input[type="number"], input[type="text"]');
    let minPrice = parseFloat(priceInputs[0]?.value) || 0;
    let maxPrice = parseFloat(priceInputs[1]?.value) || 5000;

    // 2. Собираем все отмеченные галочки
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Если ни одна галочка не выбрана и цены по умолчанию — показываем всё
    if (checkedBoxes.length === 0 && minPrice === 0 && maxPrice === 5000) {
        renderCatalog(ALL_CHAIRS);
        updateProductCount(ALL_CHAIRS.length);
        return;
    }

    const activeCategories = [];
    checkedBoxes.forEach(box => {
        // Получаем текст строки чекбокса
        const labelText = box.parentElement.textContent.trim().toLowerCase();
        
        if (labelText.includes("обеденные")) activeCategories.push("обеденные");
        if (labelText.includes("компьютерные")) activeCategories.push("компьютерные");
        if (labelText.includes("барные")) activeCategories.push("барные");
        if (labelText.includes("качалки")) activeCategories.push("качалки");
        if (labelText.includes("каркасные")) activeCategories.push("каркасные");
        if (labelText.includes("бескаркасные")) activeCategories.push("бескаркасные");
        if (labelText.includes("геймерские")) activeCategories.push("геймерские");
        if (labelText.includes("питомцев")) activeCategories.push("для питомцев");
    });

    // 3. Фильтруем наш массив ALL_CHAIRS
    const filtered = ALL_CHAIRS.filter(chair => {
        // Проверка по диапазону цен
        const matchesPrice = chair.price >= minPrice && chair.price <= maxPrice;
        
        // Проверка по категории
        const matchesCategory = activeCategories.length === 0 || activeCategories.includes(chair.category);
        
        return matchesPrice && matchesCategory;
    });

    // Выводим результат на экран
    renderCatalog(filtered);
    updateProductCount(filtered.length);
}

// УМНЫЙ ПОДСЧЕТ КОЛИЧЕСТВА НАЙДЕННЫХ ТОВАРОВ НАВЕРХУ ПАНЕЛИ
function updateProductCount(count) {
    const countElement = document.querySelector('.filter-dropdown-panel')?.previousElementSibling || document.querySelector('span:contains("ТОВАРОВ")') || document.body;
    // Находим текст "545 ТОВАРОВ" и меняем на реальное число
    const allTexts = document.querySelectorAll('div, span, p');
    allTexts.forEach(el => {
        if (el.textContent.includes('ТОВАРОВ') && el.children.length === 0) {
            el.textContent = `${count} ТОВАРОВ`;
        }
    });
}

// СТАРТ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
document.addEventListener('DOMContentLoaded', () => {
    // Выводим все 20 стульев сразу
    renderCatalog(ALL_CHAIRS);
    updateProductCount(ALL_CHAIRS.length);

    // Оживляем черную кнопку "ПРИМЕНИТЬ ФИЛЬТРЫ"
    const applyBtn = document.querySelector('button[style*="black"]') || document.querySelectorAll('button')[1] || document.querySelector('.filter-dropdown-panel button:last-of-type');
    if (applyBtn) {
        applyBtn.addEventListener('click', applyFilters);
    }

    // Оживляем белую кнопку "ОЧИСТИТЬ ВСЁ"
    const clearBtn = document.querySelector('button[style*="white"]') || document.querySelectorAll('button')[0] || document.querySelector('.filter-dropdown-panel button:first-of-type');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            // Сбрасываем чекбоксы
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
            
            // Сбрасываем инпуты цен
            const priceInputs = document.querySelectorAll('input[type="number"], input[type="text"]');
            if (priceInputs[0]) priceInputs[0].value = "";
            if (priceInputs[1]) priceInputs[1].value = "";
            
            // Показываем полный список
            renderCatalog(ALL_CHAIRS);
            updateProductCount(ALL_CHAIRS.length);
        });
    }
});
