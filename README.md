# Codio slack message notification

Posts a message to a Slack incoming webhook, coloured green or red by job status. Composite action: `bash` + `curl` + `jq`, no runtime and no bundled sources, so it is unaffected by Node.js runtime deprecations on the runners.

# Usage

See [action.yml](action.yml)

```yaml
steps:

- uses: codio/codio-slack-action@master
  if: always()
  with:
    slack_hook_url: ${{ secrets.SLACK_WEBHOOK_URL }}
    message: "${{ github.workflow }} for ${{ github.repository }} has ${{ job.status }}"
    success: ${{ job.status }}
```

| Input | Required | Default | |
|---|---|---|---|
| `slack_hook_url` | yes | | Incoming webhook URL |
| `message` | yes | | Message text |
| `success` | no | `true` | `true` or `success` renders green, anything else red |

The step fails if the webhook does not answer 2xx.

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
