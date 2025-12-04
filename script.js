// اليوم والتاريخ الميلادي تلقائي
const today = new Date();

const days = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];

document.getElementById("dayName").innerText = days[today.getDay()];
document.getElementById("todayDate").innerText = today.toISOString().split("T")[0];


// توليد أرقام 0 → 200
function numbers(max){
  let opt = "";
  for(let i=0;i<=max;i++){
    opt+= `<option value="${i}">${i}</option>`;
  }
  return opt;
}


// صف الموظفين
function staffRow(){
  return `
  <tr>
    <td>
      <select>
        <option value="">اختر</option>
        <option>مشرفة عامة</option>
        <option>مشرفة عبايات</option>
        <option>مشرفة جوالات</option>
        <option>قهوجية / قهوجي</option>
        <option>مساعد القهوجية</option>
        <option>صباب / صبابات</option>
        <option>عاملة نظافة</option>
        <option>عمال تقديم الخدمة</option>
      </select>
    </td>
    <td>
      <select>${numbers(200)}</select>
    </td>
    <td><input type="text"></td>
  </tr>`;
}


// صف الخدمات
function serviceRow(){
  return `
  <tr>
    <td><input type="text" placeholder="اكتب الصنف"></td>
    <td>
      <select>${numbers(200)}</select>
    </td>
    <td><input type="text"></td>
  </tr>`;
}


// إضافة 10 صفوف
for(let i=0;i<10;i++){
  staffTable.innerHTML += staffRow();
  insideTable.innerHTML += serviceRow();
  outsideTable.innerHTML += serviceRow();
}


// حذف الصفوف الفاضية وقت الطباعة
function cleanTable(tableId){
  const table = document.getElementById(tableId);
  const rows = Array.from(table.rows).slice(1);

  rows.forEach(row => {

    let typeField = row.cells[0].querySelector("select, input");
    let numberField = row.cells[1].querySelector("select");

    let typeValue = typeField.value.trim();
    let numberValue = numberField.value;

    if (typeValue === "" || numberValue === "0") {
      row.remove();
    }
  });
}


// الطباعة
function prepareAndPrint(){
  cleanTable("staffTable");
  cleanTable("insideTable");
  cleanTable("outsideTable");

  window.print();
}
