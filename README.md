# sam-lambda-express-template

Template for simple AWS Lambdas deployed by GitHub Actions.

You have to define several variables and secrets in the repository settings:

- `vars.STACK_NAME` - name of the cloudformation stack in AWS
- `vars.MAX_MEMORY`- maximum memory for the Lambda (number only, e.g. `128`)
- `vars.API_KEY` - key to secure the API endpoint. Authorization is disabled if blank
- `vars.REGION-` - WS region to deploy the function to, e.g. `eu-central-1`  
- `secrets.AWS_ACCESS_KEY_ID`
- `secrets.AWS_SECRET_ACCESS_KEY`

Optionally, you can create `production` environment and add the variables to the environment. Then uncomment the line setting the environment in the `deploy.yml` file

The API URL is printed out in the GitHub action in the SAM Deploy step.

Minimal IAm-Policy for the AWS user whose AWS credentials are used to create the stack:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Statement1",
      "Effect": "Allow",
      "Action": [
        "cloudformation:*",
        "codepipeline:*",
        "codebuild:*",
        "s3:*",
        "lambda:*",
        "apigateway:*",
        "iam:PassRole",
        "iam:CreateRole",
        "iam:DeleteRole",
        "iam:TagRole",
        "iam:AttachRolePolicy",
        "iam:DetachRolePolicy",
        "iam:GetRole"
      ],
      "Resource": [
        "*"
      ]
    }
  ]
}
```
