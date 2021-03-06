import React from "react"
import { RouteComponentProps } from "react-router"

import { useSelector } from "react-redux"
import { RootType } from "store/rootReducer"
import { AuthState } from "store/slices/auth"

import { useQuery } from "@apollo/client"
import { GetGroupChatDocument } from "generated/graphql"

import {
    Box,
    Button,
    Grid,
    IconButton,
    makeStyles,
    TextField,
    Tooltip,
    Typography,
} from "@material-ui/core"
import { Lock, LockOpen, Settings } from "@material-ui/icons"

import MembersList from "components/Chat/MemberList/MemberList"
import MessageList from "components/Chat/MessageList/MessageList"

const useStyles = makeStyles((theme) => ({
    chatGrid: {
        width: "100%",
    },
    membersSection: {
        width: "100%",
    },
    messagesSection: {
        width: "100%",
        height: "500px",
    },
}))

interface ChatParams {
    id: string
}
interface ChatProps extends RouteComponentProps<ChatParams> {}

const Chat: React.FC<ChatProps> = (props) => {
    const classes = useStyles()

    // Redux
    const auth = useSelector<RootType, AuthState>((state) => state.auth)
    let myId: string = ""
    if (auth.user !== null) {
        myId = auth.user.id
    }

    // GraphQL
    const { loading, error, data } = useQuery(GetGroupChatDocument, {
        variables: { id: props.match.params.id },
    })

    // Handlers
    const onEditDetailsClick = (groupId: string) => {
        props.history.push("/group/edit/" + groupId)
    }

    const onManageMembersClick = (groupId: string) => {
        props.history.push("/group/manage/" + groupId)
    }

    // Render
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const groupId = props.match.params.id
    const isLeader = myId === data.group.leader.id
    const leader = data.group.leader
    const membersAndLeader = [...data.group.members]
    membersAndLeader.push(data.group.leader)
    const membershipIsClosed = data.group.status === "closed"

    return (
        <React.Fragment>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <div style={{ flex: "1" }}></div>
                <div style={{ flex: "2" }}>
                    <Typography variant="h4" style={{ marginBottom: "2rem" }}>
                        {data.group.name}

                        {isLeader ? (
                            <Tooltip title="Edit Group Details">
                                <IconButton
                                    onClick={() => {
                                        props.history.push(
                                            `/group/edit/${props.match.params.id}`
                                        )
                                    }}
                                >
                                    <Settings />
                                </IconButton>
                            </Tooltip>
                        ) : null}
                    </Typography>
                </div>
                <div style={{ flex: "1", textAlign: "right" }}>
                    <Tooltip
                        title={
                            membershipIsClosed
                                ? ""
                                : "Room booking will become available when group membership is closed"
                        }
                    >
                        <span>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{ maxHeight: "2.5rem" }}
                                startIcon={
                                    membershipIsClosed ? <LockOpen /> : <Lock />
                                }
                                onClick={(event) => {
                                    console.log("Move to booking page")
                                }}
                                disabled={!membershipIsClosed}
                            >
                                Book Room Now
                            </Button>
                        </span>
                    </Tooltip>
                </div>
            </div>

            <Grid container className={classes.chatGrid}>
                <Grid item xs={12} sm={2}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                    >
                        <Typography variant="button">Members List</Typography>

                        <div className={classes.membersSection}>
                            <MembersList
                                members={data.group.members}
                                leader={leader}
                            />
                        </div>
                        {isLeader ? (
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => onManageMembersClick(groupId)}
                            >
                                Manage Members
                            </Button>
                        ) : null}
                    </div>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Box
                        className={classes.messagesSection}
                        border={1}
                        borderRadius={16}
                        borderColor="grey.300"
                    >
                        <MessageList />
                    </Box>
                    <Grid
                        item
                        xs={12}
                        style={{ display: "flex", marginTop: "1rem" }}
                    >
                        <TextField
                            id="outlined-basic"
                            placeholder="Type here and press Enter to send a message"
                            variant="outlined"
                            style={{ flexGrow: 2 }}
                        />
                        <Button variant="contained" color="primary">
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Button
                color="primary"
                variant="outlined"
                style={{ margin: "2rem" }}
                onClick={() => props.history.goBack()}
            >
                Back To My Groups
            </Button>
        </React.Fragment>
    )
}

export default Chat
