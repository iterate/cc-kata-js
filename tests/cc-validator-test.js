const test = require('tape');
const ccValidator = require('../client/cc/lib/ccValidator');

test('credit card numbers is all digits', function (t) {
    const testdata = 
        [ { val: '1111222233334444', res: true }
        , { val: '1234abcd5678efgh', res: false }
        , { val: 'FEABFEABFEABFEAB', res: false }
        , { val: '!@#$%^&*(*!@(!)@', res: false }
        ];

    t.plan(testdata.length + 1);

    t.equal(typeof ccValidator, 'function');
    testdata.map(d => t.equal(ccValidator(d.val), d.res))
});
