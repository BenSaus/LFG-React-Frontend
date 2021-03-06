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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AcceptApplicationPayload = {
  __typename?: 'acceptApplicationPayload';
  group?: Maybe<Group>;
  application?: Maybe<Application>;
};

export type RejectApplicationPayload = {
  __typename?: 'rejectApplicationPayload';
  application?: Maybe<Application>;
};

export type RemoveMemberPayload = {
  __typename?: 'removeMemberPayload';
  group?: Maybe<Group>;
};

export type LeaveGroupPayload = {
  __typename?: 'leaveGroupPayload';
  group?: Maybe<Group>;
};

export type AcceptInvitePayload = {
  __typename?: 'acceptInvitePayload';
  group?: Maybe<Group>;
  invite?: Maybe<Invite>;
};

export type RejectInvitePayload = {
  __typename?: 'rejectInvitePayload';
  invite?: Maybe<Invite>;
};

export type DismissInvitePayload = {
  __typename?: 'dismissInvitePayload';
  invite?: Maybe<Invite>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
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

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
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

export type Achievement = {
  __typename?: 'Achievement';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type AchievementUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AchievementConnection = {
  __typename?: 'AchievementConnection';
  values?: Maybe<Array<Maybe<Achievement>>>;
  groupBy?: Maybe<AchievementGroupBy>;
  aggregate?: Maybe<AchievementAggregator>;
};

export type AchievementAggregator = {
  __typename?: 'AchievementAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AchievementGroupBy = {
  __typename?: 'AchievementGroupBy';
  id?: Maybe<Array<Maybe<AchievementConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AchievementConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AchievementConnectionUpdated_At>>>;
  description?: Maybe<Array<Maybe<AchievementConnectionDescription>>>;
  image?: Maybe<Array<Maybe<AchievementConnectionImage>>>;
  name?: Maybe<Array<Maybe<AchievementConnectionName>>>;
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

export type AchievementInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditAchievementInput = {
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateAchievementInput = {
  data?: Maybe<AchievementInput>;
};

export type CreateAchievementPayload = {
  __typename?: 'createAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export type UpdateAchievementInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAchievementInput>;
};

export type UpdateAchievementPayload = {
  __typename?: 'updateAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export type DeleteAchievementInput = {
  where?: Maybe<InputId>;
};

export type DeleteAchievementPayload = {
  __typename?: 'deleteAchievementPayload';
  achievement?: Maybe<Achievement>;
};

export enum Enum_Application_Status {
  Accepted = 'accepted',
  Rejected = 'rejected',
  Undecided = 'undecided'
}

export type Application = {
  __typename?: 'Application';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  applicant?: Maybe<UsersPermissionsUser>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Group>;
  status: Enum_Application_Status;
};

export type ApplicationConnection = {
  __typename?: 'ApplicationConnection';
  values?: Maybe<Array<Maybe<Application>>>;
  groupBy?: Maybe<ApplicationGroupBy>;
  aggregate?: Maybe<ApplicationAggregator>;
};

export type ApplicationAggregator = {
  __typename?: 'ApplicationAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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

export type ApplicationInput = {
  applicant?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Application_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditApplicationInput = {
  applicant?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Application_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateApplicationInput = {
  data?: Maybe<ApplicationInput>;
};

export type CreateApplicationPayload = {
  __typename?: 'createApplicationPayload';
  application?: Maybe<Application>;
};

export type UpdateApplicationInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditApplicationInput>;
};

export type UpdateApplicationPayload = {
  __typename?: 'updateApplicationPayload';
  application?: Maybe<Application>;
};

export type DeleteApplicationInput = {
  where?: Maybe<InputId>;
};

export type DeleteApplicationPayload = {
  __typename?: 'deleteApplicationPayload';
  application?: Maybe<Application>;
};

export type Business = {
  __typename?: 'Business';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  rooms?: Maybe<Array<Maybe<Room>>>;
};


export type BusinessRoomsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type BusinessConnection = {
  __typename?: 'BusinessConnection';
  values?: Maybe<Array<Maybe<Business>>>;
  groupBy?: Maybe<BusinessGroupBy>;
  aggregate?: Maybe<BusinessAggregator>;
};

export type BusinessAggregator = {
  __typename?: 'BusinessAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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

export type BusinessInput = {
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  website_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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

export type CreateBusinessInput = {
  data?: Maybe<BusinessInput>;
};

export type CreateBusinessPayload = {
  __typename?: 'createBusinessPayload';
  business?: Maybe<Business>;
};

export type UpdateBusinessInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBusinessInput>;
};

export type UpdateBusinessPayload = {
  __typename?: 'updateBusinessPayload';
  business?: Maybe<Business>;
};

export type DeleteBusinessInput = {
  where?: Maybe<InputId>;
};

export type DeleteBusinessPayload = {
  __typename?: 'deleteBusinessPayload';
  business?: Maybe<Business>;
};

export enum Enum_Group_Booking_Status {
  Booked = 'booked',
  NotBooked = 'notBooked'
}

export enum Enum_Group_Status {
  Open = 'open',
  Closed = 'closed',
  Booking = 'booking',
  Booked = 'booked'
}

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  member_max: Scalars['Int'];
  booking_status: Enum_Group_Booking_Status;
  max_age: Scalars['Int'];
  min_age: Scalars['Int'];
  bookdate?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  leader?: Maybe<UsersPermissionsUser>;
  status: Enum_Group_Status;
  applications?: Maybe<Array<Maybe<Application>>>;
  members?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  invites?: Maybe<Array<Maybe<Invite>>>;
  preferred_rooms?: Maybe<Array<Maybe<Room>>>;
  preferred_date_times?: Maybe<Array<Maybe<PreferredDateTime>>>;
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


export type GroupPreferred_Date_TimesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  values?: Maybe<Array<Maybe<Group>>>;
  groupBy?: Maybe<GroupGroupBy>;
  aggregate?: Maybe<GroupAggregator>;
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
  member_max?: Maybe<Scalars['Float']>;
  max_age?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

export type GroupAggregatorAvg = {
  __typename?: 'GroupAggregatorAvg';
  member_max?: Maybe<Scalars['Float']>;
  max_age?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

export type GroupAggregatorMin = {
  __typename?: 'GroupAggregatorMin';
  member_max?: Maybe<Scalars['Float']>;
  max_age?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

export type GroupAggregatorMax = {
  __typename?: 'GroupAggregatorMax';
  member_max?: Maybe<Scalars['Float']>;
  max_age?: Maybe<Scalars['Float']>;
  min_age?: Maybe<Scalars['Float']>;
};

export type GroupGroupBy = {
  __typename?: 'GroupGroupBy';
  id?: Maybe<Array<Maybe<GroupConnectionId>>>;
  created_at?: Maybe<Array<Maybe<GroupConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<GroupConnectionUpdated_At>>>;
  description?: Maybe<Array<Maybe<GroupConnectionDescription>>>;
  member_max?: Maybe<Array<Maybe<GroupConnectionMember_Max>>>;
  booking_status?: Maybe<Array<Maybe<GroupConnectionBooking_Status>>>;
  max_age?: Maybe<Array<Maybe<GroupConnectionMax_Age>>>;
  min_age?: Maybe<Array<Maybe<GroupConnectionMin_Age>>>;
  bookdate?: Maybe<Array<Maybe<GroupConnectionBookdate>>>;
  name?: Maybe<Array<Maybe<GroupConnectionName>>>;
  leader?: Maybe<Array<Maybe<GroupConnectionLeader>>>;
  status?: Maybe<Array<Maybe<GroupConnectionStatus>>>;
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

export type GroupConnectionMember_Max = {
  __typename?: 'GroupConnectionMember_max';
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

export type GroupConnectionStatus = {
  __typename?: 'GroupConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<GroupConnection>;
};

export type GroupInput = {
  description?: Maybe<Scalars['String']>;
  member_max: Scalars['Int'];
  booking_status: Enum_Group_Booking_Status;
  applications?: Maybe<Array<Maybe<Scalars['ID']>>>;
  members?: Maybe<Array<Maybe<Scalars['ID']>>>;
  invites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  max_age: Scalars['Int'];
  min_age: Scalars['Int'];
  bookdate?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  leader?: Maybe<Scalars['ID']>;
  preferred_rooms?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Group_Status>;
  preferred_date_times?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGroupInput = {
  description?: Maybe<Scalars['String']>;
  member_max?: Maybe<Scalars['Int']>;
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
  status?: Maybe<Enum_Group_Status>;
  preferred_date_times?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateGroupInput = {
  data?: Maybe<GroupInput>;
};

export type CreateGroupPayload = {
  __typename?: 'createGroupPayload';
  group?: Maybe<Group>;
};

export type UpdateGroupInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditGroupInput>;
};

export type UpdateGroupPayload = {
  __typename?: 'updateGroupPayload';
  group?: Maybe<Group>;
};

export type DeleteGroupInput = {
  where?: Maybe<InputId>;
};

export type DeleteGroupPayload = {
  __typename?: 'deleteGroupPayload';
  group?: Maybe<Group>;
};

export enum Enum_Invite_Status {
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
  status: Enum_Invite_Status;
  group_leader_dismissed?: Maybe<Scalars['Boolean']>;
};

export type InviteConnection = {
  __typename?: 'InviteConnection';
  values?: Maybe<Array<Maybe<Invite>>>;
  groupBy?: Maybe<InviteGroupBy>;
  aggregate?: Maybe<InviteAggregator>;
};

export type InviteAggregator = {
  __typename?: 'InviteAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
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
  group_leader_dismissed?: Maybe<Array<Maybe<InviteConnectionGroup_Leader_Dismissed>>>;
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

export type InviteConnectionGroup_Leader_Dismissed = {
  __typename?: 'InviteConnectionGroup_leader_dismissed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<InviteConnection>;
};

export type InviteInput = {
  invitee?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Invite_Status>;
  group_leader_dismissed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditInviteInput = {
  invitee?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  group?: Maybe<Scalars['ID']>;
  status?: Maybe<Enum_Invite_Status>;
  group_leader_dismissed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateInviteInput = {
  data?: Maybe<InviteInput>;
};

export type CreateInvitePayload = {
  __typename?: 'createInvitePayload';
  invite?: Maybe<Invite>;
};

export type UpdateInviteInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditInviteInput>;
};

export type UpdateInvitePayload = {
  __typename?: 'updateInvitePayload';
  invite?: Maybe<Invite>;
};

export type DeleteInviteInput = {
  where?: Maybe<InputId>;
};

export type DeleteInvitePayload = {
  __typename?: 'deleteInvitePayload';
  invite?: Maybe<Invite>;
};

export enum Enum_Preferreddatetime_Time {
  Afternoon = 'afternoon',
  LateAfternoon = 'late_afternoon',
  Evening = 'evening',
  LateEvening = 'late_evening'
}

export type PreferredDateTime = {
  __typename?: 'PreferredDateTime';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  date: Scalars['DateTime'];
  time: Enum_Preferreddatetime_Time;
  group?: Maybe<Group>;
};

export type PreferredDateTimeConnection = {
  __typename?: 'PreferredDateTimeConnection';
  values?: Maybe<Array<Maybe<PreferredDateTime>>>;
  groupBy?: Maybe<PreferredDateTimeGroupBy>;
  aggregate?: Maybe<PreferredDateTimeAggregator>;
};

export type PreferredDateTimeAggregator = {
  __typename?: 'PreferredDateTimeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PreferredDateTimeGroupBy = {
  __typename?: 'PreferredDateTimeGroupBy';
  id?: Maybe<Array<Maybe<PreferredDateTimeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PreferredDateTimeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PreferredDateTimeConnectionUpdated_At>>>;
  date?: Maybe<Array<Maybe<PreferredDateTimeConnectionDate>>>;
  time?: Maybe<Array<Maybe<PreferredDateTimeConnectionTime>>>;
  group?: Maybe<Array<Maybe<PreferredDateTimeConnectionGroup>>>;
};

export type PreferredDateTimeConnectionId = {
  __typename?: 'PreferredDateTimeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PreferredDateTimeConnection>;
};

export type PreferredDateTimeConnectionCreated_At = {
  __typename?: 'PreferredDateTimeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PreferredDateTimeConnection>;
};

export type PreferredDateTimeConnectionUpdated_At = {
  __typename?: 'PreferredDateTimeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PreferredDateTimeConnection>;
};

export type PreferredDateTimeConnectionDate = {
  __typename?: 'PreferredDateTimeConnectionDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PreferredDateTimeConnection>;
};

export type PreferredDateTimeConnectionTime = {
  __typename?: 'PreferredDateTimeConnectionTime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PreferredDateTimeConnection>;
};

export type PreferredDateTimeConnectionGroup = {
  __typename?: 'PreferredDateTimeConnectionGroup';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PreferredDateTimeConnection>;
};

export type PreferredDateTimeInput = {
  date: Scalars['DateTime'];
  time?: Maybe<Enum_Preferreddatetime_Time>;
  group?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPreferredDateTimeInput = {
  date?: Maybe<Scalars['DateTime']>;
  time?: Maybe<Enum_Preferreddatetime_Time>;
  group?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePreferredDateTimeInput = {
  data?: Maybe<PreferredDateTimeInput>;
};

export type CreatePreferredDateTimePayload = {
  __typename?: 'createPreferredDateTimePayload';
  preferredDateTime?: Maybe<PreferredDateTime>;
};

export type UpdatePreferredDateTimeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPreferredDateTimeInput>;
};

export type UpdatePreferredDateTimePayload = {
  __typename?: 'updatePreferredDateTimePayload';
  preferredDateTime?: Maybe<PreferredDateTime>;
};

export type DeletePreferredDateTimeInput = {
  where?: Maybe<InputId>;
};

export type DeletePreferredDateTimePayload = {
  __typename?: 'deletePreferredDateTimePayload';
  preferredDateTime?: Maybe<PreferredDateTime>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  business?: Maybe<Business>;
  player_max: Scalars['Int'];
  groups_preferred?: Maybe<Array<Maybe<Group>>>;
};


export type RoomGroups_PreferredArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoomConnection = {
  __typename?: 'RoomConnection';
  values?: Maybe<Array<Maybe<Room>>>;
  groupBy?: Maybe<RoomGroupBy>;
  aggregate?: Maybe<RoomAggregator>;
};

export type RoomAggregator = {
  __typename?: 'RoomAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<RoomAggregatorSum>;
  avg?: Maybe<RoomAggregatorAvg>;
  min?: Maybe<RoomAggregatorMin>;
  max?: Maybe<RoomAggregatorMax>;
};

export type RoomAggregatorSum = {
  __typename?: 'RoomAggregatorSum';
  player_max?: Maybe<Scalars['Float']>;
};

export type RoomAggregatorAvg = {
  __typename?: 'RoomAggregatorAvg';
  player_max?: Maybe<Scalars['Float']>;
};

export type RoomAggregatorMin = {
  __typename?: 'RoomAggregatorMin';
  player_max?: Maybe<Scalars['Float']>;
};

export type RoomAggregatorMax = {
  __typename?: 'RoomAggregatorMax';
  player_max?: Maybe<Scalars['Float']>;
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
  player_max?: Maybe<Array<Maybe<RoomConnectionPlayer_Max>>>;
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

export type RoomConnectionPlayer_Max = {
  __typename?: 'RoomConnectionPlayer_max';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<RoomConnection>;
};

export type RoomInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  business?: Maybe<Scalars['ID']>;
  groups_preferred?: Maybe<Array<Maybe<Scalars['ID']>>>;
  player_max: Scalars['Int'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoomInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  business?: Maybe<Scalars['ID']>;
  groups_preferred?: Maybe<Array<Maybe<Scalars['ID']>>>;
  player_max?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoomInput = {
  data?: Maybe<RoomInput>;
};

export type CreateRoomPayload = {
  __typename?: 'createRoomPayload';
  room?: Maybe<Room>;
};

export type UpdateRoomInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoomInput>;
};

export type UpdateRoomPayload = {
  __typename?: 'updateRoomPayload';
  room?: Maybe<Room>;
};

export type DeleteRoomInput = {
  where?: Maybe<InputId>;
};

export type DeleteRoomPayload = {
  __typename?: 'deleteRoomPayload';
  room?: Maybe<Room>;
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
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
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

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
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
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
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

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

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
  groups?: Maybe<Array<Maybe<Group>>>;
  leading_groups?: Maybe<Array<Maybe<Group>>>;
  achievements?: Maybe<Array<Maybe<Achievement>>>;
  invites?: Maybe<Array<Maybe<Invite>>>;
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


export type UsersPermissionsUserInvitesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
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
  confirmationToken?: Maybe<Scalars['String']>;
  invites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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
  confirmationToken?: Maybe<Scalars['String']>;
  invites?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Morph = AcceptApplicationPayload | RejectApplicationPayload | RemoveMemberPayload | LeaveGroupPayload | AcceptInvitePayload | RejectInvitePayload | DismissInvitePayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | UsersPermissionsMeExtra | Achievement | AchievementConnection | AchievementAggregator | AchievementGroupBy | AchievementConnectionId | AchievementConnectionCreated_At | AchievementConnectionUpdated_At | AchievementConnectionDescription | AchievementConnectionImage | AchievementConnectionName | CreateAchievementPayload | UpdateAchievementPayload | DeleteAchievementPayload | Application | ApplicationConnection | ApplicationAggregator | ApplicationGroupBy | ApplicationConnectionId | ApplicationConnectionCreated_At | ApplicationConnectionUpdated_At | ApplicationConnectionApplicant | ApplicationConnectionMessage | ApplicationConnectionGroup | ApplicationConnectionStatus | CreateApplicationPayload | UpdateApplicationPayload | DeleteApplicationPayload | Business | BusinessConnection | BusinessAggregator | BusinessGroupBy | BusinessConnectionId | BusinessConnectionCreated_At | BusinessConnectionUpdated_At | BusinessConnectionName | BusinessConnectionAddress | BusinessConnectionWebsite_Url | BusinessConnectionDescription | BusinessConnectionImage | CreateBusinessPayload | UpdateBusinessPayload | DeleteBusinessPayload | Group | GroupConnection | GroupAggregator | GroupAggregatorSum | GroupAggregatorAvg | GroupAggregatorMin | GroupAggregatorMax | GroupGroupBy | GroupConnectionId | GroupConnectionCreated_At | GroupConnectionUpdated_At | GroupConnectionDescription | GroupConnectionMember_Max | GroupConnectionBooking_Status | GroupConnectionMax_Age | GroupConnectionMin_Age | GroupConnectionBookdate | GroupConnectionName | GroupConnectionLeader | GroupConnectionStatus | CreateGroupPayload | UpdateGroupPayload | DeleteGroupPayload | Invite | InviteConnection | InviteAggregator | InviteGroupBy | InviteConnectionId | InviteConnectionCreated_At | InviteConnectionUpdated_At | InviteConnectionInvitee | InviteConnectionMessage | InviteConnectionGroup | InviteConnectionStatus | InviteConnectionGroup_Leader_Dismissed | CreateInvitePayload | UpdateInvitePayload | DeleteInvitePayload | PreferredDateTime | PreferredDateTimeConnection | PreferredDateTimeAggregator | PreferredDateTimeGroupBy | PreferredDateTimeConnectionId | PreferredDateTimeConnectionCreated_At | PreferredDateTimeConnectionUpdated_At | PreferredDateTimeConnectionDate | PreferredDateTimeConnectionTime | PreferredDateTimeConnectionGroup | CreatePreferredDateTimePayload | UpdatePreferredDateTimePayload | DeletePreferredDateTimePayload | Room | RoomConnection | RoomAggregator | RoomAggregatorSum | RoomAggregatorAvg | RoomAggregatorMin | RoomAggregatorMax | RoomGroupBy | RoomConnectionId | RoomConnectionCreated_At | RoomConnectionUpdated_At | RoomConnectionName | RoomConnectionDescription | RoomConnectionImage | RoomConnectionBusiness | RoomConnectionPlayer_Max | CreateRoomPayload | UpdateRoomPayload | DeleteRoomPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserAggregatorSum | UsersPermissionsUserAggregatorAvg | UsersPermissionsUserAggregatorMin | UsersPermissionsUserAggregatorMax | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionAge | UsersPermissionsUserConnectionImage | UsersPermissionsUserConnectionAbout | UsersPermissionsUserConnectionOpen_To_Invite | UsersPermissionsUserConnectionHide_Age | UsersPermissionsUserConnectionApproved | CreateUserPayload | UpdateUserPayload | DeleteUserPayload;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
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
  preferredDateTime?: Maybe<PreferredDateTime>;
  preferredDateTimes?: Maybe<Array<Maybe<PreferredDateTime>>>;
  preferredDateTimesConnection?: Maybe<PreferredDateTimeConnection>;
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
  publicationState?: Maybe<PublicationState>;
};


export type QueryAchievementsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryAchievementsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryApplicationArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryApplicationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryApplicationsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBusinessArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBusinessesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBusinessesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryGroupsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryInviteArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryInvitesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryInvitesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPreferredDateTimeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPreferredDateTimesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPreferredDateTimesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoomArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRoomsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
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
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAchievement?: Maybe<CreateAchievementPayload>;
  updateAchievement?: Maybe<UpdateAchievementPayload>;
  deleteAchievement?: Maybe<DeleteAchievementPayload>;
  /** Create an application */
  createApplication?: Maybe<CreateApplicationPayload>;
  createBusiness?: Maybe<CreateBusinessPayload>;
  updateBusiness?: Maybe<UpdateBusinessPayload>;
  deleteBusiness?: Maybe<DeleteBusinessPayload>;
  createGroup?: Maybe<CreateGroupPayload>;
  updateGroup?: Maybe<UpdateGroupPayload>;
  deleteGroup?: Maybe<DeleteGroupPayload>;
  /** Create an invitation */
  createInvite?: Maybe<CreateInvitePayload>;
  createPreferredDateTime?: Maybe<CreatePreferredDateTimePayload>;
  updatePreferredDateTime?: Maybe<UpdatePreferredDateTimePayload>;
  deletePreferredDateTime?: Maybe<DeletePreferredDateTimePayload>;
  createRoom?: Maybe<CreateRoomPayload>;
  updateRoom?: Maybe<UpdateRoomPayload>;
  deleteRoom?: Maybe<DeleteRoomPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
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
  removeMember?: Maybe<RemoveMemberPayload>;
  leaveGroup?: Maybe<LeaveGroupPayload>;
  acceptInvite?: Maybe<AcceptInvitePayload>;
  rejectInvite?: Maybe<RejectInvitePayload>;
  dismissInvite?: Maybe<DismissInvitePayload>;
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


export type MutationCreatePreferredDateTimeArgs = {
  input?: Maybe<CreatePreferredDateTimeInput>;
};


export type MutationUpdatePreferredDateTimeArgs = {
  input?: Maybe<UpdatePreferredDateTimeInput>;
};


export type MutationDeletePreferredDateTimeArgs = {
  input?: Maybe<DeletePreferredDateTimeInput>;
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


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
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


export type MutationRemoveMemberArgs = {
  groupId?: Maybe<Scalars['ID']>;
  memberId?: Maybe<Scalars['ID']>;
};


export type MutationLeaveGroupArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationAcceptInviteArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationRejectInviteArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationDismissInviteArgs = {
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

export type CloseGroupMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CloseGroupMutation = (
  { __typename?: 'Mutation' }
  & { updateGroup?: Maybe<(
    { __typename?: 'updateGroupPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'status'>
    )> }
  )> }
);

export type CreateApplicationMutationVariables = Exact<{
  group: Scalars['ID'];
  applicant: Scalars['ID'];
  message: Scalars['String'];
}>;


export type CreateApplicationMutation = (
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
  description: Scalars['String'];
  member_max: Scalars['Int'];
  max_age: Scalars['Int'];
  min_age: Scalars['Int'];
  leader: Scalars['ID'];
  members: Array<Scalars['ID']>;
  preferred_rooms?: Maybe<Array<Scalars['ID']>>;
  preferred_date_times?: Maybe<Array<Scalars['ID']>>;
}>;


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { createGroup?: Maybe<(
    { __typename?: 'createGroupPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'name' | 'member_max' | 'booking_status' | 'min_age' | 'max_age'>
      & { preferred_rooms?: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'id' | 'name'>
      )>>>, preferred_date_times?: Maybe<Array<Maybe<(
        { __typename?: 'PreferredDateTime' }
        & Pick<PreferredDateTime, 'id' | 'date' | 'time'>
      )>>> }
    )> }
  )> }
);

export type CreateInviteMutationVariables = Exact<{
  invitee: Scalars['ID'];
  group: Scalars['ID'];
  message: Scalars['String'];
}>;


export type CreateInviteMutation = (
  { __typename?: 'Mutation' }
  & { createInvite?: Maybe<(
    { __typename?: 'createInvitePayload' }
    & { invite?: Maybe<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'message'>
      & { invitee?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'id' | 'username'>
      )>, group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'id' | 'name'>
      )> }
    )> }
  )> }
);

export type CreatePreferredDateTimeMutationVariables = Exact<{
  groupId: Scalars['ID'];
  date: Scalars['DateTime'];
  time: Enum_Preferreddatetime_Time;
}>;


export type CreatePreferredDateTimeMutation = (
  { __typename?: 'Mutation' }
  & { createPreferredDateTime?: Maybe<(
    { __typename?: 'createPreferredDateTimePayload' }
    & { preferredDateTime?: Maybe<(
      { __typename?: 'PreferredDateTime' }
      & Pick<PreferredDateTime, 'id'>
    )> }
  )> }
);

export type DeletePreferredDateTimeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePreferredDateTimeMutation = (
  { __typename?: 'Mutation' }
  & { deletePreferredDateTime?: Maybe<(
    { __typename?: 'deletePreferredDateTimePayload' }
    & { preferredDateTime?: Maybe<(
      { __typename?: 'PreferredDateTime' }
      & Pick<PreferredDateTime, 'id'>
    )> }
  )> }
);

export type DismissInviteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DismissInviteMutation = (
  { __typename?: 'Mutation' }
  & { dismissInvite?: Maybe<(
    { __typename?: 'dismissInvitePayload' }
    & { invite?: Maybe<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'group_leader_dismissed'>
      & { group?: Maybe<(
        { __typename?: 'Group' }
        & Pick<Group, 'name'>
      )>, invitee?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'id' | 'username'>
      )> }
    )> }
  )> }
);

export type LeaveGroupMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LeaveGroupMutation = (
  { __typename?: 'Mutation' }
  & { leaveGroup?: Maybe<(
    { __typename?: 'leaveGroupPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'name'>
      & { members?: Maybe<Array<Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'id' | 'username'>
      )>>> }
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

export type OpenGroupMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OpenGroupMutation = (
  { __typename?: 'Mutation' }
  & { updateGroup?: Maybe<(
    { __typename?: 'updateGroupPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'status'>
    )> }
  )> }
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

export type RejectInviteMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RejectInviteMutation = (
  { __typename?: 'Mutation' }
  & { rejectInvite?: Maybe<(
    { __typename?: 'rejectInvitePayload' }
    & { invite?: Maybe<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'status'>
    )> }
  )> }
);

export type RemoveMemberMutationVariables = Exact<{
  groupId: Scalars['ID'];
  memberId: Scalars['ID'];
}>;


export type RemoveMemberMutation = (
  { __typename?: 'Mutation' }
  & { removeMember?: Maybe<(
    { __typename?: 'removeMemberPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'name'>
      & { members?: Maybe<Array<Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'id' | 'username'>
      )>>> }
    )> }
  )> }
);

export type SetMemberMaxMutationVariables = Exact<{
  id: Scalars['ID'];
  member_max: Scalars['Int'];
}>;


export type SetMemberMaxMutation = (
  { __typename?: 'Mutation' }
  & { updateGroup?: Maybe<(
    { __typename?: 'updateGroupPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'member_max'>
    )> }
  )> }
);

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  member_max?: Maybe<Scalars['Int']>;
  min_age?: Maybe<Scalars['Int']>;
  max_age?: Maybe<Scalars['Int']>;
  status?: Maybe<Enum_Group_Status>;
  preferred_rooms?: Maybe<Array<Scalars['ID']>>;
  preferred_date_times?: Maybe<Array<Scalars['ID']>>;
}>;


export type UpdateGroupMutation = (
  { __typename?: 'Mutation' }
  & { updateGroup?: Maybe<(
    { __typename?: 'updateGroupPayload' }
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'name' | 'description' | 'member_max' | 'min_age' | 'max_age' | 'status'>
      & { preferred_rooms?: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'id' | 'name'>
      )>>>, preferred_date_times?: Maybe<Array<Maybe<(
        { __typename?: 'PreferredDateTime' }
        & Pick<PreferredDateTime, 'id' | 'date' | 'time'>
      )>>> }
    )> }
  )> }
);

export type GetApplicationsToThisGroupQueryVariables = Exact<{
  applicant: Scalars['ID'];
  group: Scalars['ID'];
}>;


export type GetApplicationsToThisGroupQuery = (
  { __typename?: 'Query' }
  & { applications?: Maybe<Array<Maybe<(
    { __typename?: 'Application' }
    & Pick<Application, 'status'>
    & { applicant?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'name'>
    )> }
  )>>> }
);

export type GetGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetGroupQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'booking_status' | 'min_age' | 'max_age' | 'description' | 'member_max'>
    & { leader?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username'>
    )>, members?: Maybe<Array<Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )>>>, preferred_rooms?: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'id' | 'name'>
    )>>>, preferred_date_times?: Maybe<Array<Maybe<(
      { __typename?: 'PreferredDateTime' }
      & Pick<PreferredDateTime, 'id' | 'date' | 'time'>
    )>>> }
  )> }
);

export type GetGroupChatQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetGroupChatQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'booking_status' | 'status' | 'min_age' | 'max_age' | 'description' | 'member_max'>
    & { leader?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )>, members?: Maybe<Array<Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )>>>, preferred_rooms?: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'id' | 'name'>
    )>>> }
  )> }
);

export type GetMyApplicationsQueryVariables = Exact<{
  applicant: Scalars['ID'];
}>;


export type GetMyApplicationsQuery = (
  { __typename?: 'Query' }
  & { applications?: Maybe<Array<Maybe<(
    { __typename?: 'Application' }
    & Pick<Application, 'id' | 'message' | 'status'>
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
    & Pick<Group, 'id' | 'name' | 'member_max' | 'max_age' | 'min_age' | 'booking_status' | 'description'>
    & { leader?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )>, members?: Maybe<Array<Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )>>> }
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

export type GetMyLeadGroupsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMyLeadGroupsQuery = (
  { __typename?: 'Query' }
  & { groups?: Maybe<Array<Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'member_max' | 'max_age' | 'min_age' | 'booking_status' | 'description'>
    & { leader?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )>, members?: Maybe<Array<Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )>>>, applications?: Maybe<Array<Maybe<(
      { __typename?: 'Application' }
      & Pick<Application, 'id'>
    )>>> }
  )>>> }
);

export type GetOpenGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOpenGroupsQuery = (
  { __typename?: 'Query' }
  & { groups?: Maybe<Array<Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'name' | 'member_max' | 'max_age' | 'min_age' | 'booking_status' | 'description'>
    & { members?: Maybe<Array<Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )>>>, leader?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'username'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )>, preferred_rooms?: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'id' | 'name'>
    )>>> }
  )>>> }
);

export type GetOpenUsersQueryVariables = Exact<{
  groupId: Scalars['ID'];
}>;


export type GetOpenUsersQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id'>
    & { leader?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )>, members?: Maybe<Array<Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id'>
    )>>>, invites?: Maybe<Array<Maybe<(
      { __typename?: 'Invite' }
      & { invitee?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'id'>
      )> }
    )>>>, applications?: Maybe<Array<Maybe<(
      { __typename?: 'Application' }
      & { applicant?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'id'>
      )> }
    )>>> }
  )>, users?: Maybe<Array<Maybe<(
    { __typename?: 'UsersPermissionsUser' }
    & Pick<UsersPermissionsUser, 'id' | 'username' | 'age' | 'about' | 'open_to_invite' | 'hide_age'>
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
      & Pick<Achievement, 'id' | 'name' | 'description'>
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
    & Pick<Group, 'id' | 'name' | 'member_max' | 'booking_status' | 'status' | 'description' | 'min_age' | 'max_age'>
    & { applications?: Maybe<Array<Maybe<(
      { __typename?: 'Application' }
      & Pick<Application, 'id' | 'message' | 'status'>
      & { applicant?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'id' | 'username' | 'age' | 'about'>
        & { image?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'url'>
        )> }
      )> }
    )>>>, members?: Maybe<Array<Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username' | 'age' | 'about'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )>>>, invites?: Maybe<Array<Maybe<(
      { __typename?: 'Invite' }
      & Pick<Invite, 'id' | 'message' | 'status'>
      & { invitee?: Maybe<(
        { __typename?: 'UsersPermissionsUser' }
        & Pick<UsersPermissionsUser, 'username'>
        & { image?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'url'>
        )> }
      )> }
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
export const CloseGroupDocument = gql`
    mutation closeGroup($id: ID!) {
  updateGroup(input: {where: {id: $id}, data: {status: closed}}) {
    group {
      id
      status
    }
  }
}
    `;
export type CloseGroupMutationFn = Apollo.MutationFunction<CloseGroupMutation, CloseGroupMutationVariables>;

/**
 * __useCloseGroupMutation__
 *
 * To run a mutation, you first call `useCloseGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCloseGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [closeGroupMutation, { data, loading, error }] = useCloseGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCloseGroupMutation(baseOptions?: Apollo.MutationHookOptions<CloseGroupMutation, CloseGroupMutationVariables>) {
        return Apollo.useMutation<CloseGroupMutation, CloseGroupMutationVariables>(CloseGroupDocument, baseOptions);
      }
export type CloseGroupMutationHookResult = ReturnType<typeof useCloseGroupMutation>;
export type CloseGroupMutationResult = Apollo.MutationResult<CloseGroupMutation>;
export type CloseGroupMutationOptions = Apollo.BaseMutationOptions<CloseGroupMutation, CloseGroupMutationVariables>;
export const CreateApplicationDocument = gql`
    mutation createApplication($group: ID!, $applicant: ID!, $message: String!) {
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
export type CreateApplicationMutationFn = Apollo.MutationFunction<CreateApplicationMutation, CreateApplicationMutationVariables>;

/**
 * __useCreateApplicationMutation__
 *
 * To run a mutation, you first call `useCreateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createApplicationMutation, { data, loading, error }] = useCreateApplicationMutation({
 *   variables: {
 *      group: // value for 'group'
 *      applicant: // value for 'applicant'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useCreateApplicationMutation(baseOptions?: Apollo.MutationHookOptions<CreateApplicationMutation, CreateApplicationMutationVariables>) {
        return Apollo.useMutation<CreateApplicationMutation, CreateApplicationMutationVariables>(CreateApplicationDocument, baseOptions);
      }
export type CreateApplicationMutationHookResult = ReturnType<typeof useCreateApplicationMutation>;
export type CreateApplicationMutationResult = Apollo.MutationResult<CreateApplicationMutation>;
export type CreateApplicationMutationOptions = Apollo.BaseMutationOptions<CreateApplicationMutation, CreateApplicationMutationVariables>;
export const CreateGroupDocument = gql`
    mutation createGroup($name: String!, $description: String!, $member_max: Int!, $max_age: Int!, $min_age: Int!, $leader: ID!, $members: [ID!]!, $preferred_rooms: [ID!], $preferred_date_times: [ID!]) {
  createGroup(input: {data: {name: $name, description: $description, member_max: $member_max, max_age: $max_age, min_age: $min_age, leader: $leader, members: $members, preferred_rooms: $preferred_rooms, preferred_date_times: $preferred_date_times, booking_status: notBooked}}) {
    group {
      id
      name
      member_max
      booking_status
      min_age
      max_age
      preferred_rooms {
        id
        name
      }
      preferred_date_times {
        id
        date
        time
      }
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
 *      description: // value for 'description'
 *      member_max: // value for 'member_max'
 *      max_age: // value for 'max_age'
 *      min_age: // value for 'min_age'
 *      leader: // value for 'leader'
 *      members: // value for 'members'
 *      preferred_rooms: // value for 'preferred_rooms'
 *      preferred_date_times: // value for 'preferred_date_times'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, baseOptions);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const CreateInviteDocument = gql`
    mutation createInvite($invitee: ID!, $group: ID!, $message: String!) {
  createInvite(input: {data: {invitee: $invitee, group: $group, message: $message}}) {
    invite {
      id
      message
      invitee {
        id
        username
      }
      group {
        id
        name
      }
    }
  }
}
    `;
export type CreateInviteMutationFn = Apollo.MutationFunction<CreateInviteMutation, CreateInviteMutationVariables>;

/**
 * __useCreateInviteMutation__
 *
 * To run a mutation, you first call `useCreateInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInviteMutation, { data, loading, error }] = useCreateInviteMutation({
 *   variables: {
 *      invitee: // value for 'invitee'
 *      group: // value for 'group'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useCreateInviteMutation(baseOptions?: Apollo.MutationHookOptions<CreateInviteMutation, CreateInviteMutationVariables>) {
        return Apollo.useMutation<CreateInviteMutation, CreateInviteMutationVariables>(CreateInviteDocument, baseOptions);
      }
export type CreateInviteMutationHookResult = ReturnType<typeof useCreateInviteMutation>;
export type CreateInviteMutationResult = Apollo.MutationResult<CreateInviteMutation>;
export type CreateInviteMutationOptions = Apollo.BaseMutationOptions<CreateInviteMutation, CreateInviteMutationVariables>;
export const CreatePreferredDateTimeDocument = gql`
    mutation createPreferredDateTime($groupId: ID!, $date: DateTime!, $time: ENUM_PREFERREDDATETIME_TIME!) {
  createPreferredDateTime(input: {data: {group: $groupId, date: $date, time: $time}}) {
    preferredDateTime {
      id
    }
  }
}
    `;
export type CreatePreferredDateTimeMutationFn = Apollo.MutationFunction<CreatePreferredDateTimeMutation, CreatePreferredDateTimeMutationVariables>;

/**
 * __useCreatePreferredDateTimeMutation__
 *
 * To run a mutation, you first call `useCreatePreferredDateTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePreferredDateTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPreferredDateTimeMutation, { data, loading, error }] = useCreatePreferredDateTimeMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      date: // value for 'date'
 *      time: // value for 'time'
 *   },
 * });
 */
export function useCreatePreferredDateTimeMutation(baseOptions?: Apollo.MutationHookOptions<CreatePreferredDateTimeMutation, CreatePreferredDateTimeMutationVariables>) {
        return Apollo.useMutation<CreatePreferredDateTimeMutation, CreatePreferredDateTimeMutationVariables>(CreatePreferredDateTimeDocument, baseOptions);
      }
export type CreatePreferredDateTimeMutationHookResult = ReturnType<typeof useCreatePreferredDateTimeMutation>;
export type CreatePreferredDateTimeMutationResult = Apollo.MutationResult<CreatePreferredDateTimeMutation>;
export type CreatePreferredDateTimeMutationOptions = Apollo.BaseMutationOptions<CreatePreferredDateTimeMutation, CreatePreferredDateTimeMutationVariables>;
export const DeletePreferredDateTimeDocument = gql`
    mutation deletePreferredDateTime($id: ID!) {
  deletePreferredDateTime(input: {where: {id: $id}}) {
    preferredDateTime {
      id
    }
  }
}
    `;
export type DeletePreferredDateTimeMutationFn = Apollo.MutationFunction<DeletePreferredDateTimeMutation, DeletePreferredDateTimeMutationVariables>;

/**
 * __useDeletePreferredDateTimeMutation__
 *
 * To run a mutation, you first call `useDeletePreferredDateTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePreferredDateTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePreferredDateTimeMutation, { data, loading, error }] = useDeletePreferredDateTimeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePreferredDateTimeMutation(baseOptions?: Apollo.MutationHookOptions<DeletePreferredDateTimeMutation, DeletePreferredDateTimeMutationVariables>) {
        return Apollo.useMutation<DeletePreferredDateTimeMutation, DeletePreferredDateTimeMutationVariables>(DeletePreferredDateTimeDocument, baseOptions);
      }
export type DeletePreferredDateTimeMutationHookResult = ReturnType<typeof useDeletePreferredDateTimeMutation>;
export type DeletePreferredDateTimeMutationResult = Apollo.MutationResult<DeletePreferredDateTimeMutation>;
export type DeletePreferredDateTimeMutationOptions = Apollo.BaseMutationOptions<DeletePreferredDateTimeMutation, DeletePreferredDateTimeMutationVariables>;
export const DismissInviteDocument = gql`
    mutation dismissInvite($id: ID!) {
  dismissInvite(id: $id) {
    invite {
      id
      group {
        name
      }
      invitee {
        id
        username
      }
      group_leader_dismissed
    }
  }
}
    `;
export type DismissInviteMutationFn = Apollo.MutationFunction<DismissInviteMutation, DismissInviteMutationVariables>;

/**
 * __useDismissInviteMutation__
 *
 * To run a mutation, you first call `useDismissInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDismissInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [dismissInviteMutation, { data, loading, error }] = useDismissInviteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDismissInviteMutation(baseOptions?: Apollo.MutationHookOptions<DismissInviteMutation, DismissInviteMutationVariables>) {
        return Apollo.useMutation<DismissInviteMutation, DismissInviteMutationVariables>(DismissInviteDocument, baseOptions);
      }
export type DismissInviteMutationHookResult = ReturnType<typeof useDismissInviteMutation>;
export type DismissInviteMutationResult = Apollo.MutationResult<DismissInviteMutation>;
export type DismissInviteMutationOptions = Apollo.BaseMutationOptions<DismissInviteMutation, DismissInviteMutationVariables>;
export const LeaveGroupDocument = gql`
    mutation leaveGroup($id: ID!) {
  leaveGroup(id: $id) {
    group {
      id
      name
      members {
        id
        username
      }
    }
  }
}
    `;
export type LeaveGroupMutationFn = Apollo.MutationFunction<LeaveGroupMutation, LeaveGroupMutationVariables>;

/**
 * __useLeaveGroupMutation__
 *
 * To run a mutation, you first call `useLeaveGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveGroupMutation, { data, loading, error }] = useLeaveGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLeaveGroupMutation(baseOptions?: Apollo.MutationHookOptions<LeaveGroupMutation, LeaveGroupMutationVariables>) {
        return Apollo.useMutation<LeaveGroupMutation, LeaveGroupMutationVariables>(LeaveGroupDocument, baseOptions);
      }
export type LeaveGroupMutationHookResult = ReturnType<typeof useLeaveGroupMutation>;
export type LeaveGroupMutationResult = Apollo.MutationResult<LeaveGroupMutation>;
export type LeaveGroupMutationOptions = Apollo.BaseMutationOptions<LeaveGroupMutation, LeaveGroupMutationVariables>;
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
export const OpenGroupDocument = gql`
    mutation openGroup($id: ID!) {
  updateGroup(input: {where: {id: $id}, data: {status: open}}) {
    group {
      id
      status
    }
  }
}
    `;
export type OpenGroupMutationFn = Apollo.MutationFunction<OpenGroupMutation, OpenGroupMutationVariables>;

/**
 * __useOpenGroupMutation__
 *
 * To run a mutation, you first call `useOpenGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpenGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [openGroupMutation, { data, loading, error }] = useOpenGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOpenGroupMutation(baseOptions?: Apollo.MutationHookOptions<OpenGroupMutation, OpenGroupMutationVariables>) {
        return Apollo.useMutation<OpenGroupMutation, OpenGroupMutationVariables>(OpenGroupDocument, baseOptions);
      }
export type OpenGroupMutationHookResult = ReturnType<typeof useOpenGroupMutation>;
export type OpenGroupMutationResult = Apollo.MutationResult<OpenGroupMutation>;
export type OpenGroupMutationOptions = Apollo.BaseMutationOptions<OpenGroupMutation, OpenGroupMutationVariables>;
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
export const RejectInviteDocument = gql`
    mutation rejectInvite($id: ID!) {
  rejectInvite(id: $id) {
    invite {
      id
      status
    }
  }
}
    `;
export type RejectInviteMutationFn = Apollo.MutationFunction<RejectInviteMutation, RejectInviteMutationVariables>;

/**
 * __useRejectInviteMutation__
 *
 * To run a mutation, you first call `useRejectInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectInviteMutation, { data, loading, error }] = useRejectInviteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRejectInviteMutation(baseOptions?: Apollo.MutationHookOptions<RejectInviteMutation, RejectInviteMutationVariables>) {
        return Apollo.useMutation<RejectInviteMutation, RejectInviteMutationVariables>(RejectInviteDocument, baseOptions);
      }
export type RejectInviteMutationHookResult = ReturnType<typeof useRejectInviteMutation>;
export type RejectInviteMutationResult = Apollo.MutationResult<RejectInviteMutation>;
export type RejectInviteMutationOptions = Apollo.BaseMutationOptions<RejectInviteMutation, RejectInviteMutationVariables>;
export const RemoveMemberDocument = gql`
    mutation removeMember($groupId: ID!, $memberId: ID!) {
  removeMember(groupId: $groupId, memberId: $memberId) {
    group {
      name
      members {
        id
        username
      }
    }
  }
}
    `;
export type RemoveMemberMutationFn = Apollo.MutationFunction<RemoveMemberMutation, RemoveMemberMutationVariables>;

/**
 * __useRemoveMemberMutation__
 *
 * To run a mutation, you first call `useRemoveMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMemberMutation, { data, loading, error }] = useRemoveMemberMutation({
 *   variables: {
 *      groupId: // value for 'groupId'
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useRemoveMemberMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMemberMutation, RemoveMemberMutationVariables>) {
        return Apollo.useMutation<RemoveMemberMutation, RemoveMemberMutationVariables>(RemoveMemberDocument, baseOptions);
      }
export type RemoveMemberMutationHookResult = ReturnType<typeof useRemoveMemberMutation>;
export type RemoveMemberMutationResult = Apollo.MutationResult<RemoveMemberMutation>;
export type RemoveMemberMutationOptions = Apollo.BaseMutationOptions<RemoveMemberMutation, RemoveMemberMutationVariables>;
export const SetMemberMaxDocument = gql`
    mutation setMemberMax($id: ID!, $member_max: Int!) {
  updateGroup(input: {where: {id: $id}, data: {member_max: $member_max}}) {
    group {
      id
      member_max
    }
  }
}
    `;
export type SetMemberMaxMutationFn = Apollo.MutationFunction<SetMemberMaxMutation, SetMemberMaxMutationVariables>;

/**
 * __useSetMemberMaxMutation__
 *
 * To run a mutation, you first call `useSetMemberMaxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetMemberMaxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setMemberMaxMutation, { data, loading, error }] = useSetMemberMaxMutation({
 *   variables: {
 *      id: // value for 'id'
 *      member_max: // value for 'member_max'
 *   },
 * });
 */
export function useSetMemberMaxMutation(baseOptions?: Apollo.MutationHookOptions<SetMemberMaxMutation, SetMemberMaxMutationVariables>) {
        return Apollo.useMutation<SetMemberMaxMutation, SetMemberMaxMutationVariables>(SetMemberMaxDocument, baseOptions);
      }
export type SetMemberMaxMutationHookResult = ReturnType<typeof useSetMemberMaxMutation>;
export type SetMemberMaxMutationResult = Apollo.MutationResult<SetMemberMaxMutation>;
export type SetMemberMaxMutationOptions = Apollo.BaseMutationOptions<SetMemberMaxMutation, SetMemberMaxMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation updateGroup($id: ID!, $name: String, $description: String, $member_max: Int, $min_age: Int, $max_age: Int, $status: ENUM_GROUP_STATUS, $preferred_rooms: [ID!], $preferred_date_times: [ID!]) {
  updateGroup(input: {where: {id: $id}, data: {name: $name, description: $description, member_max: $member_max, min_age: $min_age, max_age: $max_age, status: $status, preferred_rooms: $preferred_rooms, preferred_date_times: $preferred_date_times}}) {
    group {
      id
      name
      description
      member_max
      min_age
      max_age
      status
      preferred_rooms {
        id
        name
      }
      preferred_date_times {
        id
        date
        time
      }
    }
  }
}
    `;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      member_max: // value for 'member_max'
 *      min_age: // value for 'min_age'
 *      max_age: // value for 'max_age'
 *      status: // value for 'status'
 *      preferred_rooms: // value for 'preferred_rooms'
 *      preferred_date_times: // value for 'preferred_date_times'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, baseOptions);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const GetApplicationsToThisGroupDocument = gql`
    query getApplicationsToThisGroup($applicant: ID!, $group: ID!) {
  applications(where: {applicant: $applicant, group: $group}) {
    status
    applicant {
      id
      username
    }
    group {
      id
      name
    }
  }
}
    `;

/**
 * __useGetApplicationsToThisGroupQuery__
 *
 * To run a query within a React component, call `useGetApplicationsToThisGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationsToThisGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationsToThisGroupQuery({
 *   variables: {
 *      applicant: // value for 'applicant'
 *      group: // value for 'group'
 *   },
 * });
 */
export function useGetApplicationsToThisGroupQuery(baseOptions?: Apollo.QueryHookOptions<GetApplicationsToThisGroupQuery, GetApplicationsToThisGroupQueryVariables>) {
        return Apollo.useQuery<GetApplicationsToThisGroupQuery, GetApplicationsToThisGroupQueryVariables>(GetApplicationsToThisGroupDocument, baseOptions);
      }
export function useGetApplicationsToThisGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicationsToThisGroupQuery, GetApplicationsToThisGroupQueryVariables>) {
          return Apollo.useLazyQuery<GetApplicationsToThisGroupQuery, GetApplicationsToThisGroupQueryVariables>(GetApplicationsToThisGroupDocument, baseOptions);
        }
export type GetApplicationsToThisGroupQueryHookResult = ReturnType<typeof useGetApplicationsToThisGroupQuery>;
export type GetApplicationsToThisGroupLazyQueryHookResult = ReturnType<typeof useGetApplicationsToThisGroupLazyQuery>;
export type GetApplicationsToThisGroupQueryResult = Apollo.QueryResult<GetApplicationsToThisGroupQuery, GetApplicationsToThisGroupQueryVariables>;
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
    member_max
    members {
      id
    }
    preferred_rooms {
      id
      name
    }
    preferred_date_times {
      id
      date
      time
    }
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
export const GetGroupChatDocument = gql`
    query getGroupChat($id: ID!) {
  group(id: $id) {
    id
    name
    booking_status
    status
    min_age
    max_age
    leader {
      id
      username
      image {
        url
      }
    }
    description
    member_max
    members {
      id
      username
      image {
        url
      }
    }
    preferred_rooms {
      id
      name
    }
  }
}
    `;

/**
 * __useGetGroupChatQuery__
 *
 * To run a query within a React component, call `useGetGroupChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupChatQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGroupChatQuery(baseOptions?: Apollo.QueryHookOptions<GetGroupChatQuery, GetGroupChatQueryVariables>) {
        return Apollo.useQuery<GetGroupChatQuery, GetGroupChatQueryVariables>(GetGroupChatDocument, baseOptions);
      }
export function useGetGroupChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupChatQuery, GetGroupChatQueryVariables>) {
          return Apollo.useLazyQuery<GetGroupChatQuery, GetGroupChatQueryVariables>(GetGroupChatDocument, baseOptions);
        }
export type GetGroupChatQueryHookResult = ReturnType<typeof useGetGroupChatQuery>;
export type GetGroupChatLazyQueryHookResult = ReturnType<typeof useGetGroupChatLazyQuery>;
export type GetGroupChatQueryResult = Apollo.QueryResult<GetGroupChatQuery, GetGroupChatQueryVariables>;
export const GetMyApplicationsDocument = gql`
    query getMyApplications($applicant: ID!) {
  applications(where: {applicant: $applicant}) {
    id
    message
    status
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
    member_max
    max_age
    min_age
    booking_status
    description
    leader {
      id
      username
      image {
        url
      }
    }
    members {
      id
      image {
        url
      }
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
export const GetMyLeadGroupsDocument = gql`
    query getMyLeadGroups($id: ID!) {
  groups(where: {leader: {id: $id}}) {
    id
    name
    member_max
    max_age
    min_age
    booking_status
    description
    leader {
      id
    }
    members {
      id
    }
    applications(where: {status: "undecided"}) {
      id
    }
  }
}
    `;

/**
 * __useGetMyLeadGroupsQuery__
 *
 * To run a query within a React component, call `useGetMyLeadGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyLeadGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyLeadGroupsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMyLeadGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyLeadGroupsQuery, GetMyLeadGroupsQueryVariables>) {
        return Apollo.useQuery<GetMyLeadGroupsQuery, GetMyLeadGroupsQueryVariables>(GetMyLeadGroupsDocument, baseOptions);
      }
export function useGetMyLeadGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyLeadGroupsQuery, GetMyLeadGroupsQueryVariables>) {
          return Apollo.useLazyQuery<GetMyLeadGroupsQuery, GetMyLeadGroupsQueryVariables>(GetMyLeadGroupsDocument, baseOptions);
        }
export type GetMyLeadGroupsQueryHookResult = ReturnType<typeof useGetMyLeadGroupsQuery>;
export type GetMyLeadGroupsLazyQueryHookResult = ReturnType<typeof useGetMyLeadGroupsLazyQuery>;
export type GetMyLeadGroupsQueryResult = Apollo.QueryResult<GetMyLeadGroupsQuery, GetMyLeadGroupsQueryVariables>;
export const GetOpenGroupsDocument = gql`
    query getOpenGroups {
  groups(where: {status: "open"}) {
    id
    name
    member_max
    max_age
    min_age
    booking_status
    description
    members {
      id
    }
    leader {
      username
      image {
        url
      }
    }
    preferred_rooms {
      id
      name
    }
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
export const GetOpenUsersDocument = gql`
    query getOpenUsers($groupId: ID!) {
  group(id: $groupId) {
    id
    leader {
      id
    }
    members {
      id
    }
    invites {
      invitee {
        id
      }
    }
    applications {
      applicant {
        id
      }
    }
  }
  users(where: {open_to_invite: true}) {
    id
    username
    age
    about
    open_to_invite
    hide_age
  }
}
    `;

/**
 * __useGetOpenUsersQuery__
 *
 * To run a query within a React component, call `useGetOpenUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOpenUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOpenUsersQuery({
 *   variables: {
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGetOpenUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetOpenUsersQuery, GetOpenUsersQueryVariables>) {
        return Apollo.useQuery<GetOpenUsersQuery, GetOpenUsersQueryVariables>(GetOpenUsersDocument, baseOptions);
      }
export function useGetOpenUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOpenUsersQuery, GetOpenUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetOpenUsersQuery, GetOpenUsersQueryVariables>(GetOpenUsersDocument, baseOptions);
        }
export type GetOpenUsersQueryHookResult = ReturnType<typeof useGetOpenUsersQuery>;
export type GetOpenUsersLazyQueryHookResult = ReturnType<typeof useGetOpenUsersLazyQuery>;
export type GetOpenUsersQueryResult = Apollo.QueryResult<GetOpenUsersQuery, GetOpenUsersQueryVariables>;
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
      description
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
    member_max
    booking_status
    status
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
        image {
          url
        }
      }
    }
    members {
      id
      username
      age
      about
      image {
        url
      }
    }
    invites(where: {group_leader_dismissed: false}) {
      id
      message
      status
      invitee {
        username
        image {
          url
        }
      }
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