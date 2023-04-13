import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    } // al declarar un método get de esta manera, es asignado como una propiedad de la classe, un getter
    // sigue siendo un método de igual manera.

    constructor(
        public readonly id: number,
        public name: string,
        // public imageUrl: string,
        ) {}

    private scream() {
        console.log(`${this.name.toUpperCase()} !!!!`);
    } // al declarar un método privado solo se puede acceder a él dentro de la instancia.

    speak() {
        console.log(`${this.name}, ${this.imageUrl}`);
        this.scream()
    } // si no se declara si es privado o público, por defecto es público.

    async getMoves(): Promise<Move[]> {
        // const moves = 10
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves);

        return data.moves;
    }

}

export const charmander = new Pokemon( 4, 'Charmander')

// charmander.id = 10;
// charmander.name = 'Mew';

// console.log(charmander);

// charmander.speak();
// charmander.scream();

charmander.getMoves();

// siguiente video 9: Getters, metodos y THIS!