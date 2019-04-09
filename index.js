/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readlineSync = require('readline-sync');
var fs = require('fs');
var students = [];
function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

 function  showMenu(){
    console.log('1. Show danh sách học sinh');
    console.log('2. Thêm 1 học sinh mới');
    console.log('3. Lưu và thoát');

    var option = readlineSync.question('> your option');
   switch(option) {
       case '1': 
          showStudent(); 
          showMenu();
          break;
       case '2': 
          showCreateStudent(); 
          showMenu();
          break;
       case '3':
           saveAndExit(); 
           break;
       default: 
          console.log('Wrong option');
          showMenu();
          break;
       
   }
   
 }
function showStudent(){
    for( var std of students) {
        console.log(std.name, std.age);
        
    }
}
function showCreateStudent(){
    var name = readlineSync.question('name:');
    var age = readlineSync.question('age:');
    var student = { name: name, age: parseInt(age)};
    students.push(student);
}
function saveAndExit(){
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json',content, {encoding: 'utf8'});
}


 function main(){
     loadData();
    showMenu();
      
    
     
 }
 main();
