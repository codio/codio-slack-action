import * as core from '@actions/core'
import bent from 'bent'

const main = async () => {
  try {
    const hook = core.getInput('slack_hook_url', { required: true })
    const success = core.getInput('success')
    const successBool = success === 'true' || success === 'success'
    const message = core.getInput('message', { required: false })

    console.log(`Status: ${core.getInput('success')}`)

    const payload = {
      attachments: [{
      text: message,
      color: (successBool) ? "good" : "#FF0000"
      }]
    }

    const post = bent('POST', 200)
    await post(hook, payload)
  } catch (error) {
    console.log(error)
    core.setFailed((error as Error).message)
  }
}

main()
