const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
  if (x == 5) {
    // ao chegar no índice 5, sai do laço corrente
    break;
  }
  console.log(`${x} = ${nums[x]}`);
}

for (y in nums) {
  if (y == 5) {
    // ao chegar o índice 5, interrompe o laço corrente e vai para a próxima repetição
    continue;
  }
  console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par = ${a},${b}`);
  }
}
