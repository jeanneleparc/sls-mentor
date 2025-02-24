import { Rule } from '../types';
import AsyncSpecifyFailureDestination from './asyncSpecifyFailureDestination';
import AutoscaleRdsInstanceEnabled from './autoscaleRdsInstanceEnabled';
import CloudFrontSecurityHeaders from './cloudFrontSecurityHeaders';
import CloudFrontSSLCertificate from './cloudFrontSSLCertificate';
import CognitoSignInCaseInsensitivity from './cognitoSignInCaseInsensitivity';
import DefinedBackupRetentionPeriodOrTransitionToColdStorage from './definedBackupRetentionPeriodOrTransitionToColdStorage';
import DefinedLogsRetentionDuration from './definedLogsRetentionDuration';
import LightBundleRule from './lightBundle';
import LimitedAmountOfLambdaVersions from './limitedAmountOfVersions';
import NoDefaultMemory from './noDefaultMemory';
import NoDeprecatedRuntime from './noDeprecatedRuntime';
import NoMaxTimeout from './noMaxTimeout';
import NoMonoPackage from './noMonoPackage';
import NoProvisionedConcurrency from './noProvisionedConcurrency';
import NoSharedIamRoles from './noSharedIamRoles';
import NoUnauthorizedApiGatewaysV2Routes from './noUnauthorizedApiGatewaysV2Routes';
import S3OnlyAllowHTTPS from './s3OnlyAllowHTTPS';
import ServerSideEncryptionEnabled from './serverSideEncryptionEnabled';
import SpecifyDlqOnEventBridgeRule from './specifyDlqOnEventBridgeRule';
import SpecifyDlqOnSqs from './specifyDlqOnSqs';
import UnderMaxMemory from './underMaxMemory';
import UseArm from './useArm';
import UseIntelligentTiering from './useIntelligentTiering';

export {
  AsyncSpecifyFailureDestination,
  AutoscaleRdsInstanceEnabled,
  CloudFrontSecurityHeaders,
  CloudFrontSSLCertificate,
  CognitoSignInCaseInsensitivity,
  DefinedBackupRetentionPeriodOrTransitionToColdStorage,
  DefinedLogsRetentionDuration,
  LightBundleRule,
  LimitedAmountOfLambdaVersions,
  NoDefaultMemory,
  NoDeprecatedRuntime,
  NoMaxTimeout,
  NoMonoPackage,
  NoProvisionedConcurrency,
  NoSharedIamRoles,
  NoUnauthorizedApiGatewaysV2Routes,
  S3OnlyAllowHTTPS,
  ServerSideEncryptionEnabled,
  SpecifyDlqOnEventBridgeRule,
  SpecifyDlqOnSqs,
  UnderMaxMemory,
  UseArm,
  UseIntelligentTiering,
};

export const rules: Rule[] = [
  LightBundleRule,
  NoMonoPackage,
  NoDefaultMemory,
  NoMaxTimeout,
  NoSharedIamRoles,
  NoDeprecatedRuntime,
  UseArm,
  LimitedAmountOfLambdaVersions,
  UnderMaxMemory,
  AsyncSpecifyFailureDestination,
  UseIntelligentTiering,
  ServerSideEncryptionEnabled,
  SpecifyDlqOnSqs,
  CognitoSignInCaseInsensitivity,
  DefinedLogsRetentionDuration,
  SpecifyDlqOnEventBridgeRule,
  CloudFrontSecurityHeaders,
  CloudFrontSSLCertificate,
  S3OnlyAllowHTTPS,
  NoProvisionedConcurrency,
  AutoscaleRdsInstanceEnabled,
  DefinedBackupRetentionPeriodOrTransitionToColdStorage,
  NoUnauthorizedApiGatewaysV2Routes,
];
