export let name: string = 'Sergi';

export const age: number = 29;
export const isValid: boolean = true;

name = 'Maria';

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${name}
usar el simbolo \$
expresiones ${1 + 1}
números: ${age}
booleanos: ${isValid}
`

console.log(templateString);