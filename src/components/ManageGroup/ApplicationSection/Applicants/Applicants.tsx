import React from "react"
import * as Types from "generated/graphql"

import ThumbDown from "@material-ui/icons/ThumbDown"
import ThumbUp from "@material-ui/icons/ThumbUp"
import FindInPage from "@material-ui/icons/FindInPage"
import {
    TableCell,
    TableRow,
    Table,
    TableHead,
    TableBody,
    TableContainer,
    IconButton,
    Tooltip,
    makeStyles,
} from "@material-ui/core"
import UserBadge from "components/UserBadge/UserBadge"

const useStyles = makeStyles({
    userCell: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    avatar: {
        marginRight: "1rem",
    },
})

interface ApplicantsProps {
    acceptApplication: (applicationId: string) => void
    rejectApplication: (applicationId: string) => void
    viewProfile: (userId: string) => void
    applications: Types.Application[]
}

const Applicants: React.FC<ApplicantsProps> = (props) => {
    // let appsJsx = null
    // if (props.applications) {
    //     appsJsx = props.applications.map((app) => {
    //         return (
    //             <Applicant
    //                 key={app.id}
    //                 application={app}
    //                 acceptApplication={props.acceptApplication}
    //                 rejectApplication={props.rejectApplication}
    //             />
    //         )
    //     })
    // }

    // return <List>{appsJsx}</List>
    const classes = useStyles()

    // const viewProfileHandler: (application: Types.Application) => {
    //     if (application.applicant?.id) {
    //         props.viewProfile(
    //             application.applicant?.id
    //         )
    //     } else {
    //         throw new Error(
    //             "User id not found"
    //         )
    //     }
    // }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User</TableCell>
                        <TableCell>Message</TableCell>

                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.applications.map((application) => (
                        <TableRow key={application.id}>
                            <TableCell component="th" scope="row">
                                <div className={classes.userCell}>
                                    {application.applicant ? (
                                        <UserBadge
                                            user={application.applicant}
                                        />
                                    ) : null}
                                </div>
                            </TableCell>
                            <TableCell>{application.message}</TableCell>

                            <TableCell align="center">
                                <Tooltip title="View Profile">
                                    <IconButton
                                    // TODO: Setup view profile handler
                                    // onClick={() =>
                                    //     props.viewProfile(
                                    //         application.applicant?.id
                                    //     )
                                    // }
                                    >
                                        <FindInPage />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Accept">
                                    <IconButton
                                        onClick={() =>
                                            props.acceptApplication(
                                                application.id
                                            )
                                        }
                                    >
                                        <ThumbUp />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Reject">
                                    <IconButton
                                        onClick={() =>
                                            props.rejectApplication(
                                                application.id
                                            )
                                        }
                                    >
                                        <ThumbDown />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Applicants
