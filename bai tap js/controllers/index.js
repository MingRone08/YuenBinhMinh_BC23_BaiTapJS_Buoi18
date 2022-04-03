import { MonAn } from "../models/MonAn.js";
import { HoaDon } from "../models/HoaDon.js";
import { DANH_SACH_MON_AN } from "../util/setting.js";

var arrMonAn = [];
layLocalStorage();

document.querySelector("#addDish").onclick = function () {
  let monAn = new MonAn();
  let formField = document.querySelectorAll(".baiTap1 input");

  for (let field of formField) {
    let { id, value } = field;
    monAn[id] = value;
  }

  arrMonAn.push(monAn);
  renderMonAn(arrMonAn);
  luuLocalStorage(arrMonAn);
};

function xoaMon(maMonAn) {
  for (let i = 0; i < arrMonAn.length; i++) {
    if (arrMonAn[i]["maMonAn"] === maMonAn) {
      arrMonAn.splice(i);
    }
  }
  renderMonAn(arrMonAn);
  luuLocalStorage(arrMonAn);
}

function renderMonAn(arrMonAn) {
  let htmlContent = "";
  for (let mon of arrMonAn) {
    htmlContent += "<tr>";
    for (let key in mon) {
      switch (key) {
        case "linkAnh":
          htmlContent += `
                <td>
                    <img style="width: 100px;height:100px;" 
                    src="${mon[key]}" />
                </td>
                `;
          break;

        default:
          htmlContent += `
                    <td>
                        ${mon[key]}
                    </td>
                `;
      }
    }

    htmlContent += `
        <td>
            <button id="${mon["maMonAn"]}" class="btn btn-danger xoaMon">Xoá</button>
        </td>
    `;
    htmlContent += "</tr>";
  }
  document.querySelector(".tblDanhMucMonAn").innerHTML = htmlContent;
}

window.onclick = function (event) {
  let element = event.target;
  if (element.classList.contains("xoaMon")) {
    xoaMon(element.id);
  }
};

function luuLocalStorage(arrMonAn) {
  let sArrMonAn = JSON.stringify(arrMonAn);
  localStorage.setItem(DANH_SACH_MON_AN, sArrMonAn);
}

function layLocalStorage() {
  let sArrMonAn = localStorage.getItem(DANH_SACH_MON_AN);
  if (sArrMonAn) {
    arrMonAn = JSON.parse(sArrMonAn);
  }
  renderMonAn(arrMonAn);
}

// Btap 2

let hoaDon = new HoaDon();
hoaDon.renderHoaDon();

window.onclick = (event) => {
  let element = event.target;
  if (element.classList.contains("addBtn")) {
      hoaDon.themMonAnHoaDon(element.id);
  }

  if (element.classList.contains("rmvBtn")) {
      hoaDon.xoaMonAnHoaDon(element.id);
  }
};


