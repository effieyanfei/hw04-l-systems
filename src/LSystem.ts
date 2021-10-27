import ExpansionRule from './ExpansionRule';

class LSystem {
    iteration: number = 0;
    axiom: string = "";
    rules: Map<string, ExpansionRule> = new Map();
    fullGrammar: string = ""

    constructor(a: string, iter: number) {
        this.iteration = iter;
        this.axiom = a;
        this.makeRules();
        this.createFullGrammar();
    }

    makeRules() {
        var r1 = new ExpansionRule(new Array<string>("F[-F]F[+F]"), new Array<number>(1.0));
        this.rules.set('F', r1);
    }

    createFullGrammar() {
        var current = this.axiom;
        var count = 0;
        while(count < this.iteration) {
            count ++;
            var idx = 0;
            var updated = "";
            while(idx < current.length) {
                var k = current.substring(idx, idx + 1);
                if(this.rules.has(k)){
                    var r: any = this.rules.get(k);
                    r.createRule();
                    updated += r.output;
                } else {
                    updated += k;
                }
                idx ++;
            }
            current = updated;
        }
        this.fullGrammar = current;
    }

};

export default LSystem;