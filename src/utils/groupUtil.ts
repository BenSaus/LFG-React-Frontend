import * as Types from "../generated/graphql"

const getOpenSlots = (group: Types.Group) => {
    let open_slots = -1
    if (group.members && group.member_max) {
        // Minus 1 to remove the leader from the member count
        open_slots = group.member_max - (group.members.length - 1)
    }

    return open_slots
}

export default {
    getOpenSlots,
}
