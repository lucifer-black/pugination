async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }
  
  async function main() {
    const postsData = await getData();
    let currentPage = 1;
    let rows = 13; /*количество строк на страницу*/
  
    function displayList(arrData, rowPerPage, page) {
      const postsEl = document.querySelector('.posts');
      postsEl.innerHTML = "";
      page--;
  
      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = arrData.slice(start, end);
  
      paginatedData.forEach((el) => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerText = `${el.title}`;
        postsEl.appendChild(postEl);
      })
    }
  
    function displayPagination(arrData, rowPerPage) {
      const paginationEl = document.querySelector('.pagination'); /*обращяемся к классу pogination */
      const pagesCount = Math.ceil(arrData.length / rowPerPage); /*определение количества страниц и кнопок*/
      const ulEl = document.createElement("ul"); /*вкладываются ul-шки*/
      ulEl.classList.add('pagination__list');
        
      /*цикл*/
      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1); /* принимает параметр page через i+1*/
        ulEl.appendChild(liEl) /* принимает параметр, возвращает liEL и аппендит его*/
      }
      paginationEl.appendChild(ulEl) /* */
    }
  
    function displayPaginationBtn(page) /* */{
     // const liEl = document.createElement("li");/*вкладываются li-шки */
      //liEl.classList.add('pagination__item')/*стиль для лишки */
      liEl.innerText = page/* лежит номер страницы */
  
      if (currentPage == page) liEl.classList.add('pagination__item--active');/* */
  
      liEl.addEventListener('click', () => {/* */
        currentPage = page/* принимает page с function displayPaginationBtn(page)*/
        displayList(postsData, rows, currentPage)/* */
  
        let currentItemLi = document.querySelector('li.pagination__item--active');/* */
        currentItemLi.classList.remove('pagination__item--active');/* */
  
        liEl.classList.add('pagination__item--active')  ;/* */
      })
  
      return liEl;/*возвращает liEl */
    }
  
    displayList(postsData, rows, currentPage);/* */
    displayPagination(postsData, rows);/* */
  }
  
  main();