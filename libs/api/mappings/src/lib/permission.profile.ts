import { Permission } from '@delegatr/api/permission';
import { PermissionVm } from '@delegatr/api/view-models';
import { AutoMapper, mapFrom, Profile, ProfileBase } from 'nestjsx-automapper';

@Profile()
export class PermissionProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(Permission, PermissionVm)
    .forMember((d)=>d.name, mapFrom((s)=>s.group))
  }
}
