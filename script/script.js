let books = [
    {
        title: "American Marxism",
        coverdesign: 'american-marxism.jpg',
        author: 'Mark R. Levin',
        Price: 'N5000'
    },
    {
        title: "Apples never fall",
        coverdesign: 'apples-never-fall.jpg',
        author: 'Liane Moriarty',
        Price: 'N4800'
    },
    {
        title: "bewilderment",
        coverdesign: 'bewilderment.jpg',
        author: 'Richard Powers',
        Price: 'N5200'
    },
    {
        title: "cloud cuckoo land",
        coverdesign: 'cloud-cuckoo-land.jpeg',
        author: 'Anthony Doerr',
        Price: 'N3500'
    },
    {
        title: "harlem shuffle",
        coverdesign: 'harlem-shuffle.jpg',
        author: 'Colson Whitehead',
        Price: 'N2900'
    },
    {
        title: "the jailhouse lawyer",
        coverdesign: 'jailhouse-lawyer.jpg',
        author: 'James Patterson',
        Price: 'N4350'
    },
    {
        title: "last graduate",
        coverdesign: 'last-graduate.jpg',
        author: 'naomi novik',
        Price: 'N2450'
    },
    {
        title: "no cure being human",
        coverdesign: 'no-cure-being-human.jpg',
        author: 'kate bowler',
        Price: 'N3650'
    },
    {
        title: "peril",
        coverdesign: 'peril.jpg',
        author: 'bob woodward',
        Price: 'N5500'
    },
    {
        title: "the wish",
        coverdesign: 'the-wish.jpg',
        author: 'nicholas sparks',
        Price: 'N3600'
    },
    {
        title: "unrequited infatuations",
        coverdesign: 'unrequited-infatuations.jpg',
        author: 'stevie van zandi',
        Price: 'N2950'
    },
    {
        title: "vanderbilt",
        coverdesign: 'vanderbilt.jpg',
        author: 'Anderson Cooper',
        Price: 'N3550'
    }
]
let booksection = document.getElementById('book-wrapper');
let html = "";


books.forEach(e =>{
    html += `
            <div class="py-5 bg-warning rounded-3 text-center shadow mx-3 my-3">
                <div class="">
                    <img src="img/${e.coverdesign}" alt="" class="img-fluid rounded-3 pb-3 px-3" width="350">
                </div>
                <div class="px-lg-4">
                    <h3 class="text-uppercase text-wrap">${e.title}</h3>
                    <h4 class="text-capitalize">${e.author}</h4>
                    <h3>${e.Price}</h3>
                </div>
            </div>
    `
    console.log(e)

    booksection.innerHTML = html
}) 