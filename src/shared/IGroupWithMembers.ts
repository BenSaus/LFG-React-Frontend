import { Scalars, Maybe } from "./BaseTypes"
import {
    Enum_Group_Booking_Status,
    UsersPermissionsUser,
    Application,
    Invite,
    Enum_Group_Status,
    Room,
} from "generated/graphql"

export type IGroupWithMembers = {
    __typename?: "Group"
    id: Scalars["ID"]
    created_at: Scalars["DateTime"]
    updated_at: Scalars["DateTime"]
    description?: Maybe<Scalars["String"]>
    member_max: Scalars["Int"]
    booking_status?: Maybe<Enum_Group_Booking_Status>
    max_age?: Maybe<Scalars["Int"]>
    min_age?: Maybe<Scalars["Int"]>
    bookdate?: Maybe<Scalars["DateTime"]>
    name?: Maybe<Scalars["String"]>
    leader?: Maybe<UsersPermissionsUser>
    status?: Maybe<Enum_Group_Status>
    applications?: Maybe<Array<Maybe<Application>>>
    members: Array<Maybe<UsersPermissionsUser>>
    invites?: Maybe<Array<Maybe<Invite>>>
    preferred_rooms?: Maybe<Array<Maybe<Room>>>
}
