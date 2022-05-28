import Grid from '@mui/material/Grid';

const FeedbackStats = ({ feedback }) => {
// Calculate ratings average
let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
}, 0) / feedback.length

let fixedAverage = Math.round(average * 100) / 100

  return (
    <Grid container
      sx={{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
      }}
    >
       <Grid item>
      <h2>{feedback.length} Reviews</h2>
      </Grid>
      <h4>Average Rating: {isNaN(fixedAverage) ? 0 : fixedAverage}</h4>
    </Grid>
  );
};

export default FeedbackStats;
