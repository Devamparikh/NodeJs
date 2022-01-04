console.log('hello world');

const circle1 = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

circle1.draw();



// Factory Function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}


const circle2 = createCircle(1);
circle2.draw();


// constructor Function
function Circle(radius){
    console.log('this', this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

Circle.call({},1);
Circle.call({},[1,2,3]);


const another = new Circle(1);


//primitive and referance types

let x = {value: 10};
let y = x;

x.value = 20;
console.log(x);
console.log(y);


// let number ={value:10};
// function increase(number) {
//     number++;
// }
// increase(number);
// console.log(number);

// obj
let obj ={ value: 10};
function increase(obj) {function Circle(radius){
//     this.radius = radius;

//     let defaultLocation = {x:0, y:0};

//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     };

//     this.draw = function(){
//         console.log('draw');
//     };
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value){
//             if(!value.x || !value.y){
//                 throw new Error('Invalid location.');
//             }
//             defaultLocation = value;
//         }
//     });
// }

// const circle4 = new Circle(10);
// circle4.defaultLocation = 1;
// circle4.draw();

    obj.value++;
}
increase(obj);
console.log(obj);

// adding/removing properties
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle3 = new Circle(10);
Circle.location = {x: 1};
const propertyName = 'center location';
circle3[propertyName] = {x:1};
delete circle3.location;


//enumerating properties

// function Circle(radius){
//     this.radius = radius;

//     let defaultLocation = {x:0, y:0};

//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     };

//     this.draw = function(){
//         console.log('draw');
//     };
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//             return defaultLocation;
//         },
//         set: function(value){
//             if(!value.x || !value.y){
//                 throw new Error('Invalid location.');
//             }
//             defaultLocation = value;
//         }
//     });
// }

// const circle4 = new Circle(10);
// circle4.defaultLocation = 1;
// circle4.draw();




//exercise

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
            throw new Error('stpwh has already started');

        running = true;
        startTime = new Date();
    };

    this.stop = function(){
        if(!running)
            throw new Error('stpwh is not started');

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) /1000;
        duration += seconds;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration =0;
    };

    Object.defineProperty(this,'duration', {
        get: function() { return duration; }
    });


}



