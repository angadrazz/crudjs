
// program to implement stack data structure
class Stack {
    constructor() {
        this.items = [];
    }
    
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.items.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.items.length;
    }
 
    // empty the stack
    clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);

function download(url, cb){
    setTimeout(() => {
    console.log("Movies downloaded");
    cb(url);    
    }, 3000);
}

function upload(url){
    console.log("Movie uploaded")
    }
    
    
  download("url", upload);


  function getUsers(callback) {
    setTimeout(() => {
      callback([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  }
  
  function findUser(username, callback) {
    getUsers((users) => {
      const user = users.find((user) => user.username === username);
      callback(user);
    });
  }
  
  findUser('john', console.log);

  const execFn = (resolve, reject) => {
    let action = "wash clothes";
    if(!action){
    resolve("Success")
    } else {
    reject("Failure")
    }
    }
    
    
    
    const myPromise = new Promise(execFn);
    
    myPromise.then((message)=> {
    console.log("Dry the clothes", message)
    }).catch((message)=>{
    console.log("Wash again", message);
    })

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The first promise has resolved');
          resolve(10);
        }, 1 * 1000);
      });
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The second promise has resolved');
          resolve(20);
        }, 2 * 1000);
      });
      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('The third promise has resolved');
          resolve(30);
        }, 3 * 1000);
      });
      
      Promise.all([p1, p2, p3]).then((results) => {
        const total = results.reduce((p, c) => p + c);
      
        console.log(`Results: ${results}`);
        console.log(`Total: ${total}`);
      });
      