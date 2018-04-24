export default class Utils {
    
    static randomFromList(list) {
        const index = Math.round(Math.random() * (list.length - 1) + 1) - 1;

        return list[index];
    }

    static randomValue(min, max) {
        console.log("Created random value");
        return Math.round(Math.random() * (max - min) + min);
    }
}