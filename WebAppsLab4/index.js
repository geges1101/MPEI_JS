function test(){
    var ans = prompt('В каком году вышел первый альбом Канье Уэста?', "")
    if(ans == 2004){
        alert('Правильно!');
    } 
    else if(ans > 2004){
        alert('Раньше!');
    } 
    else if(ans < 2004){
        alert('Позже!');
    } 
    else alert('Неправильный ввод!');
  }
  