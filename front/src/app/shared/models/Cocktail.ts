export class Cocktail {
    constructor(
        public id: number,
        public name: string,
        public alternativeName: string,
        public tags: string[],
        public category: string,
        public iba: string,
        public isAlcoholic: boolean,
        public glass: string,
        public instructions: string[],
        public thumbnail: string,
        public ingredients: string[],
        public measures: string[]
    ) { } 
}