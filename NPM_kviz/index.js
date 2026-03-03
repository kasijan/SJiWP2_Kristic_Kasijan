import { select } from '@inquirer/prompts';

try {
  const pitanje = await select({
    message: 'Koji je glavni grad Hrvatske?',
    choices: [
      { name: 'Split', value: 'Split' },
      { name: 'Zagreb', value: 'Zagreb' },
      { name: 'Dubrovnik', value: 'Dubrovnik' },
      { name: 'Slavonski Brod', value: 'Slavonski Brod' }
    ]
  });

  if (pitanje === 'Zagreb') {
    console.log('Točan odgovor');
  } else {
    console.log('Netočan odgovor');
  }

} catch (error) {
  console.error(error);
}