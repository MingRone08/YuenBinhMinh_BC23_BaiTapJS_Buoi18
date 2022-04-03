export class MonAnHoaDon {
    maMonAn = '';
    tenMonAn = '';
    giaTien = 0;
    soLuong = 0;

    thanhTien = () => {
        return this.soLuong * this.giaTien;
    }
}