import { select } from '@inquirer/prompts';

try {
  const pitanje = await select({
    message: 'Odaberi opciju: ',
    choices: [
      { name: 'hrv', value: 'Hrvatski jezik' },
      { name: 'str', value: 'Strani jezik' },
      { name: 'mat', value: 'Matematika' },
      { name: 'pro', value: 'Programiranje' }
    ]
  });

  if (pitanje === 'Hrvatski jezik') {
    console.log('Odabrao si Hrvatski jezik!');
  } else if (pitanje === 'Strani jezik'){ 
    console.log('Odabrao si Strani jezik!');
  }else if (pitanje === 'Matematika'){ 
    console.log('Odabrao si Matematiku!');
  }else if (pitanje === 'Programiranje'){ 
    console.log('Odabrao si Programiranje!');
  }

} catch (error) {
  console.error(error);
}