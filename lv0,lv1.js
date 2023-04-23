// lv0
// 使用Object创建对象
let mypush =new Object()
Object.name='bily';
Object.age=13;
Object.sex='男';
Object.score=90;
console.log(mypush)
// 使用对象字面量创建对象
let mypush1={
    name:"Saystar",
    age:23,
    sex:'女',
    score:87
}
console.log(mypush1)
// 使用构造函数创建对象
function Person(){
    this.name='Tom';
    this.age=17;
    this.sex='男';
    this.score=79;
}
let mypush3=new Person;
console.log(mypush3)
// lv1
let a=new Array();
mypush.apply(this,a);
function mypush(b){
    a[a.length]=b;

}
let b=3;
a.mypush(b);
console.log(a);