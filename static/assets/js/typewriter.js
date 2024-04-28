document.addEventListener('DOMContentLoaded', function() {
    const elements = document.getElementsByClassName('typewrite');
    Array.from(elements).forEach((element) => {
        const dataPeriod = parseInt(element.getAttribute('data-period'), 10);
        const dataTypes = JSON.parse(element.getAttribute('data-type'));
        new SimpleTypeWriter(element, dataTypes[0], dataPeriod);
    });
});

class SimpleTypeWriter {
    constructor(element, text, totalTime) {
        this.element = element;
        this.text = text;
        this.totalTime = totalTime;
        this.charIndex = 0;
        this.txtElement = element.querySelector('.wrap');
        this.type();
    }

    type() {
        const timePerChar = this.totalTime / this.text.length;
        this.txtElement.innerHTML = this.text.slice(0, this.charIndex + 1);
        this.charIndex++;
        if (this.charIndex < this.text.length) {
            setTimeout(() => this.type(), timePerChar);
        }
    }
}
