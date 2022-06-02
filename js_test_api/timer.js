function f () {
    console.log('2');
}

// 延后执行
// var id1 = setTimeout(f,1000);

setTimeout(function(a,b){
    console.log(a+b);
  },1000,1,1);

// 循环执行
// var id2 = setInterval(f,1000);

// 取消延后执行
// clearTimeout(id1);
// 取消循环执行
// clearInterval(id2);