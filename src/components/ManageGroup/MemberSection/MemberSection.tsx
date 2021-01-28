import React, { useState } from "react"
import Members from "./Members/Members"
import * as Types from "generated/graphql"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { useMutation } from "@apollo/client"
import { RemoveMemberDocument } from "generated/graphql"

import OpenCloseGroupButton from "./OpenCloseGroupButton/OpenCloseGroupButton"
import MemberSlotButtons from "./MemberSlotButtons/MemberSlotButtons"

const useStyles = makeStyles((theme) => ({
    card: {
        padding: "1rem",
        margin: "2rem",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
    },
}))

interface MembersSectionProps {
    groupData: Types.Group
    members: Types.UsersPermissionsUser[]
    onRemoveMember: (id: string) => void
    onViewMember: (memberId: string) => void
}

const MembersSection: React.FC<MembersSectionProps> = (props) => {
    const classes = useStyles()

    // State
    const [groupClosed, setGroupClosed] = useState(
        props.groupData.status !== "open"
    )

    // GraphQL
    const [removeMember, { data: removeData }] = useMutation(
        RemoveMemberDocument
    )

    // Handlers

    const onClickRemoveMember = async (memberId: string) => {
        const resp = await removeMember({
            variables: {
                groupId: props.groupData.id,
                memberId: memberId,
            },
        })

        // Notify the parent, which holds the member array
        props.onRemoveMember(memberId)
    }

    // Render
    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <Typography
                    className={classes.cardTitle}
                    variant="h5"
                    component="h2"
                    style={{ marginBottom: "1rem" }}
                >
                    Membership
                </Typography>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "1rem",
                    }}
                >
                    <OpenCloseGroupButton
                        groupId={props.groupData.id}
                        closed={groupClosed}
                        onCloseGroup={() => setGroupClosed(true)}
                        onOpenGroup={() => setGroupClosed(false)}
                    />
                </div>
            </div>

            {props.groupData.member_max ? (
                <Members
                    memberMax={props.groupData.member_max}
                    members={props.members}
                    onClickViewMember={props.onViewMember}
                    onClickRemoveMember={onClickRemoveMember}
                    showOpenSlots={!groupClosed}
                />
            ) : null}

            {props.groupData.member_max && groupClosed === false ? (
                <MemberSlotButtons
                    groupId={props.groupData.id}
                    memberMax={props.groupData.member_max}
                    memberNumber={props.members.length}
                />
            ) : null}
        </React.Fragment>
    )
}

export default MembersSection
