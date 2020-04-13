const router = require('koa-router')()
let {
  PythonShell
} = require('python-shell')

router.get('/', async (ctx, next) => {
  await ctx.render('auto')
})

router.get('/auto', async (ctx, next) => {
  await ctx.render('auto')
})

router.get('/manual', async (ctx, next) => {
  await ctx.render('manual')
})

router.get('/runpy', async (ctx, next) => {
  const query = ctx.request.query
  PythonShell.run(`${dirname}/pythonfile/${query.file}`, null, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });
  await ctx.redirect('back');
})

router.get('/pip/install', async(ctx,next) => {
  const query = ctx.request.query
  shell.exec(`pip install ${query.name}`)
  await ctx.redirect('/');
})

module.exports = router