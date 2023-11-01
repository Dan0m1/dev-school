let Vector = function (components) {
    this.array = components;
    this.add = function(anotherVector){
        if(this.array.length !== anotherVector.array.length) throw Error;
        return new Vector(this.array.map((el, index) => el+anotherVector.array[index]))
    }
    this.subtract = function(anotherVector){
        if(this.array.length !== anotherVector.array.length) throw Error;
        return new Vector(this.array.map((el, index) => el-anotherVector.array[index]))
    }
    this.dot = function(anotherVector){
        if(this.array.length !== anotherVector.array.length) throw Error;
        return this.array.reduce((sumOfDot, value, index) => sumOfDot + value*anotherVector.array[index], 0)
    }
    this.norm = function(){
        return Math.sqrt(this.array.reduce((sumOfSqr, value) => sumOfSqr + value**2, 0));
    }
    this.toString = function(){
        return "(" + this.array.toString() + ")";
    }
    this.equals = function(anotherVector){
        if(this.array.length !== anotherVector.array.length) return false;
        for(let index in this.array){
            if(this.array[index] !== anotherVector.array[index]) return false;
        }
        return true;
    }
}