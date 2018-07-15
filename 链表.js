function Node(element){
    this.element=element;
    this.next=null;
}
function link(){
    this.head=new Node("head");
    this.insert=insert;
    this.find=find;
    this.show=show;
    this.dele=dele;
}
function insert(data){
    var a = new Node(data);
    var b=this.head;
    a.next=b.next;
    b.next=a;
}
function find(data){
    var a = this.head;
    while(a){
        if(a.element==data){
            console.log("find "+data);
            return a;
        }
        a=a.next;
    }
    console.log("Not Found!You son of a *****!!");
}
function show(){
    var a=this.head.next;
    while(a){
        console.log(a.element);
        a=a.next;
    }
}
function dele(data){
    if(this.find(data)){
        var a1=this.find(data);
        var a=this.head;
        while(a.next){
            if(a.next.element==data){
                break;
            }
            a=a.next;
        }
        a.next=a1.next;
    }
    else
        console.log("NO Delete");
}
var a = new link();
a.insert(0);
a.insert("2");
a.insert(1);
a.insert(100);
a.show();
a.find("1");
a.find(5);
a.dele(100);
a.show();