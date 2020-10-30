
import { memoize } from '@delegatr/api/common';
import { AuthUser } from '@delegatr/api/view-models';
import { CanActivate, ExecutionContext, mixin } from '@nestjs/common';
import { Constructor } from '@nestjs/common/utils/merge-with-values.util';
import { Request } from 'express';
import { PermissionGroups } from '../permission-groups';
import { Privilege } from '../privilege';

export const PermissionGuard: (
  privilege: Privilege,
  group: string
) => CanActivate = memoize(createPermissionGuard);

function createPermissionGuard(
  privilege: Privilege,
  group: string
): Constructor<CanActivate> {
  class MixinPermissionGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
      const currentUser = (context.switchToHttp().getRequest<Request>() as any)
        .user as AuthUser;
      const hasPermission = () => {
        if (currentUser.role?.permissions == null) {
          return false;
        }

        return currentUser.role.permissions.some(
          (permission) =>
            permission.name === group &&
            (permission.score & privilege) === privilege
        );
      };

      return currentUser && (currentUser.role?.isGlobal || hasPermission());
    }
  }

  return mixin(MixinPermissionGuard);
}
