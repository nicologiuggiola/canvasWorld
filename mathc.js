class MathC{
    static randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    static randomFloatFromInterval(min, max, decimal = 3) {
        const tempMin = min * (10 ** decimal);
        const tempMax = max * (10 ** decimal);
        const random = this.randomIntFromInterval(tempMin, tempMax);
        const floatRandom = random / (10 ** decimal);
        return floatRandom;
    }
}