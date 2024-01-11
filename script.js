let num = document.querySelector('.theDiv');
class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        let textOut = '';
        for (let i = 0; i < text.length; i++) {
            if (this.inkLevel >= 0.5) {
                textOut += text[i];
                if (text[i] != " ") {
                    this.inkLevel -= 0.5;
                }
            } 
        }
        return document.write(`<p style="color: ${this.color}">${textOut}</p>`),
        console.log(this.inkLevel);
    }
}

const mark = new Marker('orange', 50);
mark.print("Hello, i am the printed text!")


class RefillableMarker extends Marker {
    refill() {
        this.inkLevel = 100;
    }
}

const refMark = new RefillableMarker('red', 5);
refMark.print("Hello, i am the mark ");
refMark.refill()
refMark.print("Hello, i am the printed text!");