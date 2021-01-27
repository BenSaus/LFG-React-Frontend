import React from "react"

import { useMutation } from "@apollo/client"
import { SetMemberMaxDocument } from "generated/graphql"

import { Button } from "@material-ui/core"
import { Delete, PersonAdd } from "@material-ui/icons"

interface MemberSlotsProps {
    memberMax: number
    memberNumber: number
    groupId: string
}

const MemberSlots: React.FC<MemberSlotsProps> = (props) => {
    // GraphQL
    const [setMemberMax, { data: setMemberMaxData }] = useMutation(
        SetMemberMaxDocument
    )

    //
    const onAddMemberSlot = async () => {
        // TODO: Clamp this (1, GroupMax)
        // HARDCODED: The max and min group sizes are hardcoded
        const member_max = Math.min(Math.max(props.memberMax + 1, 1), 8)

        const resp = await setMemberMax({
            variables: {
                id: props.groupId,
                member_max,
            },
        })
    }

    const onRemoveMemberSlot = async () => {
        // Do not allow member number > member_max

        // TODO: Clamp this (1, GroupMax)
        // HARDCODED: The max and min group sizes are hardcoded
        const memberMinimum = Math.max(props.memberNumber, 1)

        const member_max = Math.min(
            Math.max(props.memberMax - 1, memberMinimum),
            8
        )

        const resp = await setMemberMax({
            variables: {
                id: props.groupId,
                member_max,
            },
        })
    }

    return (
        <React.Fragment>
            <Button
                color="primary"
                variant="outlined"
                onClick={onAddMemberSlot}
                style={{ marginRight: "1rem" }}
                startIcon={<PersonAdd />}
            >
                Add Slot
            </Button>
            <Button
                color="primary"
                variant="outlined"
                onClick={onRemoveMemberSlot}
                startIcon={<Delete />}
            >
                Remove Slot
            </Button>
        </React.Fragment>
    )
}

export default MemberSlots
