import { FunctionConfiguration } from '@aws-sdk/client-lambda';
import { fetchAllLambdaConfigurations } from '../../aws-sdk-helpers';
import { Rule } from '../../types';

const isLambdaRoleShared = (
  lambdaConfiguration: FunctionConfiguration,
  sharedRoles: (string | undefined)[],
) => sharedRoles.includes(lambdaConfiguration.Role);

const run: Rule['run'] = async resourceArns => {
  const lambdaConfigurations = await fetchAllLambdaConfigurations(resourceArns);
  const roles = lambdaConfigurations.map(
    ({ configuration }) => configuration.Role,
  );
  const sharedRoles = roles.filter(
    role => roles.filter(r => r === role).length > 1,
  );
  const results = lambdaConfigurations.map(({ configuration, arn }) => ({
    arn,
    success: !isLambdaRoleShared(configuration, sharedRoles),
    role: configuration.Role,
  }));

  return { results };
};

const rule: Rule = {
  ruleName: 'Lambda: No Shared IAM Roles',
  errorMessage:
    'The following functions have roles used by 1 or more other functions',
  run,
  fileName: 'noSharedIamRoles',
  categories: ['Security', 'Stability'],
  level: 4,
  service: 'Lambda',
};

export default rule;
