export default class ExpansionRule{
    rules: Array<string> = new Array();
    possibilities: Array<number> = new Array();
    output : string = "";

    constructor(rules: Array<string>, possibilities: Array<number>) {
        this.rules = rules;
        this.possibilities = possibilities;
        this.output = rules[0];
    }

    createRule() {
        var r = Math.random();
        var idx = 0;
        while(r > this.possibilities[idx]) {
            idx += 1;
        }
        this.output = this.rules[idx];
    }
}