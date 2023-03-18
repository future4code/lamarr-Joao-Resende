import {
  Character,
  validateCharacter,
} from "./validateCharacter";


// export const performAttack = (attacker: Character, defender: Character) => {
//   if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//     throw new Error("Invalid character");
//   }

//   if (attacker.strength > defender.defense) {
//     defender.life -= attacker.strength - defender.defense;
//   }
// };

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};


// c) A diferença entre as duas funções é que utilizando a injeção de dependências conseguimos utilizar um mock para fazer o teste, o que não seria possível utilizando a função validateCharacter.