import { Router } from 'express';

var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Calculator' });
});
router.post('/', function(req, res, next) {
  let resultValue = 0;
  const b = req.body;

  if (b.operationType && b.operand1 && b.operand2) {
    const operationTypes = {
      'sum': '+',
      'sub': '-',
      'mul': '*',
      'div': '/'
    };
    if (b.operationType in operationTypes) {
      const op = operationTypes[b.operationType];
      resultValue = eval(`${b.operand1} ${op} ${b.operand2}`);
    }
  }

  res.render('index', {
    title: 'Express Calculator',
    resultValue
  });
});

export default router;
