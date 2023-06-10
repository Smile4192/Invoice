import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

AnalyticsWidgetSummary.propTypes = {
  sx: PropTypes.object,
  date: PropTypes.string,
  color: PropTypes.string,
  status: PropTypes.string,
  total: PropTypes.number,
};

export default function AnalyticsWidgetSummary({
  status,
  total,
  date,
  color = 'primary',
  sx,
  ...other
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: theme.palette[color].darker,
        bgcolor: theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h4" sx={{ opacity: 0.64 }}>
        {date}
      </Typography>

      <Typography variant="h3">${total}</Typography>

      <Typography variant="h4" sx={{ opacity: 0.64 }}>
        {status}
      </Typography>
    </Card>
  );
}
