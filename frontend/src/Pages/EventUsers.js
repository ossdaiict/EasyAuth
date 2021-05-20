import React from "react";
import { GetUserDataInTable } from "../APIs/GetUserData";
import UserDetails from "../Components/UserDetails";
import { CircularProgress, Grid, Typography } from "@material-ui/core";

export default function EventUsers(props) {
  const eventId = props.match.params.eventid;
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    GetUserDataInTable(eventId, 1, 1)
      .then(({ data }) => {
        setUsers(data.objs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventId]);

  return (
    <div>
      {loading ? (
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          style={{ height: "80vh", textAlign: "center" }}
        >
          <Grid item>
            <CircularProgress size={40} />
          </Grid>
        </Grid>
      ) : users.length ? (
        users.map((user, ind) => <UserDetails user={user} key={ind} />)
      ) : (
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          style={{ height: "80vh", textAlign: "center" }}
        >
          <Grid item>
            <Typography variant="h4" color="textSecondary">
              No Users
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
