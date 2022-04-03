import { MonAnHoaDon } from "./MonAnHoaDon.js";

export class HoaDon {

    arrMonAnHoaDon = [
        {maMonAn:1,tenMonAn:'Nước lẩu haidilao',giaTien:100, soLuong: 0},
        {maMonAn:2,tenMonAn:'Mì cay thành đô',giaTien:200, soLuong: 2},
        {maMonAn:3,tenMonAn:'Mực bạch ngọc',giaTien:300, soLuong: 3},
    ];

    renderHoaDon = () => {
        let htmlContent = '';
        let thanhTien = 0;
        
        for (let monAn of this.arrMonAnHoaDon) {
            let monAnHoaDon = new MonAnHoaDon();
            monAnHoaDon = Object.assign(monAnHoaDon, monAn);

            if (monAnHoaDon.soLuong === 0) {
                continue;
            }

            htmlContent += '<tr>';
            for (let key in monAn) {
                switch(key) {
                    case 'giaTien': {
                        continue;
                    }

                    case 'thanhTien': {
                        continue;
                    }

                    default:
                        htmlContent += `<td>${monAnHoaDon[key]}</td>`;
                }
            }
            thanhTien += monAnHoaDon.thanhTien();
            htmlContent += `<td>${monAnHoaDon.thanhTien()}</td>`;
            htmlContent += '</tr>';
        }
        document.querySelector('#tblHoaDon').innerHTML = htmlContent;
        document.querySelector('#thanhTien').innerHTML = thanhTien;
    }

    themMonAnHoaDon = (maMonHoaDon) => {
        let monAnHoaDon = new MonAnHoaDon();
        for (let monAn of this.arrMonAnHoaDon) {
            if (monAn['maMonAn'] == maMonHoaDon) {
                monAn['soLuong'] += 1;
            }
        }
        this.renderHoaDon();
    }

    xoaMonAnHoaDon = (maMonHoaDon) => {
        let monAnHoaDon = new MonAnHoaDon();
        for (let monAn of this.arrMonAnHoaDon) {
            if (monAn['maMonAn'] == maMonHoaDon && monAn['soLuong'] > 0) {
                monAn['soLuong'] -= 1;
            }
        }
        this.renderHoaDon();
    }
}