import test from 'ava';

import main from '../src/main';

test('my passing test', t => {
  t.true(main() === 'main');
});
