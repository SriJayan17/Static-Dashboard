import { NOTIFICATION_TYPES } from "../../../mocks/app";

import BugIcon from '../../../svgs/bug.svg?react';
import RegistrationIcon from '../../../svgs/registration.svg?react';
import SubscriptionIcon from '../../../svgs/subscription.svg?react';

export const ICON_MAP = {
  [NOTIFICATION_TYPES.BUG]: BugIcon,
  [NOTIFICATION_TYPES.REGISTRATION]: RegistrationIcon,
  [NOTIFICATION_TYPES.SUBSCRIPTION]: SubscriptionIcon,
}