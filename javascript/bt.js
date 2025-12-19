let thuVien = {
  danhSachSach: [],
  themSach: function(tieuDe, tacGia, namXuatBan) {
    let sachMoi = {
      tieuDe: tieuDe,
      tacGia: tacGia,
      namXuatBan: namXuatBan,
      daMuon: false 
    };
    this.danhSachSach.push(sachMoi);
    console.log(`Đã thêm sách: ${tieuDe} vào thư viện.`);
  },
  timSach: function(tieuDe) {
    for (let sach of this.danhSachSach) {
      if (sach.tieuDe === tieuDe) {
        return sach;
      }
    }
    return null;
  },
  muonSach: function(tieuDe) {
    let sach = this.timSach(tieuDe);
    if (sach) {
      if (!sach.daMuon) {
        sach.daMuon = true;
        console.log(`Sách "${tieuDe}" đã được mượn thành công.`);
      } else {
        console.log(`Sách "${tieuDe}" đã được mượn trước đó.`);
      }
    } else {
      console.log(`Không tìm thấy sách có tiêu đề "${tieuDe}".`);
    }
  }
};
thuVien.themSach('Doraemon', 'Fujiko F. Fujio', 1969);
thuVien.themSach('Conan', 'Aoyama Gōshō', 1997);
let sachTimDuoc = thuVien.timSach('Doraemon');
console.log(sachTimDuoc);
thuVien.muonSach('Conan');
thuVien.muonSach('Conan');
thuVien.muonSach('Doraemon'); 
