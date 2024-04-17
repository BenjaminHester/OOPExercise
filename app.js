const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`
};
mulan.quote = function() {
    return "Dishonor! Dishonor on your whole family!";
};
mulan.storyline = function() {
    return `The movie ${this.title} is about ${this.main}.`;
};
const tangled = {
    title: "Tangled",
    main: "Rapunzel"
};
tangled.quote = function() {
    return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
};
tangled.storyline = function() {
    return `The movie ${this.title} is about ${this.main}.`;
};
function DisneyMovie(t,m) {
    this.title = t;
    this.main = m;
};
DisneyMovie.prototype.storyline = function() {
    return `The movie ${this.title} is about ${this.main}.`;
};
const mulan1 = new DisneyMovie("Mulan", "Fa Mulan");
const tangled1 = new DisneyMovie("Tangled", "Rapunzel");
class DM {
    constructor(t,m) {
        this.title = t;
        this.main = m;
    };
};
DM.prototype.storyline = function() {
    return `The movie ${this.title} is about ${this.main}.`;
};
const mulan2 = new DM("Mulan", "Fa Mulan");
const tangled2 = new DM("Tangled", "Rapunzel");
DM.loveDisneyMovies = function() {
    return "I Love Disney Movies!";
};
console.log(DM.loveDisneyMovies());
class DMCast extends DM {}
class DMCast extends DM {
    constructor(t,m,c) {
        super(t,m);
        this.cast = c;
    };
};
const mulan3 = new DMCast("Mulan", "Fa Mulan", {mulan: "Ming-Na Wen", mushu: "Eddie Murphy", shang: "BD Wong", theEmperor: "Pat Morita"});
const rapunzel3 = new DMCast("Tangled", "Rapunzel", {rapunzel: "Mandy Moore", flynnRider: "Zachary Levi", motherGothel: "Donna Murphy"});