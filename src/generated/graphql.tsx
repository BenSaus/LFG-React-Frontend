import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  achievement?: Maybe<Achievement>;
  achievements?: Maybe<Array<Maybe<Achievement>>>;
  achievementsConnection?: Maybe<AchievementConnection>;
  application?: Maybe<Application>;
  applications?: Maybe<Array<Maybe<Application>>>;
  applicationsConnection?: Maybe<ApplicationConnection>;
  business?: Maybe<Business>;
  businesses?: Maybe<Array<Maybe<Business>>>;
  businessesConnection?: Maybe<BusinessConnection>;
  group?: Maybe<Group>;
  groups?: Maybe<Array<Maybe<Group>>>;
  groupsConnection?: Maybe<GroupConnection>;
  invite?: Maybe<Invite>;
  invites?: Maybe<Array<Maybe<Invite>>>;
  invitesConnection?: Maybe<InviteConnection>;
  room?: Maybe<Room>;
  rooms?: Maybe<Array<Maybe<Room>>>;
  roomsConnection?: Maybe<RoomConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
  meExtra?: Maybe<UsersPermissionsMeExtra>;
};


export type QueryAchievementArgs = {
  id: Scalars['ID'];
};


export type QueryAchievementsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryAchievementsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryApplicationArgs = {
  id: Scalars['ID'];
};


export type QueryApplicationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryApplicationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBusinessArgs = {
  id: Scalars['ID'];
};


export type QueryBusinessesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBusinessesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGroupsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryInviteArgs = {
  id: Scalars['ID'];
};


export type QueryInvitesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryInvitesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoomArgs = {
  id: Scalars['ID'];
};


export type QueryRoomsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoomsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Achievement = {
  __typename?: 'Achievement';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  name?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type AchievementUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};

export type Morph = AcceptApplicationPayload | RejectApplicationPayload | AcceptInvitePayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | UsersPermissionsMeExtra | Achievement | AchievementConnection | AchievementAggregator | AchievementGroupBy | AchievementConnectionId | AchievementConnectionCreated_At | AchievementConnectionUpdated_At | AchievementConnectionDescription | AchievementConnectionImage | AchievementConnectionName | AchievementConnectionCreated_By | AchievementConnectionUpdated_By | CreateAchievementPayload | UpdateAchievementPayload | DeleteAchievementPayload | Application | ApplicationConnection | ApplicationAggregator | ApplicationGroupBy | ApplicationConnectionId | ApplicationConnectionCreated_At | ApplicationConnectionUpdated_At | ApplicationConnectionApplicant | ApplicationConnectionMessage | ApplicationConnectionGroup | ApplicationConnectionStatus | ApplicationConnectionCreated_By | ApplicationConnectionUpdated_By | CreateApplicationPayload | UpdateApplicationPayload | DeleteApplicationPayload | Business | BusinessConnection | BusinessAggregator | BusinessGroupBy | BusinessConnectionId | BusinessConnectionCreated_At | BusinessConnectionUpdated_At | BusinessConnectionName | BusinessConnectionAddress | BusinessConnectionWebsite_Url | BusinessConnectionDescription | BusinessConnectionImage | BusinessConnectionCreated_By | BusinessConnectionUpdated_By | CreateBusinessPayload | UpdateBusinessPayload | DeleteBusinessPayload | Group | GroupConnection | GroupAggregator | GroupAggregatorSum | GroupAggregatorAvg | GroupAggregatorMin | GroupAggregatorMax | GroupGroupBy | GroupConnectionId | GroupConnectionCreated_At | GroupConnectionUpdated_At | GroupConnectionDescription | GroupConnectionOpen_Slots | GroupConnectionBooking_Status | GroupConnectionMax_Age | GroupConnectionMin_Age | GroupConnectionBookdate | GroupConnectionName | GroupConnectionLeader | GroupConnectionCreated_By | GroupConnectionUpdated_By | CreateGroupPayload | UpdateGroupPayload | DeleteGroupPayload | Invite | InviteConnection | InviteAggregator | InviteGroupBy | InviteConnectionId | InviteConnectionCreated_At | InviteConnectionUpdated_At | InviteConnectionInvitee | InviteConnectionMessage | InviteConnectionGroup | InviteConnectionStatus | InviteConnectionCreated_By | InviteConnectionUpdated_By | CreateInvitePayload | UpdateInvitePayload | DeleteInvitePayload | Room | RoomConnection | RoomAggregator | RoomGroupBy | RoomConnectionId | RoomConnectionCreated_At | RoomConnectionUpdated_At | RoomConnectionName | RoomConnectionDescription | RoomConnectionImage | RoomConnectionBusiness | RoomConnectionCreated_By | RoomConnectionUpdated_By | CreateRoomPayload | UpdateRoomPayload | DeleteRoomPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserAggregatorSum | UsersPermissionsUserAggregatorAvg | UsersPermissionsUserAggregatorMin | UsersPermissionsUserAggregatorMax | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionAge | UsersPermissionsUserConnectionImage | UsersPermissionsUserConnectionAbout | UsersPermissionsUserConnectionOpen_To_Invite | UsersPermissionsUserConnectionHide_Age | UsersPermissionsUserConnectionApproved | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type AcceptApplicationPayload = {
  __typename?: 'acceptApplicationPayload';
  group?: Maybe<Group>;
  application?: Maybe<Application>;
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  open_slots?: Maybe<Scalars['Int']>;
  booking_status?: Maybe<Enum_Group_Booking_Status>;
  max_age?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
  bookdate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  leader?: Maybe<UsersPermissionsUser>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  applications?: Maybe<Array<Maybe<Application>>>;
  members?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  invites?: Maybe<Array<Maybe<Invite>>>;
  preferred_rooms?: Maybe<Array<Maybe<Room>>>;
};


export type GroupApplicationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GroupMembersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GroupInvitesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type GroupPreferred_RoomsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export enum Enum_Group_Booking_Status {
  Booked = 'booked',
  NotBooked = 'notBooked'
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  age?: Maybe<Scalars['Int']>;
  image?: Maybe<UploadFile>;
  about?: Maybe<Scalars['String']>;
  open_to_invite: Scalars['Boolean'];
  hide_age: Scalars['Boolean'];
  approved: Scalars['Boolean'];
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  groups?: Maybe<Array<Maybe<Group>>>;
  leading_groups?: Maybe<Array<Maybe<Group>>>;
  achievements?: Maybe<Array<Maybe<Achievement>>>;
};


export type UsersPermissionsUserGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsUserLeading_GroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsUserAchievementsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type Application = {
  __typename?: 'Application';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  applicant?: Maybe<UsersPermissionsUser>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Group>;
  status?: Maybe<Enum_Application_Status>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export enum Enum_Application_Status {
  Accepted = 'accepted',
  Rejected = 'rejected',
  Undecided = 'undecided'
}

export type Invite = {
  __typename?: 'Invite';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  invitee?: Maybe<UsersPermissionsUser>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Group>;
  status?: Maybe<Enum_Invite_Status>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export enum Enum_Invite_Status {
  Accepted = 'accepted',
  Rejected = 'rejected',
  Undecided = 'undecided'
}

export type Room = {
  __typename?: 'Room';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  business?: Maybe<Business>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  groups_preferred?: Maybe<Array<Maybe<Group>>>;
};


export type RoomGroups_PreferredArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Business = {
  __typename?: 'Business';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  rooms?: Maybe<Array<Maybe<Room>>>;
};


export type BusinessRoomsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RejectApplicationPayload = {
  __typename?: 'rejectApplicationPayload';
  application?: Maybe<Application>;
};

export type AcceptInvitePayload = {
  __typename?: 'acceptInvitePayload';
  group?: Maybe<Group>;
  invite?: Maybe<Invite>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsMeExtra = {
  __typename?: 'UsersPermissionsMeExtra';
  id: Scalars['ID'];
  username: Scalars['String'];
  about?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  hide_age?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  open_to_invite: Scalars['Boolean'];
  image?: Maybe<UploadFile>;
  achievements?: Maybe<Array<Maybe<Achievement>>>;
};

export type AchievementConnection = {
  __typename?: 'AchievementConnection';
  values?: Maybe<Array<Maybe<Achievement>>>;
  groupBy?: Maybe<AchievementGroupBy>;
  aggregate?: Maybe<AchievementAggregator>;
};

export type AchievementGroupBy = {
  __typename?: 'AchievementGroupBy';
  id?: Maybe<Array<Maybe<AchievementConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AchievementConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AchievementConnectionUpdated_At>>>;
  description?: Maybe<Array<Maybe<AchievementConnectionDescription>>>;
  image?: Maybe<Array<Maybe<AchievementConnectionImage>>>;
  name?: Maybe<Array<Maybe<AchievementConnectionName>>>;
  created_by?: Maybe<Array<Maybe<AchievementConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<AchievementConnectionUpdated_By>>>;
};

export type AchievementConnectionId = {
  __typename?: 'AchievementConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AchievementConnection>;
};

export type AchievementConnectionCreated_At = {
  __typename?: 'AchievementConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AchievementConnection>;
};

export type AchievementConnectionUpdated_At = {
  __typename?: 'AchievementConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AchievementConnection>;
};

export type AchievementConnectionDescription = {
  __typename?: 'AchievementConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AchievementConnection>;
};

export type AchievementConnectionImage = {
  __typename?: 'AchievementConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AchievementConnection>;
};

export type AchievementConnectionName = {
  __typename?: 'AchievementConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AchievementConnection>;
};

export type AchievementConnectionCreated_By = {
  __typename?: 'AchievementConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AchievementConnection>;
};

export type AchievementConnectionUpdated_By = {
  __typename?: 'AchievementConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AchievementConnection>;
};

export type AchievementAggregator = {
  __typename?: 'AchievementAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateAchievementPayload = {
  __typename?: 'createAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export type UpdateAchievementPayload = {
  __typename?: 'updateAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export type DeleteAchievementPayload = {
  __typename?: 'deleteAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export type ApplicationConnection = {
  __typename?: 'ApplicationConnection';
  values?: Maybe<Array<Maybe<Application>>>;
  groupBy?: Maybe<ApplicationGroupBy>;
  aggregate?: Maybe<ApplicationAggregator>;
};

export type ApplicationGroupBy = {
  __typename?: 'ApplicationGroupBy';
  id?: Maybe<Array<Maybe<ApplicationConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ApplicationConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ApplicationConnectionUpdated_At>>>;
  applicant?: Maybe<Array<Maybe<ApplicationConnectionApplicant>>>;
  message?: Maybe<Array<Maybe<ApplicationConnectionMessage>>>;
  group?: Maybe<Array<Maybe<ApplicationConnectionGroup>>>;
  status?: Maybe<Array<Maybe<ApplicationConnectionStatus>>>;
  created_by?: Maybe<Array<Maybe<ApplicationConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ApplicationConnectionUpdated_By>>>;
};

export type ApplicationConnectionId = {
  __typename?: 'ApplicationConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationConnectionCreated_At = {
  __typename?: 'ApplicationConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationConnectionUpdated_At = {
  __typename?: 'ApplicationConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationConnectionApplicant = {
  __typename?: 'ApplicationConnectionApplicant';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationConnectionMessage = {
  __typename?: 'ApplicationConnectionMessage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationConnectionGroup = {
  __typename?: 'ApplicationConnectionGroup';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationConnectionStatus = {
  __typename?: 'ApplicationConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationConnectionCreated_By = {
  __typename?: 'ApplicationConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationConnectionUpdated_By = {
  __typename?: 'ApplicationConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ApplicationConnection>;
};

export type ApplicationAggregator = {
  __typename?: 'ApplicationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateApplicationPayload = {
  __typename?: 'createApplicationPayload';
  application?: Maybe<Application>;
};

export type UpdateApplicationPayload = {
  __typename?: 'updateApplicationPayload';
  application?: Maybe<Application>;
};

export type DeleteApplicationPayload = {
  __typename?: 'deleteApplicationPayload';
  application?: Maybe<Application>;
};

export type BusinessConnection = {
  __typename?: 'BusinessConnection';
  values?: Maybe<Array<Maybe<Business>>>;
  groupBy?: Maybe<BusinessGroupBy>;
  aggregate?: Maybe<BusinessAggregator>;
};

export type BusinessGroupBy = {
  __typename?: 'BusinessGroupBy';
  id?: Maybe<Array<Maybe<BusinessConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BusinessConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BusinessConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<BusinessConnectionName>>>;
  address?: Maybe<Array<Maybe<BusinessConnectionAddress>>>;
  website_url?: Maybe<Array<Maybe<BusinessConnectionWebsite_Url>>>;
  description?: Maybe<Array<Maybe<BusinessConnectionDescription>>>;
  image?: Maybe<Array<Maybe<BusinessConnectionImage>>>;
  created_by?: Maybe<Array<Maybe<BusinessConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<BusinessConnectionUpdated_By>>>;
};

export type BusinessConnectionId = {
  __typename?: 'BusinessConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionCreated_At = {
  __typename?: 'BusinessConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionUpdated_At = {
  __typename?: 'BusinessConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionName = {
  __typename?: 'BusinessConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionAddress = {
  __typename?: 'BusinessConnectionAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionWebsite_Url = {
  __typename?: 'BusinessConnectionWebsite_url';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionDescription = {
  __typename?: 'BusinessConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionImage = {
  __typename?: 'BusinessConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionCreated_By = {
  __typename?: 'BusinessConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessConnectionUpdated_By = {
  __typename?: 'BusinessConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BusinessConnection>;
};

export type BusinessAggregator = {
  __typename?: 'BusinessAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateBusinessPayload = {
  __typename?: 'createBusinessPayload';
  business?: Maybe<Business>;
};

export type UpdateBusinessPayload = {
  __typename?: 'updateBusinessPayload';
  business?: Maybe<Business>;
};

export type DeleteBusinessPayload = {
  __typename?: 'deleteBusinessPayload';
  business?: Maybe<Business>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  values?: Maybe<Array<Maybe<Group>>>;
  groupBy?: Maybe<GroupGroupBy>;
  aggregate?: Maybe<GroupAggregator>;
};

export type GroupGroupBy = {
  __typename?: 'GroupGroupBy';
  id?: Maybe<Array<Maybe<GroupConnectionId>>>;
  created_at?: Maybe<Array<Maybe<GroupConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<GroupConnectionUpdated_At>>>;
  description?: Maybe<Array<Maybe<GroupConnectionDescription>>>;
  open_slots?: Maybe<Array<Maybe<GroupConnectionOpen_Slots>>>;
  booking_status?: Maybe<Array<Maybe<GroupConnectionBooking_Status>>>;
  max_age?: Maybe<Array<Maybe<GroupConnectionMax_Age>>>;
  min_age?: Maybe<Array<Maybe<GroupConnectionMin_Age>>>;
  bookdate?: Maybe<Array<Maybe<GroupConnectionBookdate>>>;
  name?: Maybe<Array<Maybe<GroupConnectionName>>>;
  leader?: Maybe<Array<Maybe<GroupConnectionLeader>>>;
  created_by?: Maybe<Array<Maybe<GroupConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<GroupConnectionUpdated_By>>>;
};

export type GroupConnectionId = {
  __typename?: 'GroupConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionCreated_At = {
  __typename?: 'GroupConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionUpdated_At = {
  __typename?: 'GroupConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionDescription = {
  __typename?: 'GroupConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionOpen_Slots = {
  __typename?: 'GroupConnectionOpen_slots';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionBooking_Status = {
  __typename?: 'GroupConnectionBooking_status';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionMax_Age = {
  __typename?: 'GroupConnectionMax_age';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionMin_Age = {
  __typename?: 'GroupConnectionMin_age';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionBookdate = {
  __typename?: 'GroupConnectionBookdate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionName = {
  __typename?: 'GroupConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionLeader = {
  __typename?: 'GroupConnectionLeader';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionCreated_By = {
  __typename?: 'GroupConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupConnectionUpdated_By = {
  __typename?: 'GroupConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupAggregator = {
  __typename?: 'GroupAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<GroupAggregatorSum>;
  avg?: Maybe<GroupAggregatorAvg>;
  min?: Maybe<GroupAggregatorMin>;
  max?: Maybe<GroupAggregatorMax>;
};

export type GroupAggregatorSum = {
  __typename?: 'GroupAggregatorSum';
  open_slots?: Maybe<Scalars['Float']>;
  max_age?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

export type GroupAggregatorAvg = {
  __typename?: 'GroupAggregatorAvg';
  open_slots?: Maybe<Scalars['Float']>;
  max_age?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

export type GroupAggregatorMin = {
  __typename?: 'GroupAggregatorMin';
  open_slots?: Maybe<Scalars['Float']>;
  max_age?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

export type GroupAggregatorMax = {
  __typename?: 'GroupAggregatorMax';
  open_slots?: Maybe<Scalars['Float']>;
  max_age?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

export type CreateGroupPayload = {
  __typename?: 'createGroupPayload';
  group?: Maybe<Group>;
};

export type UpdateGroupPayload = {
  __typename?: 'updateGroupPayload';
  group?: Maybe<Group>;
};

export type DeleteGroupPayload = {
  __typename?: 'deleteGroupPayload';
  group?: Maybe<Group>;
};

export type InviteConnection = {
  __typename?: 'InviteConnection';
  values?: Maybe<Array<Maybe<Invite>>>;
  groupBy?: Maybe<InviteGroupBy>;
  aggregate?: Maybe<InviteAggregator>;
};

export type InviteGroupBy = {
  __typename?: 'InviteGroupBy';
  id?: Maybe<Array<Maybe<InviteConnectionId>>>;
  created_at?: Maybe<Array<Maybe<InviteConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<InviteConnectionUpdated_At>>>;
  invitee?: Maybe<Array<Maybe<InviteConnectionInvitee>>>;
  message?: Maybe<Array<Maybe<InviteConnectionMessage>>>;
  group?: Maybe<Array<Maybe<InviteConnectionGroup>>>;
  status?: Maybe<Array<Maybe<InviteConnectionStatus>>>;
  created_by?: Maybe<Array<Maybe<InviteConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<InviteConnectionUpdated_By>>>;
};

export type InviteConnectionId = {
  __typename?: 'InviteConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteConnectionCreated_At = {
  __typename?: 'InviteConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteConnectionUpdated_At = {
  __typename?: 'InviteConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteConnectionInvitee = {
  __typename?: 'InviteConnectionInvitee';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteConnectionMessage = {
  __typename?: 'InviteConnectionMessage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteConnectionGroup = {
  __typename?: 'InviteConnectionGroup';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteConnectionStatus = {
  __typename?: 'InviteConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteConnectionCreated_By = {
  __typename?: 'InviteConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteConnectionUpdated_By = {
  __typename?: 'InviteConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteAggregator = {
  __typename?: 'InviteAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateInvitePayload = {
  __typename?: 'createInvitePayload';
  invite?: Maybe<Invite>;
};

export type UpdateInvitePayload = {
  __typename?: 'updateInvitePayload';
  invite?: Maybe<Invite>;
};

export type DeleteInvitePayload = {
  __typename?: 'deleteInvitePayload';
  invite?: Maybe<Invite>;
};

export type RoomConnection = {
  __typename?: 'RoomConnection';
  values?: Maybe<Array<Maybe<Room>>>;
  groupBy?: Maybe<RoomGroupBy>;
  aggregate?: Maybe<RoomAggregator>;
};

export type RoomGroupBy = {
  __typename?: 'RoomGroupBy';
  id?: Maybe<Array<Maybe<RoomConnectionId>>>;
  created_at?: Maybe<Array<Maybe<RoomConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<RoomConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<RoomConnectionName>>>;
  description?: Maybe<Array<Maybe<RoomConnectionDescription>>>;
  image?: Maybe<Array<Maybe<RoomConnectionImage>>>;
  business?: Maybe<Array<Maybe<RoomConnectionBusiness>>>;
  created_by?: Maybe<Array<Maybe<RoomConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<RoomConnectionUpdated_By>>>;
};

export type RoomConnectionId = {
  __typename?: 'RoomConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomConnectionCreated_At = {
  __typename?: 'RoomConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomConnectionUpdated_At = {
  __typename?: 'RoomConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomConnectionName = {
  __typename?: 'RoomConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomConnectionDescription = {
  __typename?: 'RoomConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomConnectionImage = {
  __typename?: 'RoomConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomConnectionBusiness = {
  __typename?: 'RoomConnectionBusiness';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomConnectionCreated_By = {
  __typename?: 'RoomConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomConnectionUpdated_By = {
  __typename?: 'RoomConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomAggregator = {
  __typename?: 'RoomAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRoomPayload = {
  __typename?: 'createRoomPayload';
  room?: Maybe<Room>;
};

export type UpdateRoomPayload = {
  __typename?: 'updateRoomPayload';
  room?: Maybe<Room>;
};

export type DeleteRoomPayload = {
  __typename?: 'deleteRoomPayload';
  room?: Maybe<Room>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  age?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAge>>>;
  image?: Maybe<Array<Maybe<UsersPermissionsUserConnectionImage>>>;
  about?: Maybe<Array<Maybe<UsersPermissionsUserConnectionAbout>>>;
  open_to_invite?: Maybe<Array<Maybe<UsersPermissionsUserConnectionOpen_To_Invite>>>;
  hide_age?: Maybe<Array<Maybe<UsersPermissionsUserConnectionHide_Age>>>;
  approved?: Maybe<Array<Maybe<UsersPermissionsUserConnectionApproved>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionAge = {
  __typename?: 'UsersPermissionsUserConnectionAge';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionImage = {
  __typename?: 'UsersPermissionsUserConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionAbout = {
  __typename?: 'UsersPermissionsUserConnectionAbout';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionOpen_To_Invite = {
  __typename?: 'UsersPermissionsUserConnectionOpen_to_invite';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionHide_Age = {
  __typename?: 'UsersPermissionsUserConnectionHide_age';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionApproved = {
  __typename?: 'UsersPermissionsUserConnectionApproved';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UsersPermissionsUserAggregatorSum>;
  avg?: Maybe<UsersPermissionsUserAggregatorAvg>;
  min?: Maybe<UsersPermissionsUserAggregatorMin>;
  max?: Maybe<UsersPermissionsUserAggregatorMax>;
};

export type UsersPermissionsUserAggregatorSum = {
  __typename?: 'UsersPermissionsUserAggregatorSum';
  age?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsUserAggregatorAvg = {
  __typename?: 'UsersPermissionsUserAggregatorAvg';
  age?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsUserAggregatorMin = {
  __typename?: 'UsersPermissionsUserAggregatorMin';
  age?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsUserAggregatorMax = {
  __typename?: 'UsersPermissionsUserAggregatorMax';
  age?: Maybe<Scalars['Float']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAchievement?: Maybe<CreateAchievementPayload>;
  updateAchievement?: Maybe<UpdateAchievementPayload>;
  deleteAchievement?: Maybe<DeleteAchievementPayload>;
  createApplication?: Maybe<CreateApplicationPayload>;
  updateApplication?: Maybe<UpdateApplicationPayload>;
  deleteApplication?: Maybe<DeleteApplicationPayload>;
  createBusiness?: Maybe<CreateBusinessPayload>;
  updateBusiness?: Maybe<UpdateBusinessPayload>;
  deleteBusiness?: Maybe<DeleteBusinessPayload>;
  createGroup?: Maybe<CreateGroupPayload>;
  updateGroup?: Maybe<UpdateGroupPayload>;
  deleteGroup?: Maybe<DeleteGroupPayload>;
  createInvite?: Maybe<CreateInvitePayload>;
  updateInvite?: Maybe<UpdateInvitePayload>;
  deleteInvite?: Maybe<DeleteInvitePayload>;
  createRoom?: Maybe<CreateRoomPayload>;
  updateRoom?: Maybe<UpdateRoomPayload>;
  deleteRoom?: Maybe<DeleteRoomPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  acceptApplication?: Maybe<AcceptApplicationPayload>;
  rejectApplication?: Maybe<RejectApplicationPayload>;
  acceptInvite?: Maybe<AcceptInvitePayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateAchievementArgs = {
  input?: Maybe<CreateAchievementInput>;
};


export type MutationUpdateAchievementArgs = {
  input?: Maybe<UpdateAchievementInput>;
};


export type MutationDeleteAchievementArgs = {
  input?: Maybe<DeleteAchievementInput>;
};


export type MutationCreateApplicationArgs = {
  input?: Maybe<CreateApplicationInput>;
};


export type MutationUpdateApplicationArgs = {
  input?: Maybe<UpdateApplicationInput>;
};


export type MutationDeleteApplicationArgs = {
  input?: Maybe<DeleteApplicationInput>;
};


export type MutationCreateBusinessArgs = {
  input?: Maybe<CreateBusinessInput>;
};


export type MutationUpdateBusinessArgs = {
  input?: Maybe<UpdateBusinessInput>;
};


export type MutationDeleteBusinessArgs = {
  input?: Maybe<DeleteBusinessInput>;
};


export type MutationCreateGroupArgs = {
  input?: Maybe<CreateGroupInput>;
};


export type MutationUpdateGroupArgs = {
  input?: Maybe<UpdateGroupInput>;
};


export type MutationDeleteGroupArgs = {
  input?: Maybe<DeleteGroupInput>;
};


export type MutationCreateInviteArgs = {
  input?: Maybe<CreateInviteInput>;
};


export type MutationUpdateInviteArgs = {
  input?: Maybe<UpdateInviteInput>;
};


export type MutationDeleteInviteArgs = {
  input?: Maybe<DeleteInviteInput>;
};


export type MutationCreateRoomArgs = {
  input?: Maybe<CreateRoomInput>;
};


export type MutationUpdateRoomArgs = {
  input?: Maybe<UpdateRoomInput>;
};


export type MutationDeleteRoomArgs = {
  input?: Maybe<DeleteRoomInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationAcceptApplicationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationRejectApplicationArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationAcceptInviteArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type CreateAchievementInput = {
  data?: Maybe<AchievementInput>;
};

export type AchievementInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateAchievementInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAchievementInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditAchievementInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteAchievementInput = {
  where?: Maybe<InputId>;
};

export type CreateApplicationInput = {
  data?: Maybe<ApplicationInput>;
};

export type ApplicationInput = {
  applicant?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Application_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateApplicationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditApplicationInput>;
};

export type EditApplicationInput = {
  applicant?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Application_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteApplicationInput = {
  where?: Maybe<InputId>;
};

export type CreateBusinessInput = {
  data?: Maybe<BusinessInput>;
};

export type BusinessInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateBusinessInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBusinessInput>;
};

export type EditBusinessInput = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteBusinessInput = {
  where?: Maybe<InputId>;
};

export type CreateGroupInput = {
  data?: Maybe<GroupInput>;
};

export type GroupInput = {
  description?: Maybe<Scalars['String']>;
  open_slots?: Maybe<Scalars['Int']>;
  booking_status?: Maybe<Enum_Group_Booking_Status>;
  applications?: Maybe<Array<Maybe<Scalars['ID']>>>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  invites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  max_age?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
  bookdate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  leader?: Maybe<Scalars['ID']>;
  preferred_rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateGroupInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGroupInput>;
};

export type EditGroupInput = {
  description?: Maybe<Scalars['String']>;
  open_slots?: Maybe<Scalars['Int']>;
  booking_status?: Maybe<Enum_Group_Booking_Status>;
  applications?: Maybe<Array<Maybe<Scalars['ID']>>>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  invites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  max_age?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
  bookdate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  leader?: Maybe<Scalars['ID']>;
  preferred_rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteGroupInput = {
  where?: Maybe<InputId>;
};

export type CreateInviteInput = {
  data?: Maybe<InviteInput>;
};

export type InviteInput = {
  invitee?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Invite_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateInviteInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditInviteInput>;
};

export type EditInviteInput = {
  invitee?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Invite_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteInviteInput = {
  where?: Maybe<InputId>;
};

export type CreateRoomInput = {
  data?: Maybe<RoomInput>;
};

export type RoomInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  business?: Maybe<Scalars['ID']>;
  groups_preferred?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoomInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoomInput>;
};

export type EditRoomInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  business?: Maybe<Scalars['ID']>;
  groups_preferred?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoomInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  age?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['ID']>;
  about?: Maybe<Scalars['String']>;
  open_to_invite?: Maybe<Scalars['Boolean']>;
  hide_age?: Maybe<Scalars['Boolean']>;
  approved?: Maybe<Scalars['Boolean']>;
  leading_groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  achievements?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  age?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['ID']>;
  about?: Maybe<Scalars['String']>;
  open_to_invite?: Maybe<Scalars['Boolean']>;
  hide_age?: Maybe<Scalars['Boolean']>;
  approved?: Maybe<Scalars['Boolean']>;
  leading_groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  achievements?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type AcceptApplicationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AcceptApplicationMutation = (
  { __typename?: 'Mutation' }
  & { acceptApplication?: Maybe<(
    { __typename?: 'acceptApplicationPayload' }
    & { application?: Maybe<(
      { __typename?: 'Application' }
      & Pick<Application, 'id' | 'status' | 'message'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'name'>
    )> }
  )> }
);

export type AcceptInviteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AcceptInviteMutation = (
  { __typename?: 'Mutation' }
  & { acceptInvite?: Maybe<(
    { __typename?: 'acceptInvitePayload' }
    & { invite?: Maybe<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'status'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'name'>
    )> }
  )> }
);

export type ApplyToGroupMutationVariables = Exact<{
  group: Scalars['ID'];
  applicant: Scalars['ID'];
  message: Scalars['String'];
}>;


export type ApplyToGroupMutation = (
  { __typename?: 'Mutation' }
  & { createApplication?: Maybe<(
    { __typename?: 'createApplicationPayload' }
    & { application?: Maybe<(
      { __typename?: 'Application' }
      & Pick<Application, 'id' | 'message'>
      & { group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'name'>
      )> }
    )> }
  )> }
);

export type CreateGroupMutationVariables = Exact<{
  name: Scalars['String'];
  open_slots: Scalars['Int'];
  max_age: Scalars['Int'];
  min_age: Scalars['Int'];
  description: Scalars['String'];
  leader: Scalars['ID'];
  booking_status: Enum_Group_Booking_Status;
}>;


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { createGroup?: Maybe<(
    { __typename?: 'createGroupPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'name' | 'open_slots' | 'booking_status' | 'min_age' | 'max_age'>
    )> }
  )> }
);

export type LoginMutationVariables = Exact<{
  identifier: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id' | 'username'>
    ) }
  ) }
);

export type RejectApplicationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RejectApplicationMutation = (
  { __typename?: 'Mutation' }
  & { rejectApplication?: Maybe<(
    { __typename?: 'rejectApplicationPayload' }
    & { application?: Maybe<(
      { __typename?: 'Application' }
      & Pick<Application, 'id' | 'status' | 'message'>
    )> }
  )> }
);

export type GetGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetGroupQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'booking_status' | 'min_age' | 'max_age' | 'description' | 'open_slots'>
    & { leader?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username'>
    )> }
  )> }
);

export type GetMyApplicationsQueryVariables = Exact<{
  applicant: Scalars['ID'];
}>;


export type GetMyApplicationsQuery = (
  { __typename?: 'Query' }
  & { applications?: Maybe<Array<Maybe<(
    { __typename?: 'Application' }
    & Pick<Application, 'id' | 'message'>
    & { applicant?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'username'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'name'>
    )> }
  )>>> }
);

export type GetMyGroupsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMyGroupsQuery = (
  { __typename?: 'Query' }
  & { groups?: Maybe<Array<Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'open_slots' | 'max_age' | 'min_age' | 'booking_status' | 'description'>
    & { leader?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )> }
  )>>> }
);

export type GetMyInvitesQueryVariables = Exact<{
  invitee?: Maybe<Scalars['ID']>;
}>;


export type GetMyInvitesQuery = (
  { __typename?: 'Query' }
  & { invites?: Maybe<Array<Maybe<(
    { __typename?: 'Invite' }
    & Pick<Invite, 'id' | 'message'>
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'name'>
    )> }
  )>>> }
);

export type GetOpenGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOpenGroupsQuery = (
  { __typename?: 'Query' }
  & { groups?: Maybe<Array<Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'open_slots' | 'max_age' | 'min_age' | 'booking_status' | 'description'>
  )>>> }
);

export type GetRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRoomsQuery = (
  { __typename?: 'Query' }
  & { rooms?: Maybe<Array<Maybe<(
    { __typename?: 'Room' }
    & Pick<Room, 'id' | 'name'>
    & { business?: Maybe<(
      { __typename?: 'Business' }
      & Pick<Business, 'name'>
    )> }
  )>>> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UsersPermissionsUser' }
    & Pick<UsersPermissionsUser, 'id' | 'username' | 'email' | 'age' | 'about' | 'open_to_invite' | 'hide_age'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'previewUrl'>
    )>, achievements?: Maybe<Array<Maybe<(
      { __typename?: 'Achievement' }
      & Pick<Achievement, 'id' | 'name'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'previewUrl' | 'url'>
      )> }
    )>>> }
  )> }
);

export type ManageGetGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ManageGetGroupQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'open_slots' | 'booking_status' | 'description' | 'min_age' | 'max_age'>
    & { applications?: Maybe<Array<Maybe<(
      { __typename?: 'Application' }
      & Pick<Application, 'id' | 'message' | 'status'>
      & { applicant?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'id' | 'username' | 'age' | 'about'>
      )> }
    )>>>, members?: Maybe<Array<Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username' | 'age' | 'about'>
    )>>>, invites?: Maybe<Array<Maybe<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'message' | 'status'>
    )>>>, preferred_rooms?: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'id' | 'name'>
    )>>> }
  )> }
);


export const AcceptApplicationDocument = gql`
    mutation acceptApplication($id: ID!) {
  acceptApplication(id: $id) {
    application {
      id
      status
      message
    }
    group {
      id
      name
    }
  }
}
    `;
export type AcceptApplicationMutationFn = Apollo.MutationFunction<AcceptApplicationMutation, AcceptApplicationMutationVariables>;

/**
 * __useAcceptApplicationMutation__
 *
 * To run a mutation, you first call `useAcceptApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptApplicationMutation, { data, loading, error }] = useAcceptApplicationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAcceptApplicationMutation(baseOptions?: Apollo.MutationHookOptions<AcceptApplicationMutation, AcceptApplicationMutationVariables>) {
        return Apollo.useMutation<AcceptApplicationMutation, AcceptApplicationMutationVariables>(AcceptApplicationDocument, baseOptions);
      }
export type AcceptApplicationMutationHookResult = ReturnType<typeof useAcceptApplicationMutation>;
export type AcceptApplicationMutationResult = Apollo.MutationResult<AcceptApplicationMutation>;
export type AcceptApplicationMutationOptions = Apollo.BaseMutationOptions<AcceptApplicationMutation, AcceptApplicationMutationVariables>;
export const AcceptInviteDocument = gql`
    mutation acceptInvite($id: ID!) {
  acceptInvite(id: $id) {
    invite {
      id
      status
    }
    group {
      id
      name
    }
  }
}
    `;
export type AcceptInviteMutationFn = Apollo.MutationFunction<AcceptInviteMutation, AcceptInviteMutationVariables>;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAcceptInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInviteMutation, AcceptInviteMutationVariables>) {
        return Apollo.useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(AcceptInviteDocument, baseOptions);
      }
export type AcceptInviteMutationHookResult = ReturnType<typeof useAcceptInviteMutation>;
export type AcceptInviteMutationResult = Apollo.MutationResult<AcceptInviteMutation>;
export type AcceptInviteMutationOptions = Apollo.BaseMutationOptions<AcceptInviteMutation, AcceptInviteMutationVariables>;
export const ApplyToGroupDocument = gql`
    mutation applyToGroup($group: ID!, $applicant: ID!, $message: String!) {
  createApplication(input: {data: {applicant: $applicant, message: $message, group: $group}}) {
    application {
      id
      message
      group {
        name
      }
    }
  }
}
    `;
export type ApplyToGroupMutationFn = Apollo.MutationFunction<ApplyToGroupMutation, ApplyToGroupMutationVariables>;

/**
 * __useApplyToGroupMutation__
 *
 * To run a mutation, you first call `useApplyToGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApplyToGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [applyToGroupMutation, { data, loading, error }] = useApplyToGroupMutation({
 *   variables: {
 *      group: // value for 'group'
 *      applicant: // value for 'applicant'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useApplyToGroupMutation(baseOptions?: Apollo.MutationHookOptions<ApplyToGroupMutation, ApplyToGroupMutationVariables>) {
        return Apollo.useMutation<ApplyToGroupMutation, ApplyToGroupMutationVariables>(ApplyToGroupDocument, baseOptions);
      }
export type ApplyToGroupMutationHookResult = ReturnType<typeof useApplyToGroupMutation>;
export type ApplyToGroupMutationResult = Apollo.MutationResult<ApplyToGroupMutation>;
export type ApplyToGroupMutationOptions = Apollo.BaseMutationOptions<ApplyToGroupMutation, ApplyToGroupMutationVariables>;
export const CreateGroupDocument = gql`
    mutation createGroup($name: String!, $open_slots: Int!, $max_age: Int!, $min_age: Int!, $description: String!, $leader: ID!, $booking_status: ENUM_GROUP_BOOKING_STATUS!) {
  createGroup(input: {data: {name: $name, open_slots: $open_slots, booking_status: $booking_status, max_age: $max_age, min_age: $min_age, leader: $leader, description: $description}}) {
    group {
      id
      name
      open_slots
      booking_status
      min_age
      max_age
    }
  }
}
    `;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      open_slots: // value for 'open_slots'
 *      max_age: // value for 'max_age'
 *      min_age: // value for 'min_age'
 *      description: // value for 'description'
 *      leader: // value for 'leader'
 *      booking_status: // value for 'booking_status'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, baseOptions);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const LoginDocument = gql`
    mutation login($identifier: String!, $password: String!) {
  login(input: {identifier: $identifier, password: $password}) {
    jwt
    user {
      id
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RejectApplicationDocument = gql`
    mutation rejectApplication($id: ID!) {
  rejectApplication(id: $id) {
    application {
      id
      status
      message
    }
  }
}
    `;
export type RejectApplicationMutationFn = Apollo.MutationFunction<RejectApplicationMutation, RejectApplicationMutationVariables>;

/**
 * __useRejectApplicationMutation__
 *
 * To run a mutation, you first call `useRejectApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectApplicationMutation, { data, loading, error }] = useRejectApplicationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRejectApplicationMutation(baseOptions?: Apollo.MutationHookOptions<RejectApplicationMutation, RejectApplicationMutationVariables>) {
        return Apollo.useMutation<RejectApplicationMutation, RejectApplicationMutationVariables>(RejectApplicationDocument, baseOptions);
      }
export type RejectApplicationMutationHookResult = ReturnType<typeof useRejectApplicationMutation>;
export type RejectApplicationMutationResult = Apollo.MutationResult<RejectApplicationMutation>;
export type RejectApplicationMutationOptions = Apollo.BaseMutationOptions<RejectApplicationMutation, RejectApplicationMutationVariables>;
export const GetGroupDocument = gql`
    query getGroup($id: ID!) {
  group(id: $id) {
    id
    name
    booking_status
    min_age
    max_age
    leader {
      id
      username
    }
    description
    open_slots
  }
}
    `;

/**
 * __useGetGroupQuery__
 *
 * To run a query within a React component, call `useGetGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGroupQuery(baseOptions?: Apollo.QueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
        return Apollo.useQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, baseOptions);
      }
export function useGetGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
          return Apollo.useLazyQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, baseOptions);
        }
export type GetGroupQueryHookResult = ReturnType<typeof useGetGroupQuery>;
export type GetGroupLazyQueryHookResult = ReturnType<typeof useGetGroupLazyQuery>;
export type GetGroupQueryResult = Apollo.QueryResult<GetGroupQuery, GetGroupQueryVariables>;
export const GetMyApplicationsDocument = gql`
    query getMyApplications($applicant: ID!) {
  applications(where: {applicant: $applicant}) {
    id
    message
    applicant {
      username
    }
    group {
      name
    }
  }
}
    `;

/**
 * __useGetMyApplicationsQuery__
 *
 * To run a query within a React component, call `useGetMyApplicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyApplicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyApplicationsQuery({
 *   variables: {
 *      applicant: // value for 'applicant'
 *   },
 * });
 */
export function useGetMyApplicationsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyApplicationsQuery, GetMyApplicationsQueryVariables>) {
        return Apollo.useQuery<GetMyApplicationsQuery, GetMyApplicationsQueryVariables>(GetMyApplicationsDocument, baseOptions);
      }
export function useGetMyApplicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyApplicationsQuery, GetMyApplicationsQueryVariables>) {
          return Apollo.useLazyQuery<GetMyApplicationsQuery, GetMyApplicationsQueryVariables>(GetMyApplicationsDocument, baseOptions);
        }
export type GetMyApplicationsQueryHookResult = ReturnType<typeof useGetMyApplicationsQuery>;
export type GetMyApplicationsLazyQueryHookResult = ReturnType<typeof useGetMyApplicationsLazyQuery>;
export type GetMyApplicationsQueryResult = Apollo.QueryResult<GetMyApplicationsQuery, GetMyApplicationsQueryVariables>;
export const GetMyGroupsDocument = gql`
    query getMyGroups($id: ID!) {
  groups(where: {members: {id: $id}}) {
    id
    name
    open_slots
    max_age
    min_age
    booking_status
    description
    leader {
      id
    }
  }
}
    `;

/**
 * __useGetMyGroupsQuery__
 *
 * To run a query within a React component, call `useGetMyGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyGroupsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMyGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyGroupsQuery, GetMyGroupsQueryVariables>) {
        return Apollo.useQuery<GetMyGroupsQuery, GetMyGroupsQueryVariables>(GetMyGroupsDocument, baseOptions);
      }
export function useGetMyGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyGroupsQuery, GetMyGroupsQueryVariables>) {
          return Apollo.useLazyQuery<GetMyGroupsQuery, GetMyGroupsQueryVariables>(GetMyGroupsDocument, baseOptions);
        }
export type GetMyGroupsQueryHookResult = ReturnType<typeof useGetMyGroupsQuery>;
export type GetMyGroupsLazyQueryHookResult = ReturnType<typeof useGetMyGroupsLazyQuery>;
export type GetMyGroupsQueryResult = Apollo.QueryResult<GetMyGroupsQuery, GetMyGroupsQueryVariables>;
export const GetMyInvitesDocument = gql`
    query getMyInvites($invitee: ID) {
  invites(where: {invitee: {id: $invitee}, status: "undecided"}) {
    id
    message
    group {
      name
    }
  }
}
    `;

/**
 * __useGetMyInvitesQuery__
 *
 * To run a query within a React component, call `useGetMyInvitesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyInvitesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyInvitesQuery({
 *   variables: {
 *      invitee: // value for 'invitee'
 *   },
 * });
 */
export function useGetMyInvitesQuery(baseOptions?: Apollo.QueryHookOptions<GetMyInvitesQuery, GetMyInvitesQueryVariables>) {
        return Apollo.useQuery<GetMyInvitesQuery, GetMyInvitesQueryVariables>(GetMyInvitesDocument, baseOptions);
      }
export function useGetMyInvitesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyInvitesQuery, GetMyInvitesQueryVariables>) {
          return Apollo.useLazyQuery<GetMyInvitesQuery, GetMyInvitesQueryVariables>(GetMyInvitesDocument, baseOptions);
        }
export type GetMyInvitesQueryHookResult = ReturnType<typeof useGetMyInvitesQuery>;
export type GetMyInvitesLazyQueryHookResult = ReturnType<typeof useGetMyInvitesLazyQuery>;
export type GetMyInvitesQueryResult = Apollo.QueryResult<GetMyInvitesQuery, GetMyInvitesQueryVariables>;
export const GetOpenGroupsDocument = gql`
    query getOpenGroups {
  groups {
    id
    name
    open_slots
    max_age
    min_age
    booking_status
    description
  }
}
    `;

/**
 * __useGetOpenGroupsQuery__
 *
 * To run a query within a React component, call `useGetOpenGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOpenGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOpenGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOpenGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetOpenGroupsQuery, GetOpenGroupsQueryVariables>) {
        return Apollo.useQuery<GetOpenGroupsQuery, GetOpenGroupsQueryVariables>(GetOpenGroupsDocument, baseOptions);
      }
export function useGetOpenGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOpenGroupsQuery, GetOpenGroupsQueryVariables>) {
          return Apollo.useLazyQuery<GetOpenGroupsQuery, GetOpenGroupsQueryVariables>(GetOpenGroupsDocument, baseOptions);
        }
export type GetOpenGroupsQueryHookResult = ReturnType<typeof useGetOpenGroupsQuery>;
export type GetOpenGroupsLazyQueryHookResult = ReturnType<typeof useGetOpenGroupsLazyQuery>;
export type GetOpenGroupsQueryResult = Apollo.QueryResult<GetOpenGroupsQuery, GetOpenGroupsQueryVariables>;
export const GetRoomsDocument = gql`
    query getRooms {
  rooms {
    id
    name
    business {
      name
    }
  }
}
    `;

/**
 * __useGetRoomsQuery__
 *
 * To run a query within a React component, call `useGetRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRoomsQuery(baseOptions?: Apollo.QueryHookOptions<GetRoomsQuery, GetRoomsQueryVariables>) {
        return Apollo.useQuery<GetRoomsQuery, GetRoomsQueryVariables>(GetRoomsDocument, baseOptions);
      }
export function useGetRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRoomsQuery, GetRoomsQueryVariables>) {
          return Apollo.useLazyQuery<GetRoomsQuery, GetRoomsQueryVariables>(GetRoomsDocument, baseOptions);
        }
export type GetRoomsQueryHookResult = ReturnType<typeof useGetRoomsQuery>;
export type GetRoomsLazyQueryHookResult = ReturnType<typeof useGetRoomsLazyQuery>;
export type GetRoomsQueryResult = Apollo.QueryResult<GetRoomsQuery, GetRoomsQueryVariables>;
export const GetUserDocument = gql`
    query getUser($id: ID!) {
  user(id: $id) {
    id
    username
    email
    age
    image {
      url
      previewUrl
    }
    about
    open_to_invite
    hide_age
    achievements {
      id
      name
      image {
        previewUrl
        url
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const ManageGetGroupDocument = gql`
    query manageGetGroup($id: ID!) {
  group(id: $id) {
    id
    name
    open_slots
    booking_status
    description
    min_age
    max_age
    applications(where: {status: "undecided"}) {
      id
      message
      status
      applicant {
        id
        username
        age
        about
      }
    }
    members {
      id
      username
      age
      about
    }
    invites {
      id
      message
      status
    }
    preferred_rooms {
      id
      name
    }
  }
}
    `;

/**
 * __useManageGetGroupQuery__
 *
 * To run a query within a React component, call `useManageGetGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useManageGetGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useManageGetGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useManageGetGroupQuery(baseOptions?: Apollo.QueryHookOptions<ManageGetGroupQuery, ManageGetGroupQueryVariables>) {
        return Apollo.useQuery<ManageGetGroupQuery, ManageGetGroupQueryVariables>(ManageGetGroupDocument, baseOptions);
      }
export function useManageGetGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ManageGetGroupQuery, ManageGetGroupQueryVariables>) {
          return Apollo.useLazyQuery<ManageGetGroupQuery, ManageGetGroupQueryVariables>(ManageGetGroupDocument, baseOptions);
        }
export type ManageGetGroupQueryHookResult = ReturnType<typeof useManageGetGroupQuery>;
export type ManageGetGroupLazyQueryHookResult = ReturnType<typeof useManageGetGroupLazyQuery>;
export type ManageGetGroupQueryResult = Apollo.QueryResult<ManageGetGroupQuery, ManageGetGroupQueryVariables>;