class Warrior{
    constructor() {
        this._level = 1;
        this._experience = 100;
        this._achievements = [];
        this._ranksArray = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    }
    level(){
        return this._level;
    }
    rank(){
        return this._ranksArray[(Math.floor(this._level/10))];
    }
    achievements(){
        return this._achievements;
    }
    experience(){
        return this._experience;
    }
    training(trainingInput){
        if (trainingInput[2] > this._level) return "Not strong enough";
        this._experience += trainingInput[1];
        this._achievements.push(trainingInput[0]);
        this.checkExperience();
        this.updateLevel();
        return trainingInput[0];
    }
    battle(enemyLevel){
        if (enemyLevel > 100 || enemyLevel < 1) return "Invalid level";
        if (enemyLevel - this._level >= 5 && (Math.floor(enemyLevel/10)) > (Math.floor(this._level/10))){
            return "You've been defeated";
        }
        let stringToReturn;
        if (enemyLevel === this._level){
            this._experience += 10;
            stringToReturn = "A good fight";
        }
        else if (this._level - enemyLevel === 1){
            this._experience += 5;
            stringToReturn = "A good fight";
        }
        else if (this._level - enemyLevel >= 2){
            stringToReturn ="Easy fight";
        }
        else if (enemyLevel - this._level >= 1) {
            this._experience += 20 * (enemyLevel - this._level) ** 2;
            stringToReturn = "An intense fight";
        }
        this.checkExperience();
        this.updateLevel();
        return stringToReturn;
    }
    checkExperience(){
        if(this._experience > 10000) this._experience = 10000;
    }
    updateLevel(){
        if(this._level !== 100 && this._experience >= (this._level+1)*100) {
            this._level = Math.floor(this._experience / 100);
        }
    }
}