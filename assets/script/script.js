fetch(
  "https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/"
)
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    let firstBooksGroup = "";

    objectData.map((values, key) => {
      if (key <= 3) {
        firstBooksGroup += `<div>
        <span>
        <img src="${values.simple_thumb}" alt="thumb"/>
        </span>
          <h4>${values.title}</h4> 
              <p>${values.author}</p> 
        </div>`;
      }
    });

    document.getElementById("booksInfo").innerHTML = firstBooksGroup;

    let seconBooksGroup = "";

    objectData.map((values, key) => {
      if (key > 3 && key <= 11) {
        seconBooksGroup += `<div>
          <img src="${values.simple_thumb}" alt="thumb"/>
            <h4>${values.title}</h4> 
                <p>${values.author}</p> 
          </div>`;
      }
    });
    document.getElementById("booksInformation").innerHTML = seconBooksGroup;
  });

fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
  .then((bookDetails) => {
    return bookDetails.json();
  })
  .then((objectDetails) => {
    let bookInformtion = "";

    bookInformtion += `<div>
        <span>
        <img src="${objectDetails.cover}" alt="cover"/>
        </span>
          <h4>${objectDetails.author}</h4>
              <p>${objectDetails.fragment_data}</p>
        </div>`;
    // });
    document.getElementById("bestBook").innerHTML = bookInformtion;
  });
