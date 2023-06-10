import PropTypes from 'prop-types';
// @mui
import { Box, Link, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

CustomBreadcrumbs.propTypes = {
  sx: PropTypes.object,
  action: PropTypes.node,
  heading: PropTypes.string,
  moreLink: PropTypes.array,
  activeLast: PropTypes.bool,
};

export default function CustomBreadcrumbs({
  action,
  heading,
  moreLink,
  activeLast,
  sx,
  ...other
}) {

  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          {/* HEADING */}
          {heading && (
            <Typography variant="h4" gutterBottom>
              {heading}
            </Typography>
          )}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
      </Stack>

      {/* MORE LINK */}
      {!!moreLink && (
        <Box sx={{ mt: 2 }}>
          {moreLink.map((href) => (
            <Link
              noWrap
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}
