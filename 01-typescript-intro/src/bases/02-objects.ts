export const pokemonIds = [1,20,30,34,66]

interface Pokemon { // interfaz es muy parecido a una clase, pero no se puede instanciar
    id: number;
    name: string;
    age?: number; // con el interrogante se da la posibilidad de que la propiedad no exista en el objeto
    height: number | undefined // con undefined, la propiedad puede no tener ningún valor, pero DEBE existir.
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    height: undefined
}

export const charmander: Pokemon = {
    id: 4,
    name: "charmander",
    height: undefined
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur)

console.log(pokemons);