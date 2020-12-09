import * as Types from "../generated/graphql"

const getOpenSlots = (group: Types.Group) => {
    let open_slots = 0
    if (group.members && group.member_max) {
        open_slots = group.member_max - group.members.length
    }

    return open_slots
}

export default {
    getOpenSlots,
}
