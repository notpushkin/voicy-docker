// Dependencies
const logAnswerTime = require('../helpers/logAnswerTime')
const checkAdminLock = require('../middlewares/adminLock')
const { reportUsage } = require('../helpers/report')

function setupTimecodes(bot) {
  bot.command('timecodes', checkAdminLock, ctx => {
    handle(ctx)
  })
}

async function handle(ctx) {
  await ctx.replyWithMarkdown(ctx.i18n.t('oops'))
  logAnswerTime(ctx, '/timecodes')
  reportUsage(ctx, '/url')
}

// Exports
module.exports = setupTimecodes