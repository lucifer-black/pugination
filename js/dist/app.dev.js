"use strict";

function getData() {
  var response, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/posts'));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function main() {
  var postsData, currentPage, rows, displayList, displayPagination, displayPaginationBtn;
  return regeneratorRuntime.async(function main$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          displayPaginationBtn = function _ref3(page)
          /* */
          {
            // const liEl = document.createElement("li");/*вкладываются li-шки */
            //liEl.classList.add('pagination__item')/*стиль для лишки */
            liEl.innerText = page;
            /* лежит номер страницы */

            if (currentPage == page) liEl.classList.add('pagination__item--active');
            /* */

            liEl.addEventListener('click', function () {
              /* */
              currentPage = page;
              /* принимает page с function displayPaginationBtn(page)*/

              displayList(postsData, rows, currentPage);
              /* */

              var currentItemLi = document.querySelector('li.pagination__item--active');
              /* */

              currentItemLi.classList.remove('pagination__item--active');
              /* */

              liEl.classList.add('pagination__item--active');
              /* */
            });
            return liEl;
            /*возвращает liEl */
          };

          displayPagination = function _ref2(arrData, rowPerPage) {
            var paginationEl = document.querySelector('.pagination');
            /*обращяемся к классу pogination */

            var pagesCount = Math.ceil(arrData.length / rowPerPage);
            /*определение количества страниц и кнопок*/

            var ulEl = document.createElement("ul");
            /*вкладываются ul-шки*/

            ulEl.classList.add('pagination__list');
            /*цикл*/

            for (var i = 0; i < pagesCount; i++) {
              var _liEl = displayPaginationBtn(i + 1);
              /* принимает параметр page через i+1*/


              ulEl.appendChild(_liEl);
              /* принимает параметр, возвращает liEL и аппендит его*/
            }

            paginationEl.appendChild(ulEl);
            /* */
          };

          displayList = function _ref(arrData, rowPerPage, page) {
            var postsEl = document.querySelector('.posts');
            postsEl.innerHTML = "";
            page--;
            var start = rowPerPage * page;
            var end = start + rowPerPage;
            var paginatedData = arrData.slice(start, end);
            paginatedData.forEach(function (el) {
              var postEl = document.createElement("div");
              postEl.classList.add("post");
              postEl.innerText = "".concat(el.title);
              postsEl.appendChild(postEl);
            });
          };

          _context2.next = 5;
          return regeneratorRuntime.awrap(getData());

        case 5:
          postsData = _context2.sent;
          currentPage = 1;
          rows = 13;
          /*количество строк на страницу*/

          displayList(postsData, rows, currentPage);
          /* */

          displayPagination(postsData, rows);
          /* */

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}

main();
//# sourceMappingURL=app.dev.js.map
